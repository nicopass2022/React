import {useEffect, useState} from "react"
import { gFetch } from "../../../helpers/gFetch";
//import { itemProducto } from "./item";
//import { ItemCount } from "../../body/ItemListContainer/ItemCount";
import { ItemList } from "../../body/ItemListContainer/ItemList";
import{collection, collectionGroup, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"
//import Caso1, { ItemCount } from "../../body/ItemListContainer/ItemCount";
import { useParams } from "react-router-dom";
import { Input } from "../../body/input/input";
//import { Contenido } from "./ItemList";




export const ItemListContainer =()=>{
    console.log("renderizo ILC")
    const {idCategoria}=useParams()
    const [loading,setLoading]=useState(true)
    const [productos,setProductos]=useState([])
    console.log(idCategoria)

    
    useEffect(()=>{
        if (idCategoria){
            const db=getFirestore()
            const queryCollection=collection(db,"productos")
            const queryFilter=query(queryCollection,where("categoria","==",idCategoria))
            getDocs(queryFilter)
            .then(resp=>setProductos(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))

        }else{
            const db=getFirestore()
            const queryCollection=collection(db,"productos")
            getDocs(queryCollection)
            .then(resp=>setProductos(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }
    },[idCategoria])

    // useEffect(()=>{
    //     const db=getFirestore()
    //     const queryDoc=doc(db,"productos","4KdyxmYcSeKy3OYjhStV")
    //     getDoc(queryDoc)
    //     .then(resp=>console.log({id:resp.id, ...resp.data()}))
    //     .catch(err=>console.log(err))
    //     .finally(()=>setLoading(false))
    // },[])
    
    
    // useEffect(()=>{
    //     if (idCategoria){
            
    //         gFetch()//simulacion de fetch >mock
    //         .then(resSgte=>setProductos(resSgte.filter(producto=>producto.categoria===idCategoria)))
    //         .catch(err=>console.log(err))
    //         .finally(()=>setLoading(false))
    //     }else{
    //     gFetch()//simulacion de fetch >mock
    //     .then(resSgte=>setProductos(resSgte))
    //     .catch(err=>console.log(err))
    //     .finally(()=>setLoading(false))
    //     }
    // },[idCategoria])




    
  
	return (
        <>
            {/*<Input/>*/}
            <br></br>
            <h1>momozing falta usar</h1>
            <div>
                {Greeting("nombre usuario")}
            </div>
            <br></br>
            {loading ? 
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        
                
                    </div>
                </div>
            :
                ItemList(productos) 
             }


            
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

    

