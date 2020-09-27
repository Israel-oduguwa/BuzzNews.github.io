import React, { Component } from 'react';

export class Progress extends Component {
    constructor(){
        super();
        this.state = {
            progress:0,
        }
    }
componentDidMount(){
    this.setState({
        progress:100
    })
}
  
    render() {
        return (
            
                  <div className="progress-div">
            <div   className="progress"/>
        </div>
           
        )
    }
}

export default Progress
