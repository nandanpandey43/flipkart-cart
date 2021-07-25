import React, { useContext } from 'react';
import CartProduct from './CartProduct'
import Dashboard from './Dashboard';
import { DataContext } from './DataContext';

function Cart() {

    const [, , cart ] = useContext(DataContext)


    return (
        <div  >

            {/* <h3>My Cart ({cart.length}) </h3> */}
            <section className="container">
            <ul className="products">
            {cart.map((prod)=>{
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
                    prod={prod}
                    />
                )
            })}
            </ul>
            </section>
             
            <div className="dashboard" >
                <Dashboard />
            </div>          
        </div>
    )
}

export default Cart
