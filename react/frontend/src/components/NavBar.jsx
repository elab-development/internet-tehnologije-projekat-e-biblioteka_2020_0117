import React from 'react'
import "../style/NavBar.css"
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom"


const NavBar = (token, removeToken, currentUser) => {

  function handleLogout(){

    var config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/api/logout',
        headers: { 
        
        Authorization: "Bearer "+ window.sessionStorage.getItem("auth_token"),
        
        },
      };
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            window.sessionStorage.setItem("auth_token",null);
            removeToken();
            console.log('logout successful');
        })
        .catch(function (error) {
            console.log(error);
        });

    }
        
    


  return (
    <div>
        
    <div className="nav">
        <ul>
            <li><Link to='/files' className="nav-link">Home</Link></li>
            <li><Link to='/user' className="nav-link">Profile</Link></li>
            <li>  <Link to='/contact' className="nav-link">Contact</Link></li>
            <li><Link to='/payment' className="nav-link">Payment</Link></li>
            <li><Link to='/' className="nav-link" onClick={handleLogout}>Logout</Link></li>
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