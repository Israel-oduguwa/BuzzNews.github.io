import React, { Component } from 'react'

export class Travelling extends Component {
    render() {
        return this.props.travel.map((travels) =>(
            <div className="col-md-4">
           <a href={travels.url}>
           <div className="Top-news" >
            <img  className="breaking-images" src={travels.multimedia[0].url} alt="images"/>
            <p className="breaking-title">{travels.title}</p>
            <p className="breaking-content">{travels.abstract}</p>
        </div>
           </a>
       </div>
            
        ));
    }
}

export default Travelling
