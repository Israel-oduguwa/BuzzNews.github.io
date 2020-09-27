import React, { Component } from 'react';
import TopNews  from "../Components/TopNews";
import Breaking from "../Components/Breaking";
import Foote from "../Components/Foote";
import Head from "../Components/Head";


export class Home extends Component {
    render() {
        return (
            <>
         <div className="home-page">
         <Head />
           <TopNews/>
           <Breaking/>
          
         </div>
            
         <Foote/>

         
            </>
        )
    }
}

export default Home
