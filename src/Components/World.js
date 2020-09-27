import React, { Component } from 'react';


export class World extends Component {
    render() {

            return this.props.feeds.map((feedNews) =>(
                <div className="col-md-4">
               <a href={feedNews.url}>
               <div className="Top-news" >
                <img  className="breaking-images" src={feedNews.multimedia[0].url} alt="images"/>
                <p className="breaking-title">{feedNews.title}</p>
                <p className="breaking-content">{feedNews.abstract}</p>
            </div>
               </a>
           </div>
                
            ));
       
    }
}

export default World
