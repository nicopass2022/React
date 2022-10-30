import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import{doc, getDoc, getFirestore} from "firebase/firestore"

import { ItemDetail } from "../../body/ItemDetail/ItemDetail";


export const ItemDetailContainer =()=>{
    
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const{idProduct}=useParams()
    


    useEffect(()=>{
        const db=getFirestore()
        const queryDoc=doc(db,"productos",idProduct)
        getDoc(queryDoc)
        .then(resp=>setProducts({id:resp.id, ...resp.data()}))
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
        
        <ItemDetail product={products} /> 
        
    }
       
        </>
    )
};


