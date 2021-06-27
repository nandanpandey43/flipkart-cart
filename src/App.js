import './App.css';
import React, { useState, useEffect } from 'react'
import Topbar from './components/Topbar';
import SidebarMenu from './components/SidebarMenu';
import Contents from './components/Contents';
import Cart from './components/Cart';
import data from './data';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  
  const [product, setproduct] = useState(data)
  const [cart, setCart] = useState([]);
  
  // console.log(cart);

  return (
    <div className="App">

      {/* Topbar */}
      
      <BrowserRouter>
      <Topbar cart={cart} />
  
      <Switch>

      <Route path="/" exact >
        {/* left sidebar features */}
       <SidebarMenu product={product} setproduct={setproduct} />

       {/* right sidebar features */}
      <Contents product={product} setCart={setCart} cart={cart} />
      </Route>

      <Route path="/cart" >
        <Cart cart={cart} setCart={setCart} />

      </Route> 

      </Switch>
      </BrowserRouter>

      
    </div>
  );
}




export default App;
