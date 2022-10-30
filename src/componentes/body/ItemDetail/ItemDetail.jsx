import { useCartContext } from "../../../context/CartContext"
import { ItemCount } from "../ItemListContainer/ItemCount"


export const ItemDetail =({product})=>{
    
    
    const { isInCart } = useCartContext()
    

        const onAdd=(cant)=>{
           
            
         

           isInCart({...product,cant})

            
        }

        return(
            <>
                <br></br>
                <div className="container">
                     <div className="row shadow">
                        <div className="col">
                            
                            <div className="  border-3 bg-white   mb-5 bg-white rounded" >
                                <img src={product.foto} alt="foto producto" className="w-50"/>
                            </div>
                        </div>
                        <div className="col-6">
                            
                            <h3>{product.name}</h3>
                            
                            <h3>categoria: {product.categoria}</h3>
                            
                            Descripcion
                            <hr></hr>
                            <div className=" text-wrap text-break">
                                {product.descripcion}
                            </div>
                            <hr></hr>
                        </div>
                        <div className="col w-33">
                            
                            <br></br>
                            stock disponible: {product.stock}
                            <br></br>
                            precio: $ {product.price}
                            <br></br>
                            <div className="col w-33">
                            
                                <ItemCount onAdd={onAdd} stock={product.stock} init={1} valor={product.price}/>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

