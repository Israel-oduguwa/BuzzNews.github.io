import React, { Component } from 'react'
import BreakingNews from './BreakingNews';
import axios from 'axios';
import Loader from './Loader';

export class Breaking extends Component {
    constructor(){
        super();
        this.state ={
            homeFeed:[],
            loaded:true
        }
    }
      //Life cycle method
     
      componentDidMount(){
          this.fetchMoreData();
        
          
      }
  
      fetchMoreData =() =>{
        const proxy=`https://cors-anywhere.herokuapp.com/`;
          const api =`${proxy}https://newsapi.org/v2/top-headlines?country=ng&apiKey=61a209750c7b43e4abfaf4b6fe5ab973`
          axios
          .get(api)
  
          .then(res => 
              this.setState({ 
                  homeFeed:res.data.articles,
                  loaded:false
                })
                 
          )
         
      }

    render() {
        return (
           <>
         {
             this.state.loaded ? <Loader/>:
             <section className="Breaking-news">
             <div className="container">
                 <div className="row">
              <div className="col-md-12">
                <h4>Nigeria</h4>
              </div>
         
                 </div>
                 <div className="Nija-news">
                 <div className="row">
               
                <BreakingNews  news={this.state.homeFeed}/>
                </div>
                
             </div>
             </div>
         </section>
         }
           </>
        )
    }
}

export default Breaking
