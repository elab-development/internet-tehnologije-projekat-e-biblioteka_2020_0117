import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "../style/Login.css"
import { useNavigate } from 'react-router-dom'



const Login = ({addToken, addUser, currentUser}) => {

     let navigate=useNavigate();

     const[user, setUser] =useState({
         email:"",
         password:"",
     });

     function handleInput(e){
         let newUser=user;
         newUser[e.target.name]=e.target.value;
        setUser(newUser);
    }

      function handleLogin(e){
          e.preventDefault();
       
          axios.post("http://127.0.0.1:8000/api/login",user).
          then((res)=>
          {
              console.log(res.data);
              if(res.data.success===true) {
                 window.sessionStorage.setItem("auth_token",res.data.access_token);
                  console.log(res.data);
                  
                  addToken(res.data.access_token);
                  addUser(user);
                  console.log("User email: "+user.email);
                  //ovo se sve ispisuje
                  navigate("/files");
              }

          }).
          catch((e)=>{console.log(e);});
      }

    // const handleLogin = async () => {
    //     try {
    //       // Ovo može biti promenljiva na primer kao 'response'
    //       const serverResponse = await axios.post("http://127.0.0.1:8000/api/login", user);
    //       console.log("Server response:", serverResponse.data);
    //       const { success, access_token, user: responseUser } = serverResponse.data;
    
    //       if (success) {
    //         window.sessionStorage.setItem("auth_token", access_token);
    //         addToken(access_token);
    //         // Postavljanje korisnika nakon uspešnog logovanja
    //         addUser(responseUser);
    //         // Preusmeravanje na odgovarajuću stranicu
    //         navigate("/files");
    //       } else {
    //         // Obrada situacije kada logovanje nije uspelo
    //       }
    //     } catch (error) {
    //       console.error("Error during login:", error);
    //       // Obrada greške prilikom logovanja
    //     }
    //   };

return (
  
    <section className="vh-100 gradient-custom">
    
    <div className="container py-5 h-100" >
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{borderRadius: 1+"rem"}}>
            <div className="card-body p-5 text-center">

                <form 
                  onSubmit={handleLogin}
                >
                    <div className="mb-md-5 mt-md-4 pb-5">

                        
                        <p className="text-white-50 mb-5">Please enter your email and password</p>


                        <div className="form-outline form-white mb-4">
                            <label className="form-label" htmlFor="typeEmailX" >Email</label>
                            <input type="text" id="typeEmailX" className="form-control form-control-lg" name="email" 
                             onInput={handleInput} 
                            /> 
                        </div>

                        <div className="form-outline form-white mb-4">
                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                            <input type="password" id="typePasswordX" className="form-control form-control-lg" name="password" 
                             onInput={handleInput} 
                            />
                        </div>

                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>   

                    </div>

                    <div>
                        <p className="mb-0">Don't have an account?  <a href="/register" className="text-white-50 fw-bold">Sign Up</a></p>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>


  )
}

export default Login