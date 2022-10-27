import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../helpers/gFetch";
import { ItemDetail } from "../../body/ItemDetail/ItemDetail";
import{collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore"


export const ItemDetailContainer =()=>{
    console.log("renderizo IDC")
    const{idProducto}=useParams()
    const [productos,setProductos]=useState([])
    const [loading,setLoading]=useState(true)
    


    useEffect(()=>{
        const db=getFirestore()
        const queryDoc=doc(db,"productos",idProducto)
        getDoc(queryDoc)
        .then(resp=>setProductos({id:resp.id, ...resp.data()}))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])
    // useEffect(()=>{
    //     if (idProducto){
            
    //         gFetch()//simulacion de fetch >mock
    //         //.then(resSgte=>setProductos(resSgte.filter(producto=>producto.id===idProducto)))
    //         .then(resSgte=>setProductos(resSgte.find(producto =>producto.id === idProducto)))
    //         .catch(err=>console.log(err))
    //         .finally(()=>setLoading(false))
    //     }else{
            
    //         gFetch()//simulacion de fetch >mock
    //         .then(resSgte=>setProductos(resSgte))
    //         .catch(err=>console.log(err))
    //         .finally(()=>setLoading(false))
    //     }
    // },[idProducto])

    return(
        <>
        <br></br>
        {loading ?             
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                   
              
                </div>
            </div>
        :
                ItemDetail(productos) 
             }
       
       
        </>
    )
  };

