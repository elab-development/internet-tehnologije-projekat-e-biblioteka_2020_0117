import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Files from './components/Files';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Files/> */}
      <Register/>
    </div>
  );
}

export default App;
