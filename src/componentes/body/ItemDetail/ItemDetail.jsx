import { ItemCount } from "../ItemListContainer/ItemCount"
import { useCartContext } from "../../../context/CartContext"
//import { Link } from "react-router-dom"
//import {useState} from "react";
//import { CartWidget } from "../../header/CartWidget";

export const ItemDetail =({producto})=>{
    //console.log("renderizo ID")
    
    const { isInCart } = useCartContext()
    

        const onAdd=(cantidad)=>{
           
            
         

           isInCart({...producto,cantidad})

            
        }

        return(
            <>
                <br></br>
                <div className="container">
                     <div className="row shadow">
                        <div className="col">
                            Primera de tres columnas
                            <div className="  border-3 bg-white   mb-5 bg-white rounded" >
                                <img src={producto.foto} alt="foto producto" className="w-50"/>
                            </div>
                        </div>
                        <div className="col-6">
                            Segunda de tres columnas
                            <h3>{producto.name}</h3>
                            
                            <h3>categoria: {producto.categoria}</h3>
                            
                            Descripcion
                            <hr></hr>
                            <div className=" text-wrap text-break">
                                {producto.descripcion}
                            </div>
                            <hr></hr>
                        </div>
                        <div className="col w-33">
                            Tercera de tres columnas
                            <br></br>
                            stock disponible: {producto.stock}
                            <br></br>
                            precio: $ {producto.price}
                            <br></br>
                            <div className="col w-33">
                            
                                <ItemCount onAdd={onAdd} stock={producto.stock} init={1} valor={producto.price}/>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

