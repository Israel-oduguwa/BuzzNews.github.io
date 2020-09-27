import React, { Component } from 'react';
import Travelling from "../Components/Travelling";
import axios from "axios";
import Loader from './Loader';
export class TravelFeed extends Component {

    constructor(){
        super();
        this.state ={
            travelState:[],
            Loaded:true,
        }
    }
      //Life cycle method
     
      componentDidMount(){
          this.fetchMoreData();
          window.scrollTo(0, 0);
          
      }
  
      fetchMoreData =() =>{
          const api =`https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=eRWBEJBGxsRRzqkIX7LsnneGyihm6UIy`
          axios
          .get(api)
  
          .then(res => 
              this.setState({ 
                  travelState:res.data.results,
                Loaded:false
            })
          )
      }



    render() {
        return (
            <>
            {
                this.state.Loaded ?
               
            <Loader/>:
            <section className="World-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Travel</h4>
                    </div>  
                <Travelling travel={this.state.travelState}/>
                </div>
            </div>
        </section>
            }
            </>
        )
    }
}

export default TravelFeed
