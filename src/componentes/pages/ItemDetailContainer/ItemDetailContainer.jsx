//import {ItemDetail} from "../../body/ItemDetail/ItemDetail";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../helpers/gFetch";
import { ItemDetail } from "../../body/ItemDetail/ItemDetail";

//import ItemDetail from "../../body/ItemDetail/ItemDetail";

export const ItemDetailContainer =()=>{
    const{idProducto}=useParams()
    const [productos,setProductos]=useState([])
    const [loading,setLoading]=useState(true)
    //console.log(idProducto)

    useEffect(()=>{
        if (idProducto){
            //console.log(idProducto)
            gFetch()//simulacion de fetch >mock
            //.then(resSgte=>setProductos(resSgte.filter(producto=>producto.id===idProducto)))
            .then(resSgte=>setProductos(resSgte.find(producto =>producto.id === idProducto)))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }else{
            //console.log(idProducto)
            gFetch()//simulacion de fetch >mock
            .then(resSgte=>setProductos(resSgte))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }
    },[idProducto])
    //console.log(productos)
    //console.log(productos)
    //console.log(producto)
    return(
        <>
        
        {loading ? <h3>Cargando...</h3>:
                ItemDetail(productos) 
             }
       
       
        </>
    )
  };
//   <h3>--------------</h3>
        
//   {ItemDetail(productos)}

// {loading ? <h3>Cargando...</h3>:
// productos.map(producto=>ItemDetail(producto) )
// }

