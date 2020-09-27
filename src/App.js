import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch,
  
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Politics from "./Pages/Politics";
import Sport from "./Pages/Sport";
import Travel from "./Pages/Travel";
import Technology from "./Pages/Technology";
import Finacial  from "./Pages/Finacial";
import FoodNews from "./Pages/FoodNews";
import SearchPage from "./Pages/SearchPage";
import "./Bootstrap.css";
import "./App.css";
import Home from "./Pages/Home";
import WorldNews from "./Pages/WorldNews";
import Error from "./Pages/Error";
import Categories from "./Pages/Categories";
import Covid19 from "./Pages/Covid19";

export class App extends Component {
  render() {
    return (
      <Router>    
      <Navbar/>    
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/worldNews" component={WorldNews}/>   
   <Route exact path="/categories" component={Categories}/>
   <Route exact path="/search" component={SearchPage} />
   <Route exact path="/Politics" component={Politics}/>
   <Route exact path="/food" component={FoodNews}/>
   <Route exact path="/technology" component={Technology}/>
   <Route exact path="/sport" component={Sport}/>
   <Route exact path="/financial" component={Finacial}/>
   <Route exact path="/travel" component={Travel}/>
   <Route exact path="/Covid19Info" component={Covid19}/>

   <Route component={Error}/>
   </Switch>
   
  </Router>
  
    )
  }
}

export default App

