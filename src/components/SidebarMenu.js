import React, { useState, useEffect } from 'react'

function SidebarMenu({ product , setproduct }) {

    const [newProducts, setnewProducts] = useState(() => product)
    const [selectedValue, setSelectedValue] = useState(null);


    const changeHandler = (e) => {
        console.log(e.target.value);
        setSelectedValue(e.target.value);
    }

    

    useEffect(() => {

        const applySorting = (value)=>{
            if(value === "lowtohigh"){
                const sorted = [...product].sort((a, b) => {
                    return a.price - b.price;
                  });
                  console.log(sorted);
                  setnewProducts(sorted)
            }
            else if(value === "hightolow"){
                const sorted = [...product].sort((a, b) => {
                    return b.price - a.price;
                  });
                  console.log(sorted);
                  setnewProducts(sorted)
            }
           
        }

        if(selectedValue){
            applySorting(selectedValue);
        }
      
        
    }, [selectedValue,setproduct])

    useEffect(() => {
        if (selectedValue) {
            setproduct(newProducts);
        }
      }, [newProducts, selectedValue]);
    


    return (
        <div className="sidebar-menu">
        <h3>Products</h3>
        <strong>Sort by</strong>
            <select onChange={changeHandler} >
                <option value="null"  >Select...</option>
                <option value="lowtohigh">Low to High</option>
                <option value="hightolow">High to Low</option>
            </select>

        </div>
    )
}

export default SidebarMenu
