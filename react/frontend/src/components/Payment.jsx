import React from 'react'
//import { Link } from "react-router-dom";
import "../style/Payment.css"

const Payment = () => {


  return (
    <div>
     <div className="row">
  <div className="col-75">
    <div className="container">
      <form action="/action_page.php">

        <div className="row">
        

          <div className="col-50">
            <h3>Payment</h3>
           
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
              <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
              <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
              <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>

            <div className="row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>

        </div>
      
        <input type="submit" value="Pay" className="btn"/>
      </form>
    </div>
  </div>

  
  
</div>
    </div>
  )
}

export default Payment
