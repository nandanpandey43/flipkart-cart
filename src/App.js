import './App.css';
import React, { useContext } from 'react'
import Topbar from './components/Topbar';
import SidebarMenu from './components/SidebarMenu';
import Contents from './components/Contents';
import Cart from './components/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DataContext } from './components/DataContext';


function App() {


  const [products, setproduct] = useContext(DataContext);
  const [, , cart, ] = useContext(DataContext);


  return (
    <div className="App">

      {/* Topbar */}
      <BrowserRouter>
      <Topbar cart={cart} />
  
      <Switch>

      <Route path="/" exact >
        {/* left sidebar features */}
       <SidebarMenu product={products} setproduct={setproduct} />

       {/* right sidebar features */}
      <Contents  />
      </Route>

      <Route path="/cart" >
        <Cart />

      </Route> 

      </Switch>
      </BrowserRouter>

      
    </div>
  );
}




export default App;
