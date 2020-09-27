import React, { Component } from 'react'

export class Sporting extends Component {
    render() {
        return this.props.sport.map((sports) =>(
            <div className="col-md-4">
           <a href={sports.url}>
           <div className="Top-news" >
            <img  className="breaking-images" src={sports.multimedia[0].url} alt="images"/>
            <p className="breaking-title">{sports.title}</p>
            <p className="breaking-content">{sports.abstract}</p>
        </div>
           </a>
       </div>
            
        ));
    }
}

export default Sporting
