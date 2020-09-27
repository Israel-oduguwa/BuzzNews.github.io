import React, { Component } from 'react';
import Foote from "../Components/Foote";
import TechnologyFeed from "../Components/TechnologyFeed";

export class Technology extends Component {
    render() {
        return (
           <>
              <div className="home-page">
           <TechnologyFeed/>
           </div>
           <Foote/>
           </>
        )
    }
}

export default Technology
