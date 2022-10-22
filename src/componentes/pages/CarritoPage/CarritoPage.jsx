//import React from 'react'
//import { itemCarrito, itemProducto } from "../../body/CarritoPage/ItemCarrito.jsx";

import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"
import { ItemCarrito } from "../../body/CarritoPage/ItemCarrito"


//export default function CarritoPage() {

  export default function CarritoPage(){
    console.log("entro a carritopage")

    
    const { cartList, vaciarCarrito, valorCarrito,cantidadArticulos,eliminoArticulo} = useCartContext()
    
    
    const eliminar=()=>{
      eliminoArticulo(producto)
    }

    return (
      <div>
  
        <h1>Tu Carrito</h1>
        <i class="bi bi-cart"></i>
       
        <div className="row"></div>
        
  <div className="container">
    <div className="row shadow">
      <hr></hr>
      <div className="col-6">
          
          <div className="  border-3 bg-white   mb-5 bg-white rounded" >
            {cartList.map(producto=>ItemCarrito(producto))}
          </div>
      </div>
      <div className="col bg-light shadow">
          <h3>Total de Articulos {cantidadArticulos}</h3>
          <h3>Total Compra $ {valorCarrito}</h3>
          <button className="btn btn-outline-primary btn-block" onClick={vaciarCarrito}>Vaciar carrito</button>
          <Link to="/">
            <button className="btn btn-outline-primary btn-block">
              Seguir comprando
            </button>
          </Link>
          <Link to="/compra">
            <button className="btn btn-outline-primary btn-block">
              Comprar
            </button>
          </Link>
      </div>
    </div>
  </div>
      </div>


    )
  }


        // {cartList.map(producto=>ItemCarrito(producto))}

        // <hr></hr>
        // <h1>Cantidad total de articulos {cantidadArticulos}</h1>
        // <button className="btn btn-outline-primary btn-block" onClick={vaciarCarrito}>Vaciar carrito</button>
        // <Link to="/">
        //   <button className="btn btn-outline-primary btn-block">
        //     Seguir comprando
        //   </button>
        // </Link>
