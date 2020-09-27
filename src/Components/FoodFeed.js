import React, { Component } from 'react';
import axios from "axios";
import Food from "../Components/Food";
import Loader from './Loader';

export class FoodFeed extends Component {
 
    constructor(){
        super();
        this.state ={
            FoodState:[],
            Loaded:true,
        }
    }
      //Life cycle method
     
      componentDidMount(){
          this.fetchMoreData();
          window.scrollTo(0, 0);
          
      }
  
      fetchMoreData =() =>{
          const api =`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=0h1n0q2CcypQFveEC77rScyDpw0Pd2bZ`
          axios
          .get(api)
  
          .then(res => 
              this.setState({ 
                  FoodState:res.data.results,
                Loaded:false})
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
                           <h4>Food and Nutrition</h4>
                       </div>  
                   <Food foods={this.state.FoodState}/>
                   </div>
               </div>
           </section>
           }
            </>
        )
    }
}

export default FoodFeed
