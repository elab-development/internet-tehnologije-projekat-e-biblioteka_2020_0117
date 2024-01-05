import React from 'react'
//import Mbooks from "../Mbooks.png"
import "../style/NavBar.css"
//import axios from 'axios'
import { Outlet } from 'react-router-dom'
//import { Link } from "react-router-dom"

const NavBar = () => {


  return (
    <div>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <a rel="stylesheet" href="NavBar.css"></a>
            <div className="container-fluid">
            {/* <img src={Mbooks} style={{height:70+"px", width:70+"px" }} /> */}
                
                <div className="collapse navbar-collapse show" id="navbarDark">
                <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                    <li className="nav-item">
                        <a to='/books'className="nav-a active" aria-current="page" >Books</a>
                    </li>
                
                    <li className="nav-item">
                        <a to='/cart' className="nav-a">Cart {}</a>
                    </li> 
                    
                    <li className="nav-item">
                        <a to='/contact' className="nav-a">Contact</a>
                    </li>       
                </ul>
                <ul className="navbar-nav me-auto mb-10 mb-xl-0" id='responsive' >
                
                </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
    </div>
  )
}

export default NavBar