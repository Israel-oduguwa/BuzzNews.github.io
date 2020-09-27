import React, { Component } from 'react';


export class Poly extends Component {
    render() {
        return this.props.politic.map((politicsf) =>(
            <div className="col-md-4">
           <a href={politicsf.url}>
           <div className="Top-news" >
            <img  className="breaking-images" src={politicsf.multimedia[0].url} alt="images"/>
            <p className="breaking-title">{politicsf.title}</p>
            <p className="breaking-content">{politicsf.abstract}</p>
        </div>
           </a>
       </div>
            
        ));
    }
}

export default Poly
