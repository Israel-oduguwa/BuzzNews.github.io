import React, { Component } from 'react';
import Card from "../Components/Cards/Cards";
import Charts from "../Components/Chart/Charts";
import CountryChoose from "../Components/Country/CountryChoose";
import Footer from "../Components/Foote";
import Corona from "../images/icons8-coronavirus-64.png";
// import the Covid api by calling the firstData
import {fetchData} from "../Covid19Api/index";
import Loader from '../Components/Loader';


export class Covid19 extends Component {
    constructor(){
        super()
        this.state={
            covidData:[],
            country:'',
        }
    }
  async componentDidMount(){
        const data = await fetchData();
       
        this.setState({
            covidData:data
        })
        window.scrollTo(0, 0);
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
       this.setState({
           covidData:fetchedData,
           country:country
       })
    }
    render() {
        const {covidData , country}=this.state
        return (
           <>  
              <div className="home-page">          
        {
            covidData ?
            <div className="covid-page" style={{marginTop:"20vh",width:"100%"}}>
            <h4>C 
                <img src={Corona} alt="o" />vid 19 </h4>
        <Card cardData={covidData}/>
         
          <CountryChoose handleCountryChange={this.handleCountryChange} />
          <Charts data={covidData} country={country} />
          
          </div>
           :
          <Loader/>
        }
        </div>
            
            <Footer/>
           </>
        )
    }
}

export default Covid19
