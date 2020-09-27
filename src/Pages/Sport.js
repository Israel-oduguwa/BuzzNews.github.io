import React, { Component } from 'react';
import SportsFeed from "../Components/SportsFeed";
import Foote from "../Components/Foote";

export class Sport extends Component {
    render() {
        return (
           <>
              <div className="home-page">
           <SportsFeed/>
           </div>
           <Foote/>
           </>
        )
    }
}

export default Sport
