import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductsList';
import {useState, React} from 'react';
import CartList from './components/CartList/CartList';



function App() {

  const [ productsInCart, setProductsInCart ] = useState([])
  const [cartValue, setCartValue] = useState(0)

  return (
    <div className="App">

      <ProductsList cartValue={cartValue} setCartValue={setCartValue} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
      <CartList cartValue={cartValue} setCartValue={setCartValue} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>

    </div>
  );
}

export default App;
