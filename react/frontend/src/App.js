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
      <Route path="/" element={<Login/>} />
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
