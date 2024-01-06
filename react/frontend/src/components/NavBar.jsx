import React from 'react'
import "../style/NavBar.css"
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom"

const NavBar = () => {


  return (
    <div>
        
    <div className="nav">
        <ul>
            <li><Link to='/files' className="nav-link">Home</Link></li>
            <li><Link to='/user' className="nav-link">Profile</Link></li>
            <li>  <Link to='/contact' className="nav-link">Contact</Link></li>
            <li><Link to='/payment' className="nav-link">Payment</Link></li>
            <li><Link to='/logout' className="nav-link">Logout</Link></li>
            <li className="nav-item search-icon">
               <button className="search-button"><i className="fas fa-search">Search</i></button>
            </li>
            <li className="nav-item search-icon">
          <input
            type="text"
            placeholder="Insert text for searching..."
            className="search-input"
          />
        </li>
        </ul>
    </div>
    </div>
  )
}

export default NavBar