import { ItemCount } from "../ItemListContainer/ItemCount"
import { useCartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"
import {useState} from "react"

export const ItemDetail =(producto)=>{
    
    
     
    const { addItem  } = useCartContext()
        const onAdd=(cantidad)=>{
           // console.log("onAdd",cantidad)
            
            addItem( { ...producto, cantidad } )
            
        }
    
       
        return(
            <>
                <div className="row">
                    <h1>IDC</h1>
                    <div className="col-6">
                
                        <h3>id: {producto.id}</h3>
                        <h3>Nombre: {producto.name}</h3>
                        <h3>precio: {producto.price}</h3>
                        <h3>categoria: {producto.categoria}</h3>
                        <h3>stock: {producto.stock}</h3>
                        <img src={producto.foto} alt="foto producto" className="w-50"/>
                    </div>

                    <div className="col-6">
                        
                   
                            <ItemCount onAdd={onAdd} stock={producto.stock} init={1}/>
                     
                    
                    </div>
                </div>    
            </>
        )
    }
//     { /*  isCount ?*/
                            
                                
                            
//      :

//      <div>
//          <Link to="/cart">
//              <button className="btn btn-outline-primary btn-block" >
//                  Ver Carrito
//              </button>
//          </Link>
//          <Link to="/">
//              <button className="btn btn-outline-primary btn-block" >
//                  Seguir comprando
//              </button>
//          </Link>
//      </div> 

// }