import React, { Component } from 'react';
import axios from "axios";
import NIgeria from "../Components/NIgeria"
import Loader from './Loader';


export class NigeriaFeeds extends Component {
    constructor(){
        super();
        this.state ={
            NigeriaFeed:[],  
           Loaded:true,
        }
    }

    componentDidMount(){
        this.fetchMoreData();
        window.scrollTo(0, 0);
    }

    fetchMoreData =() =>{
        
        const api =`http://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=61a209750c7b43e4abfaf4b6fe5ab973`
        axios
        .get(api)

        .then(res => 
            this.setState({ 
                NigeriaFeed:res.data.articles,
            Loaded:false})
        )
    }
    render() {
        return (
            <>
            {
                this.state.Loaded ?
                <Loader/>
                :
                <section className="Top-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Nigeria health News</h4>
                    </div>
               <NIgeria feed={this.state.NigeriaFeed}/>
                </div>
            </div>
        </section>
            }
            </>
        )
    }
}

export default NigeriaFeeds
