import {useEffect, useState} from "react"
import { gFetch } from "../../../helpers/gFetch";
//import { itemProducto } from "./item";
//import { ItemCount } from "../../body/ItemListContainer/ItemCount";
import { ItemList } from "../../body/ItemListContainer/ItemList";
//import Caso1, { ItemCount } from "../../body/ItemListContainer/ItemCount";
import { useParams } from "react-router-dom";
import { Input } from "../../body/input/input";
//import { Contenido } from "./ItemList";




export const ItemListContainer =()=>{
    console.log("renderizo ILC")
    const [loading,setLoading]=useState(true)
    const [productos,setProductos]=useState([])
    const {idCategoria}=useParams()
    
    useEffect(()=>{
        if (idCategoria){
            
            gFetch()//simulacion de fetch >mock
            .then(resSgte=>setProductos(resSgte.filter(producto=>producto.categoria===idCategoria)))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }else{
        gFetch()//simulacion de fetch >mock
        .then(resSgte=>setProductos(resSgte))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
        }
    },[idCategoria])




    
  
	return (
        <>
            {/*<Input/>*/}
            <br></br>
            <div>
                {Greeting("nombre usuario")}
            </div>
            <br></br>
            {loading ? 
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        {/*<span className="sr-only">Loading...</span>*/}
                
                    </div>
                </div>
            :
                ItemList(productos) 
             }
            
            {/*<h3>Contador</h3>
            <div>{cont}</div>
            <div>{fecha}</div>
            <button onClick={handleClick}>Contador</button>*/}

            
        </>
    )
}
// export const ItemListContainer =()=>{

// 	return <section> 
//             {Contenido()}
//     </section>
// }
    function Greeting(props) {
        return <p>Bienvenido {props}</p>;
    }

    

