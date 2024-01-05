import React from 'react'
//import { Link } from "react-router-dom";
import "../style/User.css"

const User = () => {


  return (
    <div>
    <form className="row g-3">
         <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="inputName" 
            //value = {currentUserData != null ? currentUserData.name : ""} 
            readOnly />
        </div>
        <div className="col-6">
            <label htmlFor="inputUsername" className="form-label">Username</label>
            <input type="text" className="form-control" id="inputUsername" 
            //value = {currentUserData != null ? currentUserData.adress : ""} 
            readOnly />
        </div>
        <div className="col-md-12">
            <label htmlFor="inputPayment" className="form-label">Payment valid</label>
            <input type="payment" className="form-control" id="inputPayment" 
            //value = {currentUser != null ? currentUser.email : ""} 
            readOnly/>
        </div>
        
    </form>
    </div>
  )
}

export default User
