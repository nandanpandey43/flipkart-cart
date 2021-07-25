import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { DataContext } from './DataContext';

function CardView({product, id, image, title, price, description, category, brand, size }) {

    description = description.substring(0, 100) + "...";

	const [products, setproduct, , setcart] = useContext(DataContext)

	const history = useHistory();

	const cartHandler = ()=> {	
		setproduct(
			products.map((item) => {
			if (item.id === id) {
			  return { ...item, inCart: !item.inCart };
			} else {
			  return item;
			}
		  }));
		// setcart([...cart, product]);

		setcart((val)=>{
			product.quantity = 1;
			return [...val, product]
		})

	}

	const gotoCart = () => {
		history.push("/cart");
	}


    return (

        <div className="product-card">
		<div className="badge"> {brand} </div>
		<div className="product-tumb">
			<img src={image} alt="" />
		</div>
		<div className="product-details">
			<span className="product-catagory">{category}</span>
			<h4> {title} </h4>
			<p> {description} </p>
			<div className="product-bottom-details">
				<div className="product-price">
                    {/* <small> {size} </small> */}
                    $ {Number(price)}
                    </div>
				<div className="product-links">
					<a href=""><i className="fa fa-heart"></i></a>
					{product.inCart === true ? <button onClick={gotoCart}>
						<i className="fa fa-shopping-cart gotocart">go to cart</i>
					</button> : <button onClick={cartHandler}>
						<i className="fa fa-shopping-cart">Add to Cart</i>
					</button> }
					
				</div>
			</div>
		</div>
	</div>
    )
}

export default CardView;
