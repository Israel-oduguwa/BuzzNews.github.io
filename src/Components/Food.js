import React, { Component } from 'react'

export class Food extends Component {
    render() {
        return this.props.foods.map((food) =>(
            <div className="col-md-4">
           <a href={food.url}>
           <div className="Top-news" >
            <img  className="breaking-images" src={food.multimedia[0].url} alt="images"/>
            <p className="breaking-title">{food.title}</p>
            <p className="breaking-content">{food.abstract}</p>
        </div>
           </a>
       </div>
            
        ));
    }
}

export default Food
