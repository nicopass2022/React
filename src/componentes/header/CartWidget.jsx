
import { useCartContext } from "../../context/CartContext"



export const CartWidget =()=>{
	
	
	const{cartList, cantTotal}=useCartContext()
	
	
	return(
		<>
			{cantTotal>=1  ?
				<button type="button" className="btn btn-primary"><span className="bi bi-cart-fill badge badge-pill badge-warning">{cantTotal}</span></button>
			:

				<button type="button" className="btn btn-primary"><span className="bi bi-cart"></span></button>
			}

		</>
	)
}
	

