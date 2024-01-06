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



function App() {

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
      <NavBar/>

    
      <Routes>

      <Route
          path="/files"
          element={
            <div>
              <Welcome/>
            <Files files = {files}/>
            </div>
            
          }
        />

      <Route path="/payment" element={<Payment/>} />
        
      {/*<Payment/>*/} 
      
      <Route path="/user" element={<User/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/contact" element={<Contact/>} />

      

      </Routes>
      

      <Online/>
      <Footer/>
      

      </BrowserRouter>
  );
}

export default App;
