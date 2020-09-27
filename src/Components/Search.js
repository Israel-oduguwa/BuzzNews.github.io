import React, { Component } from 'react';
import {FaSearch} from "react-icons/fa";
import axios from "axios";
import {Redirect} from "react-router-dom";


export class Search extends Component {
    constructor(){
        super()
        this.state={ 
            searchResults:[],
           SearchName:""
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.changeTerm=this.changeTerm.bind(this);
    }
    changeTerm(e){
        this.setState({
            SearchName: e.target.value
        });
    }
    handleSubmit(e){
       e.preventDefault();
       window.scrollTo(0, 0);
       let api = `https://content.guardianapis.com/search?order-by=newest&page-size=100&show-elements=image&show-fields=thumbnail%2Cheadline&q=${this.state.SearchName}&api-key=3702980c-a97f-4499-9e1c-eabfc79b25ed`
      axios.get(api)
      .then(res => {
     
        this.setState({ 
            searchResults:res.data.response.results});
      })
   .catch(error => console.log("error"));
    }
    render() {
        
        return (
       <>
            <form onSubmit={this.handleSubmit} className="search">
                        <input type="text" className="searchTerm" onChange={this.changeTerm} 
                         placeholder="Search News..."/>
                         <button type="submit" className="searchButton">
                             <FaSearch/>
                            </button>
                         
            </form> 
                 
            {this.state.searchResults.length > 0 ? 
            <Redirect to={{
                pathname:"/search",
                state: {...this.state.searchResults},
                
            }} />:
        <Redirect to="/"/> }

       </>
        )
    }
}

export default Search
