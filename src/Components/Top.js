import React, { Component } from 'react'

export class Top extends Component {
    render() {
      
         return this.props.tops.map((topNews) =>(
            <div className="col-md-4">
           <a href={topNews.short_url}>
           <div className="Top-news" >
               
            <img  className="breaking-images" src={topNews.multimedia[0].url} alt="images"/>
            <p className="breaking-title">{topNews.title}</p>
            <p className="breaking-content">{topNews.abstract}</p>
        </div>
           </a>
       </div>
            
        ));
    }
}

export default Top
