import React, { useState } from 'react';
import data from '../data';

function Dashboard({cart, prePrice}) {

    const [product, setproduct] = useState(data)
    const intersection = product.filter((ele)=>{
        return(
            cart.includes(ele.id)    
    )})
    console.log(intersection);

    let sum = 0;
    for (let i=0; i<intersection.length; i++) {
        sum += intersection[i].price;
        // console.log(typeof(intersection[i].price));
    }
    console.log(parseInt(prePrice));
    
    if(typeof(parseInt(prePrice)) === "NaN"){
        sum = sum;
    }
    else{
        sum += parseInt(prePrice);
    }

    return (
        <div>
            <h4> Price Details </h4>
            <hr />
            <p> Price ({cart.length} items) :- {sum} </p>
            
            <p> Discount :- 10% </p>
            <hr />

            <p> <strong> Total Amount : {sum - (sum*0.10)} </strong> </p>
        </div>
    )
}

export default Dashboard
