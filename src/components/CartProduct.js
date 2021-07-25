import React, {useState, useEffect, useContext} from 'react';
import '../index.css';
import { DataContext } from './DataContext';



export default function CartProduct({prod, id, image, title, price, description, category, brand, size }){
    
    description = description.substring(0, 50) + "...";

    let [count, setCount] = useState(1);
    const [itemPrice, setitemPrice] = useState(price)
    const [products, setproduct, cart, setcart, , setTotalPrice] = useContext(DataContext)

    const removeProduct = ()=>{
        setproduct(
          products.map((product) => {
            if (product.id === id) {
              return { ...product, inCart: !product.inCart };
            } else {
              return product;
            }
          })
        );
        setcart((ele)=>{
            let value = [];
            value = ele.filter((item)=>{
              return item.id !== id
            })
            return value;
        })
    } 


    useEffect(() => {
      setitemPrice(count*price);
      prod.quantity = count;

      setTotalPrice((val)=>{
        if(cart.length>=1){
          const pri = cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );
          return Math.round(pri*100)/100;
        }else{
          return 0;
        }
        
      })
    }, [count, cart])


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
                  <div className="price"> ₹ {Math.round(itemPrice*100)/100}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                  

                  <div className="plusminus horiz">
                    <button onClick={()=>{
                      
                      if(count>1){
                        setCount((val)=>{
                          if(val>=2){
                            return val-1;
                          }
                          else{
                            return ;
                          }
                        });
                      }
                      // prod.quantity++
                    }
            
                    } > - </button>
                    {/* <input type="number" name="productQty" value={count} min="1" max="10"  /> */}
                    <p style={{padding:"10px"}} > {count} </p>
                    <button onClick={()=>{
                        setCount((val)=>{
                          return val+1;
                        });

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
