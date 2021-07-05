import React, {useState, useEffect} from 'react';
import '../index.css';



export default function CartProduct({id, image, title, price, description, category, brand, size,cart, setCart, setprice, prePrice }){
    
    description = description.substring(0, 50) + "...";

    let [count, setCount] = useState(1);
    
    // let [totalPrice, setTotalprice] = useState([]);
    // console.log(prePrice);


    let value = []
    const removeProduct = ()=>{
        value = cart.filter(item => item !== id);
        setCart((cart)=>[...value])
    }

    let newPrice = (para)=>{
      if(para === 1){
        return price;
      }else{
        return price*count;
      }
    } 
    useEffect(() => {
      setprice((prePrice)=>[...prePrice, newPrice]);
    }, [])
    

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
                  <div className="price"> ₹ {newPrice(count)}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                  

                  <div class="plusminus horiz">
                    <button onClick={()=>{
                      if(count>1){
                        setCount(--count);
                      }
                      
                    }} > - </button>
                    <input type="number" name="productQty" value={count} min="1" max="10" />
                    <button onClick={()=>{
                        setCount(++count);
                    }} > + </button> 



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



                </div>

                
              </div>
            </li>
      </ul>
    </section>

    )
}
