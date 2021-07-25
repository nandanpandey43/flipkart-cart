import React, { useState, useContext } from 'react'
import data from '../data.json';
import CardView from './CardView';
import { DataContext } from './DataContext';


function Contents() {

    const [products] = useContext(DataContext);

    return ( 
        
        <div className="contents">

    
        <div className="image-grid">
   

        {products.map((product)=>{
                return (
                    <CardView
                    product={product}
                    image={product.image} 
                    description={product.description}
                    key={product.id}
                    id={product.id}
                    price={product.price}
                    brand={product.brand}
                    size={product.size}
                    title={product.title}
                    category={product.category}
                 />
                )
            })
            }



        </div>

        </div>
        
    )
}

export default Contents
