import React, { useContext, useState, useEffect } from 'react';
import data from '../data';
import { DataContext } from './DataContext';

function Dashboard() {

    const [, , cart, , totalPrice, setTotalPrice] = useContext(DataContext)

    let sum = 0;

    // console.log(totalPrice);


    return (
        <div>
            <h4> Price Details </h4>
            <hr />
            <p> Price ({cart.length} items) :- {totalPrice} </p>
            
            <p> Discount :- 10% </p>
            <hr />

            <p> <strong> Total Amount : {totalPrice - Math.round(totalPrice*0.10)} </strong> </p>
        </div>
    )
}

export default Dashboard
