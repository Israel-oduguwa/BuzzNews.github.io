import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FaAlignRight} from "react-icons/fa";
import {FaGlobeAmericas} from "react-icons/fa";
import {FaHome} from "react-icons/fa";
import {FaPlaneDeparture} from "react-icons/fa";
import {FaFootballBall} from "react-icons/fa";
import {FaBuilding} from "react-icons/fa";
import Search from "../Components/Search";

export class Navbar extends Component {
    constructor(){
        super()
        this.state={
            isToggle:false,
            isDrop :false,
        }
        this.handleChange=this.handleChange.bind(this);
        this.handledrop=this.handledrop.bind(this)
    }
    handleChange(){
       
       this.setState({
          isToggle: !this.state.isToggle
        })
    }
    handledrop(){
       this.setState({
          isDrop: !this.state.isDrop
        })
    }
    render() {

        return (
         <nav className="navbar">
             <div className="nav-center">
         
                 <div className="nav-header">
                 <Link to="/">
                       <h4 className="logo">Buzz News</h4>
                     </Link>
               
                      
                     <button className="nav-btn" name="isToggle" onClick={this.handleChange} type="button" className="nav-btn">
                            <FaAlignRight className="nav-icon" />
                        </button>
                   
                 </div>
                 <ul className={this.state.isToggle? "nav-links show-nav"
                     :"nav-links"}>
                 <li>
                   <Link  active-color="green" to="/">Home <FaHome  className="link-icons" /> </Link>
                 </li>
                 <li>
                   <Link   to="/Worldnews">World News <FaGlobeAmericas className="link-icons" /></Link>
                 </li>
                 
                <li>
                <Link  to="/Politics">Politics <FaBuilding  className="link-icons" />  </Link>
                   
                </li>
              
                  
                
                <li>
                <Link  to="/travel">Travel <FaPlaneDeparture  className="link-icons" /> </Link>
                   
                     
                   
                </li>
                <li>
              
                    <Link to="/sport">Sport  <FaFootballBall  className="link-icons" /> </Link>        
                     
                   
                </li>
                  <li>
                      <Link style={{color:"red",
                    fontWeight:"700"}} to="/Covid19Info">Covid 19</Link>
                  </li>
                <li>
                <Search/>
                </li>
             </ul>
            
             </div>
            
         </nav>

            

        )
    }
}

export default Navbar
