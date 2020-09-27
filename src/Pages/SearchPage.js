import React, { Component } from 'react';
import SearchCompnents from "../Components/SearchCompnents";
import Loader from '../Components/Loader';
import Foote from "../Components/Foote";

export class SearchPage extends Component {
    render() {
        const mad = Object.values(this.props.location.state);
     return(
         <>
            <div className="home-page">
            {
                mad ?
                <section className="World-news">
                <div className="container">   
                    <div className="row">
                        <div className="col-md-12">
                            <h4>{this.props.searchName}</h4>
                        </div>  
                        <SearchCompnents queries={mad}/>
                    </div>
                </div>
            </section>:
            <Loader/>
            }
            </div>
            <Foote/>
         </>
     )
    }
}


export default SearchPage
 