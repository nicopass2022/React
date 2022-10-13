//import React from 'react'

import { useCartContext } from "../../../context/CartContext"
//import { itemProducto } from "../../body/ItemListContainer/item"

//export default function CarritoPage() {

  export default function CarritoPage(){

    const { cartList, vaciarCarrito } = useCartContext()
    console.log(cartList)
    return (
      <div>
  
        <h1>Carrito</h1>
        <ul>
          {cartList.map(producto => <li> nombre: {producto.name} categoría:{producto.categoria} precio: {producto.price} Cant: {producto.cantidad} </li> )}
        </ul>
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
      </div>
    )
  }
  
  
//   const{cartList, vaciarCarrito}=useCartContext()
//   return (
//     <div>
//       <h1>CarritoPage</h1>
//     <ul>
//       (cartList.map(producto=<li>nombre:{producto.name}</li>))
//     </ul>
//     <button onClick={vaciarCarrito}>Vaciar Carrito</button>
//     </div>
//   )
// }
