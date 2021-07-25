import React, {useState, useEffect} from 'react';
import Data from '../data.json';
export const DataContext = React.createContext();




export function DataProvider({children}) {

    const [products, setproduct] = useState(Data)

    const [cart, setcart] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const datalist = Data.map((data) => {
          return { ...data, inCart: false };
        });
        setproduct(datalist);
      }, []);



    return (
       <DataContext.Provider value={[products, setproduct, cart, setcart, totalPrice, setTotalPrice]}>
           {children}
       </DataContext.Provider>
    )
}


