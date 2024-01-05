import React from 'react'
//import Mbooks from "../Mbooks.png"
import "../style/NavBar.css"
//import axios from 'axios'
import { Outlet } from 'react-router-dom'
//import { Link } from "react-router-dom"

const NavBar = () => {


  return (
    <div>
        
    <div className="nav">
        <ul>
            <li><a href="">Books</a></li>
            <li><a href="">Profile</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Payment</a></li>
            <li><a href="">Logout</a></li>
            <li className="nav-item search-icon">
               <button className="search-button"><i className="fas fa-search">Search</i></button>
            </li>
            <li className="nav-item search-icon">
          <input
            type="text"
            placeholder="Unesite tekst"
            className="search-input"
          />
        </li>
        </ul>
    </div>
    </div>
  )
}

export default NavBar