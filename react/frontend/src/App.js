import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Files from './components/Files';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './components/User'
import Contact from './components/Contact';
import Online from './components/Online';
import Welcome from './components/Welcome';
import { useState, useEffect } from 'react';
import axios from "axios";



function App() {

  const [token,setToken]=useState();

  function addToken(auth_token){
      setToken(auth_token);
  }

  function removeToken(){
      setToken(null);
      setCurrentUser(null);
      
  }

  const [users, setUsers]=useState();
  useEffect(()=>{
      if(users==null){
          axios.get("http://127.0.0.1:8000/api/users").then((res)=>{
              console.log(res.data);
              setUsers(res.data.users);
          });
      }
  },[users]);

  // const [userData, setUserData] = useState();
  // useEffect(()=>{
  //     if(userData==null){
  //         axios.get("http://127.0.0.1:8000/api/data").then((res)=>{
  //             console.log(res.data);
  //             setUserData(res.data.userData);
  //         });
  //     }
  // },[userData]);

  //logged user data
  //const [currentUserData, setCurrentUserData] = useState();

  
  //logged user
  const [currentUser, setCurrentUser] = useState();

  function addUser(u){ 
      if(users != null){
          users.map((user) =>{
              if(user.email == u.email){
                  setCurrentUser(user);
                  console.log(user);
                  
                  setCurrentUser(user);
                  //loadFavourites();
              };
          });
      };
  }

  const files = [
    {
      
      bookName: "Book 1",
      authorName: "Author 1",
      genreName: "Genre 1",
      
    },
    {
      
      bookName: "Book 2",
      authorName: "Author 2",
      genreName: "Genre 2",
      
    },
    {
      
      bookName: "Book 3",
      authorName: "Author 3",
      genreName: "Genre 3",
      
    }
  ];

  return (
    <BrowserRouter>
      
      <Routes>

      <Route
          path="/files"
          element={
            <div>
              <NavBar/>
              <Welcome/>
            <Files files = {files}/>
            </div>
            
          }
        />
      <Route path="/payment" element={
      <div>
      <NavBar/>
      <Payment/>
      </div>
      } />
        
      {/*<Payment/>*/} 
      
      <Route path="/user" element={
      <div>
      <NavBar/>
      <User/>
      <Files files = {files}/>
      </div>
      
      } />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Login addToken={addToken} addUser={addUser}/>} />
      <Route path="/contact" element={
      <div>
      <NavBar/>
      <Contact/>
      </div>
    } />
      </Routes>
      
      <Online/>
      <Footer/>

      </BrowserRouter>
  );
}

export default App;
