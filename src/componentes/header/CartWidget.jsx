//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { useEffect } from "react";
import { useCartContext } from "../../context/CartContext"

//import { useState } from "react"

export const CartWidget =(cantidadArticulos)=>{
	console.log("entre al cartwidget")
	
	const{cartList}=useCartContext()

	
	//cantidad=0
	return(
		<>
			
			<button type="button" className="btn btn-link"><span className="bi bi-cart">{cantidadArticulos}</span></button>

		</>
	)
}
	

