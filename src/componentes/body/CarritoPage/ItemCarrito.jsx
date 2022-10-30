
import { useCartContext } from "../../../context/CartContext";


export const ItemCart=({product})=>{
    const{delItem}=useCartContext()
    const delArtic=()=>{
        
        delItem(product)
    }

    return(
        <>
        <hr></hr>
        
            <div className="row">
                <div className="col-sm-9 w-100 border">
                    {`${product.name}`}
               
                </div>
                <div className="row w-100 ">
                    
                 <div className="col-6 ">
                        
                        <img src={product.foto} alt="foto producto" className="w-50"/>
                    </div>
                    <div className="col-auto ">
                        <div>
                            
                           Cantidad: {product.cant}
                            
                            
                        </div>
                        Unitario ${product.price} 
                        <br></br>   
                        Total ${product.total}                                          
                        <hr></hr>
                        
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-outline-primary btn-block" onClick={delArtic}>Eliminar</button>
                    </div>
                </div>
               

                
                    <div>
                    </div>
                                                                                



            </div>
            
       
        
        
        </>
    )
    }

