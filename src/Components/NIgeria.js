import React, { Component } from 'react'

export class NIgeria extends Component {
    render() {
        return this.props.feed.map((niger) =>(
            <div className="col-md-4">
           <a href={niger.url}>
           <div className="Breaking-nws" >
            <img  className="breaking-images" src={niger.urlToImage} alt="images"/>
            <p className="breaking-title">{niger.title}</p>
            <p className="breaking-content">{niger.content}</p>
        </div>
           </a>
       </div>

        ));
    }
}

export default NIgeria
