import React from 'react';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';



function Topbar({cart}) {

    const submitHandler = (e)=>{
        e.preventDefault();
    }


    return (
        <div className="topbar">
            <Link to="/" style={{ textDecoration: 'none' }}><h1>Flipkart</h1> </Link>
            <form onSubmit={submitHandler}>
                <input type="text" 
                    placeholder="Search here..."
                />
            </form>
            <button className="login">Login</button>
            <h2 className="more">More</h2>
            <Link to="/cart">
            {/* <ShoppingCartIcon /> */}
            <h2 className="cart">Cart</h2> 
            ({cart.length})
            </Link>
            

        </div>
    )
}

export default Topbar
