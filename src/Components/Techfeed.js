import React, { Component } from 'react'

export class Techfeed extends Component {
    render() {
        return this.props.Tech.map((tech) =>(
            <div className="col-md-4">
           <a href={tech.url}>
           <div className="Top-news" >
            <img  className="breaking-images" src={tech.multimedia[0].url} alt="images"/>
            <p className="breaking-title">{tech.title}</p>
            <p className="breaking-content">{tech.abstract}</p>
        </div>
           </a>
       </div>
            
        ));
    }
}

export default Techfeed
