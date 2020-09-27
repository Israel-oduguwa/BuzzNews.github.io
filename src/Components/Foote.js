import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FaFacebookSquare}  from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import  {FaTwitterSquare} from "react-icons/fa";
 


export class Foote extends Component {
    render() {
        return (
          <footer>
              <div className="container footer-contents">
                  <div className="row">
                      <div className="col-md-12">
                       <h2 className="explore">Explore Buzz News</h2>
                      </div>
                            <br/>
                      <div className="col-md-3 explore-links">
                        <ul className="expl-links">
                            <li>
                            <Link  to="/Politics">Politics</Link>  
                            </li>
                            <li>
                            <Link to="/technology">Technology</Link>
                            </li>
                            <li>
                            <Link  to="/food">Food</Link>
                            </li>
                           
                            <li>
                            <Link  to="/travel">Travel</Link>
                            </li>
                            <li>
                            <Link to="/sport">Sport</Link>
                            </li>
                        </ul>
                       
                     
                    
                   


                      </div>
                      <div className="col-md-5">
                          <div className="About-wrapper">
                              <p className="about-title">About Us</p>
                              <p className="about-news"> Buzz News is your new   website. We provide you with the latest breaking news straight from the news industry.</p>
                        
                          </div>
                          <div className="Social-media-wrapper">
                              <ul className="social-links text-center">
                                  <li><a href="https://web.facebook.com/israel.oduguwa.1" target="blank" >
                                     <FaFacebookSquare className="facebook"/> </a></li>
                                  <li><a href="https://github.com/Israel-oduguwa?tab=repositories" target="blank">
                                    <FaGithubSquare className="github"/>  </a></li>
                                  <li><a href="https://twitter.com/IOduguwa" target="blank">
                                      <FaTwitterSquare className="twitter"/> </a></li>
                                  
                              </ul>
                          </div> 
                      </div>
                     
                      </div>
                      
                   
                       
                   
              </div>
          </footer>
        )
    }
}

export default Foote

//Menu travel,Financial,....,Entertainmaent ,sport,Business
//About us
//Reach me Facbook ,twiter, instagram, pintrest
//copy right news