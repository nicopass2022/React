import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ItemDetail } from "../../body/ItemDetail/ItemDetail";
import{doc, getDoc, getFirestore} from "firebase/firestore"


export const ItemDetailContainer =()=>{
    //console.log("renderizo IDC")
    const [productos,setProductos]=useState([])
    const [loading,setLoading]=useState(true)
    const{idProducto}=useParams()
    


    useEffect(()=>{
        const db=getFirestore()
        const queryDoc=doc(db,"productos",idProducto)
        getDoc(queryDoc)
        .then(resp=>setProductos({id:resp.id, ...resp.data()}))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])
    
    return(
        <>
        <br></br>
        {loading ?             
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                   
              
                </div>
            </div>
        :
        
        <ItemDetail producto={productos} /> 
        
    }
       
        </>
    )
};


