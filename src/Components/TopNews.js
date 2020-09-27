import React, { Component } from 'react';
import Top from "../Components/Top";
import axios from "axios";
import Loader from "../Components/Loader";




export class TopNews extends Component {
  constructor(){
      super();
      this.state ={
          TopNews:[],
          loaded:true,
         
      }
  }
    //Life cycle method
   
    componentDidMount(){
        this.fetchMoreData();
         window.scrollTo(0, 0);
    }

    fetchMoreData =() =>{
        const api =`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=eRWBEJBGxsRRzqkIX7LsnneGyihm6UIy`
        axios
        .get(api)

        .then(res => 
            this.setState({ 
                
                TopNews:res.data.results,
                loaded:false}),
         
        )
    }
   
    render() {
        return (
           <>
           {
               this.state.loaded ? 
               <Loader/>
         :
            <section className="Top-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Top News</h4>
                    </div>
                 
                    <Top tops={this.state.TopNews}/>
                   
                </div>
            </div>
        </section>
           }
           </>
        )
    }
}

export default TopNews
