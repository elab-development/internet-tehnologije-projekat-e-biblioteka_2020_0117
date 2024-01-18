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



//svi korisnici, tokeni i trenutno ulogovan korisnik
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
              setUsers(res.data);
          });
      }
  },[users]);

  
  
  
  const [currentUser, setCurrentUser] = useState();

  function addUser(u){ 
    console.log('123123');
    console.log("users: " + users);
      if(users != null){
          // users.find((user) =>{
          //     if(user.email == u.email){
          //         setCurrentUser(user);
          //         console.log(user);
                  
          //         setCurrentUser(user);
          //         console.log("User: " + currentUser);
          //         loadFavourites();
          //     };
          // });
          const foundUser = users.find(user => user.email == u.email);
          console.log('asdasd');
          if (foundUser) {
            setCurrentUser(foundUser);
            console.log("User:", foundUser);
            loadFavourites();
          }
      };
  }

//menjanje podataka o useru

  // function updateUser(newUser){
  //   setCurrentUser(newUser);
  //   if(currentUser != null){
  //       let newUser = currentUser;
  //       if(currentUser == null){
  //           newUser= newUser.id;
  //       }
  //       newUser.email = newUser.email;
  //       newUser.name = newUser.name;
  //       newUser = newUser.id;
  //       setCurrentUser(newUser);
        
  //       }
  //     }

  // const files = [
  //   {
      
  //     bookName: "Book 1",
  //     authorName: "Author 1",
  //     genreName: "Genre 1",
      
  //   },
  //   {
      
  //     bookName: "Book 2",
  //     authorName: "Author 2",
  //     genreName: "Genre 2",
      
  //   },
  //   {
      
  //     bookName: "Book 3",
  //     authorName: "Author 3",
  //     genreName: "Genre 3",
      
  //   }
  // ];

  //odavde krece dobijanje svih fajlova (knjiga)
  const [files, setFiles] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/allFiles");
        
        console.log("Full response object:", response);
  
        setFiles({
          data: response.data,
          loading: false
        });
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    
    fetchData();
  }, []);
 

  //odavde krecu omiljene knjige
  // const [favouriteBooks, setFavouriteBooks] = useState([]);

  // function loadFavourites() {

  //   var data = currentUser;
  //   var id = currentUser.id;

  //   var config = {
  //       method: 'get',
  //       url: 'http://127.0.0.1:8000/api/favbooks/' + id,
  //       headers: { 
        
  //       Authorization: "Bearer "+ window.sessionStorage.getItem("auth_token"),
  //       },
        
  //       data : data,
  //   };
  //   //ovo iznad vraca niz idjeva knjiga koje su omiljene za korisnika
  //   axios(config)
  //   .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //       //setFavouriteBooks(response.data.fav_books);

        

  //   })
  //   .catch(function (error) {
  //       console.log(error);
  //   });

  //   };

  const [favouriteBooks, setFavouriteBooks] = useState([]);

function loadFavourites() {
  var data = currentUser;
  var id = currentUser.id;
  console.log("User id: " + id);
  var config = {
    method: 'get',
    url: 'http://127.0.0.1:8000/api/getFavBooks/' + id,
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log("Response data:", response); //ovde su 1 i 2 za sad
      //response = [1,2];
      console.log("asdasd");
      
      // Unutar ovog bloka možete proći kroz niz files.data i filtrirati samo omiljene knjige
      const filteredFiles = files.data.filter(file => {
        // Proverava da li trenutni file.id postoji u nizu favouriteBooks
        return response.data.includes(file.file_id);
      });

      // Ovde možete postaviti filteredFiles u state ili raditi sa njima kako želite
      console.log("Filtered files: " + filteredFiles);

      // Primer postavljanja u state, ali možete prilagoditi kako želite
      setFavouriteBooks(filteredFiles);
    })
    .catch(function (error) {
      console.log(error);
    });
}

   


  return (
    <BrowserRouter>
      
      <Routes>

      <Route
          path="/files"
          element={
            <div>
              <NavBar token={token} removeToken={removeToken} currentUser={currentUser}/>
              <Welcome/>
            <Files files = {files.data}/>
            </div>
            
          }
        />
      <Route path="/payment" element={
      <div>
      <NavBar token={token} removeToken={removeToken} currentUser={currentUser}/>
      <Payment/>
      </div>
      } />
      
      
      <Route path="/user" element={
      <div>
      <NavBar token={token} removeToken={removeToken} currentUser={currentUser}/>
      <User user = {currentUser}/>
      <Files files = {favouriteBooks}/>
      </div>
      
      } />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Login addToken={addToken} addUser={addUser} currentUser={currentUser}/>} />
      <Route path="/contact" element={
      <div>
      <NavBar token={token} removeToken={removeToken} currentUser={currentUser}/>
      <Contact/>
      </div>
    } />
      </Routes>
      
      <Online/>
      <Footer/>

      </BrowserRouter>
  );

{
  /*
  return (
    <BrowserRouter>
      
      <Routes>

      <Route
          path="/files"
          element={
            <div>
              <NavBar token={token} removeToken={removeToken} currentUser={currentUser}/>
              <Welcome/>
            <Files files = {files.data}/>
            </div>
            
          }
        />
      <Route path="/payment" element={
      <div>
      <NavBar token={token} removeToken={removeToken} currentUser={currentUser}/>
      <Payment/>
      </div>
      } />
        
      
      
      <Route path="/user" element={
        <div>
        <NavBar token={token} removeToken={removeToken} currentUser={currentUser}/>
        <User user = {currentUser}/>
        <Files files = {favouriteBooks}/>
        </div>
        
        } />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Login addToken={addToken} addUser={addUser} currentUser={currentUser}/>} />
        <Route path="/contact" element={
        <div>
        <NavBar token={token} removeToken={removeToken} currentUser={currentUser}/>
        <Contact/>
        </div>
      } />
        </Routes>
        
        <Online/>
        <Footer/>
  
        </BrowserRouter>
    );
  
  
  */ 
}
 

}

export default App;
