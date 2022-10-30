import {useEffect, useState} from "react"
//import { gFetch } from "../../../helpers/gFetch";
//import { itemProducto } from "./item";
//import { ItemCount } from "../../body/ItemListContainer/ItemCount";
import { ItemList } from "../../body/ItemListContainer/ItemList";
import{collection,  deleteDoc,  doc,  getDocs, getFirestore, query, where} from "firebase/firestore"
//import Caso1, { ItemCount } from "../../body/ItemListContainer/ItemCount";
import { useParams } from "react-router-dom";
//import { Input } from "../../body/input/input";





export const ItemListContainer =()=>{
    //console.log("renderizo ILC")
    const {idCategoria}=useParams()
    const [loading,setLoading]=useState(true)
    const [productos,setProductos]=useState([])
   
   

    
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


      

    
  
	return (
        <>
            {/* el boton de busqueda <Input/>*/}
            <br></br>
            
            <div>
                {Greeting("usuario")}
            </div>
            <br></br>
            {loading ? 
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        
                
                    </div>
                </div>
            :
                <ItemList productos={productos} /> 
            }


            
        </>
    )
}

    function Greeting(props) {
        return <p>Bienvenido {props}</p>;
    }

    

