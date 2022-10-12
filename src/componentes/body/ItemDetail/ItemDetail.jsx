import { ItemCount } from "../ItemListContainer/ItemCount"

//import { Link } from "react-router-dom";
export const ItemDetail =(producto)=>{

        return(
            <>
                
                <h3>id: {producto.id}</h3>
                <h3>Nombre: {producto.name}</h3>
                <h3>precio: {producto.price}</h3>
                <h3>categoria: {producto.categoria}</h3>
                <img src={producto.foto} alt="foto producto" className="w-50"/>
                <div style={{justifyContent:'center', alignItems:'center',}}>
                    <ItemCount/>
                </div>
                    
            </>
        )
    }
