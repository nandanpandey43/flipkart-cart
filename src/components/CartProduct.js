import React, {useState} from 'react';




export default function CartProduct({id, image, title, price, description, category, brand, size,cart, setCart, setprice}){
    
    description = description.substring(0, 50) + "...";
    const [quantity, setquantity] = useState(1);

    // const [prePrice, setprice] = useState(price || 0);

    const onChangeProductQuantity = (e)=>{
      setquantity(e.target.value);
      // console.log(e.target.value);
      setprice((prePrice)=>{
        console.log(typeof(quantity), quantity);
        if(typeof(quantity) === "NaN"){
          (prePrice) = parseInt(price);
        }else{
          (prePrice) = parseInt(price)*parseInt(quantity);
        }
        console.log(prePrice);
      })
    }


    let value = []
    const removeProduct = ()=>{
        // console.log(cart);
        value = cart.filter(item => item !== id);
        // console.log(value);      
        setCart((cart)=>[...value])
    }




    return(
      

        <section className="container">
        <ul className="products">
            <li className="row">
              <div className="col left">
                <div className="thumbnail">
                  <a href="#">
                    <img src={image} alt="" />
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="#">{category}</a>
                  </div>
                  <div className="description">{title}</div>
                  <div className="price">{price}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                  <input
                    type="text"
                    type="number" 
                    min="1"
                    className="quantity"
                    step="1"
                    value={quantity}
                    placeholder="1"
                    onChange={onChangeProductQuantity}
                  />
                </div>

                <div className="remove">
                  <svg
                    onClick={removeProduct}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
      </ul>
    </section>

    )
}
