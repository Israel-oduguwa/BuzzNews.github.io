import React, { Component } from 'react';
import axios from "axios";
import Techfeed from "../Components/Techfeed";
import Loader from './Loader';

export class TechnologyFeed extends Component {

    constructor(){
        super();
        this.state ={
            TechnologyFeed:[],
            load:true,
        }
    }
      //Life cycle method
     
      componentDidMount(){
          this.fetchMoreData();
          window.scrollTo(0, 0);
          
      }
  
      fetchMoreData =() =>{
          const api =`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=eRWBEJBGxsRRzqkIX7LsnneGyihm6UIy`
          axios
          .get(api)
  
          .then(res => 
              this.setState({ 
                  TechnologyFeed:res.data.results,
                load:false})
          )
      }


    render() {
        return (
            <>
           {
               this.state.load ?
               <Loader/>:
               <section className="World-news">
               <div className="container">   
                   <div className="row">
                       <div className="col-md-12">
                           <h4>Tech News</h4>
                       </div>  
                   <Techfeed Tech={this.state.TechnologyFeed}/>
                   </div>
               </div>
           </section>
           }
            </>
        )
    }
}

export default TechnologyFeed
