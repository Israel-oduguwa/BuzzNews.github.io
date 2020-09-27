import React, { Component } from 'react';
import Foote from "../Components/Foote";
import PoliticsFeed from "..//Components/PoiliticsFeed";


export class Politics extends Component {
    render() {
        return (
           <>
           <div className="home-page">
             <PoliticsFeed/>
             </div>
            <Foote/>
           </>
        )
    }
}

export default Politics
