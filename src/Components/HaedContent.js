import React from 'react'
import Loader from "../Components/Loader";

export default function HaedContent(props) {
   
if(!props.data[0]){
    return(
       <Loader/>
    )
}


    return (
        
        <>
{
    props.data[0].multimedia[0].caption ?
   <div>
         <a href="https://www.travelchannel.com/interests/travel-tips/articles/top-10-vacation-spots">
   <div className="top-image">
  <div className="hero-wrapper">
        <p className="title">Featured</p>
       <p className="info">
        Top 10 Vacation Spots
        </p>
      
      
    </div> 
     </div> </a>
     <div className="row down-side">
         
         <div className="col-md-6">
       <div className="low-left">
       <div className="hero-wrapper-low">
        <p className="title">Featured</p>
        <p className="info">
        <a style={{color:"white"}} href="https://www.buzzfeed.com/kimberleydadds/movies-you-must-watch-before-you-turn-30">24 Movies to watch before turning 30</a> 
        </p>
       
       </div>
         </div>
        
 </div>
 <div className="col-md-6">
        <div className="low-right">
        <div className="hero-wrapper-low">
        <p className="title">Featured</p>
        <p className="info">
            <a style={{color:"white"}} href="https://www.nhs.uk/live-well/eat-well/eight-tips-for-healthy-eating/">8 tips for healthy eating</a>
        </p>
       
        </div>
         </div>
     </div>
  </div>
  </div> :
  <Loader/>
}
          
        </>
      
    )
}
