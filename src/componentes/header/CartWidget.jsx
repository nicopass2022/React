
import { useCartContext } from "../../context/CartContext"



export const CartWidget =()=>{
	
	
	const{cartList, cantidadTotal}=useCartContext()
	
	
	return(
		<>
			{cantidadTotal>=1  ?
				<button type="button" className="btn btn-link"><span className="bi bi-cart">{cantidadTotal}</span></button>
			:

				<button type="button" className="btn btn-link"><span className="bi bi-cart"></span></button>
			}

		</>
	)
}
	

