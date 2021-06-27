import React from 'react'

function CardView({id, image, title, price, description, category, brand, size,  cart, setCart}) {

    description = description.substring(0, 100) + "...";
	

	let uniquePro = [];
	const clickHandler = ()=> {
		// console.log(cart);
		// uniquePro = [...new Set(cart)];
		// console.log(uniquePro);
		setCart(cart => {
			if(cart.includes(id)){
				return [...cart]
			}
			cart = [...new Set(cart)];
			return [...cart, id]});
	}



    return (

        <div class="product-card">
		<div class="badge"> {brand} </div>
		<div class="product-tumb">
			<img src={image} alt="" />
		</div>
		<div class="product-details">
			<span class="product-catagory">{category}</span>
			<h4> {title} </h4>
			<p> {description} </p>
			<div class="product-bottom-details">
				<div class="product-price">
                    {/* <small> {size} </small> */}
                    $ {price}
                    </div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<button onClick={clickHandler}><i class="fa fa-shopping-cart">Cart</i></button>
				</div>
			</div>
		</div>
	</div>
    )
}

export default CardView;
