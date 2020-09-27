import React, { Component } from 'react';
import axios from "axios";
import Poly from "../Components/Poly";
import Loader from "../Components/Loader.js";

export class PoiliticsFeed extends Component {

    constructor(){
        super();
        this.state ={
            PoliticsFeed:[],
            Loader:true,
        }
    }
      //Life cycle method
     
      componentDidMount(){
          this.fetchMoreData();
          window.scrollTo(0, 0);
          
      }
  
      fetchMoreData =() =>{
          const api =`https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=eRWBEJBGxsRRzqkIX7LsnneGyihm6UIy`
          axios
          .get(api)
  
          .then(res => 
              this.setState({ 
                  PoliticsFeed:res.data.results,
                Loader:false})
          )
      }
    render() {
        return (
            <>

         {
           
             this.state.Loader
             ?
            
         <Loader/>:
         <section className="World-news">
             <div className="container">
                 <div className="row">
                     <div className="col-md-12">
                         <h4>Politics</h4>
                     </div>  
                 <Poly politic={this.state.PoliticsFeed}/>
                 </div>
             </div>
         </section>
        
         }
           </>
        )
    }
}

export default PoiliticsFeed
