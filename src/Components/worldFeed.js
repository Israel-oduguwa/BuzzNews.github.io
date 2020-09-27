import React, { Component } from 'react';
import axios from "axios";
import World from "../Components/World";
import Loader from "../Components/Loader";


export class worldFeed extends Component {
    constructor(){
        super();
        this.state ={
            WorldFeed:[],
           Loaded:true,
           
        }
    }
      //Life cycle method
     
      componentDidMount(){
          this.fetchMoreData();
          
      }
  
      fetchMoreData =() =>{
          
          const api =`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=fLsbZO0l8i6kIJNDCGXFQtKX0AgQdsQ0`
          axios
          .get(api)
  
          .then(res => 
              this.setState({ 
                  WorldFeed:res.data.results,
                Loaded:false})
          )
      }
     
    render() {
        return (
            <>
         <div className="World">
         {
                this.state.Loaded ?
                <Loader />:
            
            <section className="World-news">
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                           <h4>World News</h4>
                       </div>
                   <World feeds={this.state.WorldFeed}/>
                   </div>
               </div>
           </section>
            }
         </div>
           </>
        )
    }
}

export default worldFeed

