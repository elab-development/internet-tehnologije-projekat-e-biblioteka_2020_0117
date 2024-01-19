import React from 'react'
//import { Link } from "react-router-dom";
import "../style/User.css"

const User = ({ currentUser }) => {

  console.log(currentUser);
  return (
    <div>
    <form className="row g-3">
         <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="inputName" 
            
           value = {currentUser != null ? currentUser.name : "no user"} 
            readOnly />
          
        </div>
        <div className="col-6">
            <label htmlFor="inputUsername" className="form-label">Username</label>
            <input type="text" className="form-control" id="inputUsername" 
            value = {currentUser != null ? currentUser.username : "no user"} 
            readOnly />
        </div>
        <div className="col-md-12">
            <label htmlFor="inputPayment" className="form-label">Payment valid</label>
            <input type="payment" className="form-control" id="inputPayment" 
            //value = {currentUser != null ? currentUser.payment_valid : ""} 
            value = {currentUser != null ? currentUser.date_payment_valid: "no user"} 
            readOnly/>
        </div>
        
    </form>
    </div>
  )
}

export default User
