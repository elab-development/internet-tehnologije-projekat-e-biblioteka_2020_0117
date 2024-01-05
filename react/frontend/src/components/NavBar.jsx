import React from 'react'
//import Mbooks from "../Mbooks.png"
import "../style/NavBar.css"
//import axios from 'axios'
import { Outlet } from 'react-router-dom'
//import { Link } from "react-router-dom"

const NavBar = () => {


  return (
    <div>
        
    <div class="nav">
        <ul>
            <li><a href="">Books</a></li>
            <li><a href="">Profile</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Payment</a></li>
            <li><a href="">Logout</a></li>
        </ul>
    </div>
    </div>
  )
}

export default NavBar