import React, { Component } from 'react';
import Foote from "../Components/Foote";
import TravelFeed from "../Components/TravelFeed";

export class Travel extends Component {
    
    render() {
        return (
           
           <>
            <div className="home-page">
            <TravelFeed/>
            </div>
            <Foote/>
           </>
        )
    }
}

export default Travel
