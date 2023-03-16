
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Categary from './components/CategoryBar/Categary';
import ProductDetails from './components/pages/productDetails/productDetails';
import Cart from './components/pages/Cart/Cart';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Categary/> */}
      <Routes>
        <Route path='/' element={ <Home/> } ></Route>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={ <Cart/> } ></Route>
      </Routes>
    </div>
  );
}

export default App;


