import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Box from '@mui/material/Box'
import Categary from './components/CategoryBar/Categary';

function App() {
  return (
    <div>
      {/* <Navbar/>
      <Categary/> */}
      <Routes>
        <Route path='/' element={ <Home/> } ></Route>
      </Routes>
    </div>
  );
}

export default App;
