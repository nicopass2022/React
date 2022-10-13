//import { useEffect } from "react";
import { useContext, useState, createContext } from "react";


const CartContext = createContext([])
export const useCartContext=()=>useContext(CartContext)

//creo el provider
const CartContextProvider=({children})=>{
    const [cartList,setCartList]=useState ([])
    
    const addItem=(producto)=>{
        setCartList([...cartList,producto])
    }
    const vaciarCarrito=()=>{
        setCartList([])
    }
    
    return(
    <CartContext.Provider value= {{
        cartList,
        addItem,
        vaciarCarrito
    }}>
        {children}
    </CartContext.Provider>
    )
}
export default CartContextProvider
