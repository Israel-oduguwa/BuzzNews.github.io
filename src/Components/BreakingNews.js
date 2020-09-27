import React, { Component } from 'react';

export class BreakingNews extends Component {
    render() {
      
        return this.props.news.map((breaking,i) =>(
         <>
              
             <div className="col-md-4 Nija-news">
             <img key={i} className="breaking-images" src={breaking.urlToImage} alt="images"/>
             </div>
             <div className="col-md-8 nija-word">
             <a key={i} href={breaking.url}>
             <p key={i} className="nija-title">{breaking.title}</p>
            <p key={i} className="breaking-content">{breaking.content}</p>
            </a> 
             </div>     
                  
         </>
        ));
    }
}

export default BreakingNews

  