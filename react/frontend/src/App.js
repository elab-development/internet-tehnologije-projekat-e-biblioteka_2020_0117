import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Files from './components/Files';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';


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
    <div className="App">
      <NavBar/>
      {/*<Files files = {files}/>*/} 
      <Payment/>

    </div>
  );
}

export default App;
