import React, { Component } from 'react';
import Sporting from "../Components/Sporting";
import axios from "axios";
import Loader from './Loader';

export class SportsFeed extends Component {

        
    constructor(){
        super();
        this.state ={
            sportState:[],
            load:true,
        }
    }
      //Life cycle method
     
      componentDidMount(){
          this.fetchMoreData();
          window.scrollTo(0, 0);
          
      }
  
      fetchMoreData =() =>{
          const api =`https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=eRWBEJBGxsRRzqkIX7LsnneGyihm6UIy`
          axios
          .get(api)
  
          .then(res => 
              this.setState({ 
                  sportState:res.data.results,
                load:false})
          )
      }


    render() {
        return (
            <>
            {
                this.state.load ?
                <Loader/>
                :
                <section className="World-news">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Sport News</h4>
                        </div>  
                    <Sporting sport={this.state.sportState}/>
                    </div>
                </div>
            </section>
            }
            </>
        )
    }
}

export default SportsFeed
