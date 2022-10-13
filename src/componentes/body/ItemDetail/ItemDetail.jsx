import { ItemCount } from "../ItemListContainer/ItemCount"
import { useCartContext } from "../../../context/CartContext"
//import { Link } from "react-router-dom";
export const ItemDetail =(producto)=>{
    // const { addItem  } = useCartContext()
    //     const onAdd=(cantidad=1)=>{
    //         console.log("onAdd",cantidad)
            
    //         addItem( { ...producto, cantidad } )
            
       //}
        return(
            <>
                
                <h3>id: {producto.id}</h3>
                <h3>Nombre: {producto.name}</h3>
                <h3>precio: {producto.price}</h3>
                <h3>categoria: {producto.categoria}</h3>
                <img src={producto.foto} alt="foto producto" className="w-50"/>
                <button onClick={()=>onAdd()}>agregar</button>
                {/*<div>
                <Link to="/cart">
                    <button className="btn btn-outline-primary btn-block" onClick={cambioValor}>
                        Ver Carrito
                    </button>
                </Link>
            </div>*/}
                <button onClick={()=>onAdd()}>agregar1</button>
                <div style={{justifyContent:'center', alignItems:'center',}}>
                 <ItemCount/>
                </div>
                    
            </>
        )
    }
