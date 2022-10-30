//import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
//import { ItemDetailContainer } from "../../pages/ItemDetailContainer/ItemDetailContainer";
//import {DetailListContainer} from "../../pages/ItemDetailContainer/ItemListContainer/ListDetailContainer"
export const ItemCarrito=({producto})=>{
    const{eliminoArticulo}=useCartContext()
    const eliminar=()=>{
        
        eliminoArticulo(producto)
    }

    return(
        <>
        <hr></hr>
        
            <div className="row">
                <div className="col-sm-9 w-100 border">
                    {`${producto.name}`}
               
                </div>
                <div className="row w-100 ">
                    
                 <div className="col-6 ">
                        
                        <img src={producto.foto} alt="foto producto" className="w-50"/>
                    </div>
                    <div className="col-auto ">
                        <div>
                            
                           Cantidad: {producto.cantidad}
                            
                            
                        </div>
                        Unitario ${producto.price} 
                        <br></br>   
                        Total ${producto.total}                                          
                        <hr></hr>
                        
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-outline-primary btn-block" onClick={eliminar}>Eliminar</button>
                    </div>
                </div>
               

                
                    <div>
                    </div>
                                                                                



            </div>
            
       
        
        
        </>
    )
    }

