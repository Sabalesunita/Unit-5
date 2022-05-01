import './App.css'
import { Product } from './components/Product'
import {Routes, Route} from "react-router-dom"
import { Users } from './components/User';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { ProductDetails } from './components/ProductDetails';
import {Error} from "./components/Error";
import {Cart} from "./components/Cart"
function App() {


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="*" element={<Error />} />
        <Route  path = "/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App
