import React, { Component } from 'react'
import Foote from "../Components/Foote";
import FoodFeed from "../Components/FoodFeed";
export class FoodNews extends Component {
  render() {
    return (
    <>
       <div className="home-page">
    <FoodFeed/>
    </div>
    <Foote/>
    </>
    )
  }
}

export default FoodNews
