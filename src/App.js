import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/products:id" exact element={<Product />} />

      </Routes>
    </>
  );
}

export default App;