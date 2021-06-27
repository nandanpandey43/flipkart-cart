import React, { useState } from 'react'
import data from '../data.json';
import CardView from './CardView';


function Contents({ product, setCart, cart }) {

    


    return ( 
        
        <div className="contents">

    
        <div className="image-grid">
   

        {product.map((product)=>{
                return (
                    <CardView
                    image={product.image} 
                    description={product.description}
                    key={product.id}
                    id={product.id}
                    price={product.price}
                    brand={product.brand}
                    size={product.size}
                    title={product.title}
                    category={product.category}
                    setCart={setCart}
                    cart={cart}
                 />
                )
            })
            }



        </div>


            
            


        </div>
        
    )
}

export default Contents
