import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/products/:company/:category/:productId" element={<ProductDetails/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
