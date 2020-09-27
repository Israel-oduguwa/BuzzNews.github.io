import React, { Component } from 'react';
import axios from "axios";
import {fetchHead} from "../Covid19Api/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import HaedContent from "../Components/HaedContent";



export class Head extends Component {
    constructor(){
        super()
        this.state ={
            headSection:[],
            loaded:true
        }
    }
  
  async componentDidMount(){
      const datam = await fetchHead();
      this.setState({
          headSection:datam.data.results,
          loaded:false,
      }) 
      
        window.scrollTo(0, 0);
    }

    content(){
        let caption = this.state.headSection;
        return(
            <div className="lay">
             {console.log(caption)}
            </div>
        )
        
    }
   
   
    render() {
       
        
        return (
         <div className="header">
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-6">
            <Carousel autoPlay infiniteLoop>
   {
       this.state.headSection.map((e,index)=>
       <div>
           <img alt="" key={index} src={e.multimedia[0].url} />
           <p key={index} className="legend">{e.multimedia[0].caption}</p>
       </div>
      
       
       )
   }
   </Carousel>
            </div>
            <div className="col-md-6">
          <HaedContent data={this.state.headSection}  />
         </div>
        </div>
       </div>
       </div>
        )
    }
}

export default Head

    