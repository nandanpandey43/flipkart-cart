import React, { useState } from 'react';
import data from '../data';
import CartProduct from './CartProduct'
import Dashboard from './Dashboard';

function Cart({cart, setCart}) {

    const [product, setproduct] = useState(data);
    const [prePrice, setprice] = useState([]);


    // console.log(typeof(prePrice));
    const intersection = product.filter((ele)=>{
        return(
            cart.includes(ele.id)    
        )})

   

    

    return (
        <div  >

            {/* <h3>My Cart ({cart.length}) </h3> */}
            <section className="container">
            <ul className="products">
            {intersection.map((prod)=>{
                return(
                    <CartProduct
                    image={prod.image} 
                    description={prod.description}
                    key={prod.id}
                    id={prod.id}
                    price={prod.price}
                    brand={prod.brand}
                    size={prod.size}
                    title={prod.title}
                    category={prod.category}
                    setCart={setCart}
                    cart={cart}
                    prePrice={prePrice}
                    setprice={setprice}
                    />
                )
            })}
            </ul>
            </section>
             
            <div className="dashboard" >
                <Dashboard cart={cart} prePrice={prePrice} />
            </div>
           
            
        </div>
    )
}






export default Cart
