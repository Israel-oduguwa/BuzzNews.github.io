import React, { Component } from 'react'

export class SearchCompnents extends Component {
    render() {
        return this.props.queries.map((rec)=>(
            <div className="col-md-4">
            <a href={rec.webUrl}>
            <div className="Top-news" >
             <img  className="breaking-images" src={rec.fields.thumbnail} alt="images"/>
             <p className="breaking-title">{rec.fields.headline}</p>
            
            
         </div>
            </a>
        </div>
        ))
    }
}

export default SearchCompnents
