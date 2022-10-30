import {useEffect, useState} from "react"

import { useParams } from "react-router-dom";

import{collection,  doc,  getDocs, getFirestore, query, where} from "firebase/firestore"
import { ItemList } from "../../body/ItemListContainer/ItemList";





export const ItemListContainer =()=>{
    
    
    const {idCategory}=useParams()
    const [loading,setLoading]=useState(true)
    const [products,setProducts]=useState([])
   
   

    //***se fect para traer articulos de la base. en queryflter valido si traigo idcategory y filtro la consulta */
    useEffect(()=>{
        
            const db=getFirestore()
            const queryCollection=collection(db,"productos")
            
            const queryFilter= idCategory ? query(queryCollection,where("category","==",idCategory))
                : queryCollection
            getDocs(queryFilter) 
            .then(resp=>setProducts(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        
    },[idCategory])

//****Orifinal  */
// useEffect(()=>{
//     if (idCategory){
//         const db=getFirestore()
//         const queryCollection=collection(db,"productos")
//         const queryFilter=query(queryCollection,where("categoria","==",idCategory))
//         getDocs(queryFilter)
//         .then(resp=>setProductos(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
//         .catch(err=>console.log(err))
//         .finally(()=>setLoading(false))

//     }else{
//         const db=getFirestore()
//         const queryCollection=collection(db,"productos")
//         getDocs(queryCollection)
//         .then(resp=>setProductos(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
//         .catch(err=>console.log(err))
//         .finally(()=>setLoading(false))
//     }
// },[idCategory])
//****Fin original */
      

    
  
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
                <ItemList products={products} /> 
            }


            
        </>
    )
}

    function Greeting(props) {
        return <p>Bienvenido {props}</p>;
    }

    

