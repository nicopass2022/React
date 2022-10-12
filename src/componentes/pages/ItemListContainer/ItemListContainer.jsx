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
    const handleClick = ()=>{
        setCont(cont +1)
        setFecha(Date())
    }
    //let fecha=Date()
    const [cont, setCont]=useState(0)
    const [fecha,setFecha]=useState(0)
    const [loading,setLoading]=useState(true)
    const [productos,setProductos]=useState([])
    const {idCategoria}=useParams()
    //console.log(idCategoria)
    useEffect(()=>{
        if (idCategoria){
            console.log(idCategoria)
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
    // useEffect(()=>{
    //     gFetch()//simulacion de fetch >mock
    //     .then(resSgte=>setProductos(resSgte))
    //     .catch(err=>console.log(err))
    //     .finally(()=>setLoading(false))
    // },[])

	return (
        <>

            <h3>ItemListContainer</h3>
            <Input/>
            {loading ? <h3>Cargando...</h3>:
                ItemList(productos) 
             }
            
            <div>
                <Greeting/>
            </div>
            <h3>Contador</h3>
            <div>{cont}</div>
            <div>{fecha}</div>
            <button onClick={handleClick}>Contador</button>

            
        </>
    )
}
// export const ItemListContainer =()=>{

// 	return <section> 
//             {Contenido()}
//     </section>
// }
    function Greeting(props) {
        return <p>Bienvenido Usuario</p>;
    }

    


// const Contenido = () => {
//     const handleClick = ()=>{
//         setCont(cont +1)
//         setFecha(Date())
//     }
//     //let fecha=Date()
//     const [cont, setCont]=useState(0)
//     const [fecha,setFecha]=useState(0)
//     const [loading,setLoading]=useState(true)
//     const [productos,setProductos]=useState([])
//     useEffect(()=>{
//         gFetch()//simulacion de fetch >mock
//         .then(resSgte=>setProductos(resSgte))
//         .catch(err=>console.log(err))
//         .finally(()=>setLoading(false))
//     },[])


//     const contenido = {
//           display: "block",
//           border: "1px solid black",
//           height: "340px",
//           width: '100%',
//           padding: "10px",
//           opacity: 0.5,
//           background: "grey"
//     }
//     return(
//         <>
//             <div style={contenido}>
//                 <Greeting/>
            
//             </div>
//             <div>{cont}</div>
//             <div>{fecha}</div>
//             <button onClick={handleClick}>Contador</button>
//             <p>Itemcount a continuacion</p>
//             <ItemCount/>
//             {loading ? <h3>Cargando...</h3>:
//                 productos.map(producto=>itemProducto(producto) )
//             }


//         </>
//     )

// };

//MAP en el return**************************
// productos.map(producto=>
//     <div className="col-md-3" 
//     key={producto.id}
//     style={{marginLeft:100 }}>
//         <div className="card w-100 mt-5">
//             {`${producto.name}`}
//         </div>
//         <div className="card-body">
//             <img src={producto.foto} alt="foto producto" className="w-50"/>
//             {producto.price}                                                
//         </div>

//         <div className="card-footer">
//             <button className="btn btn-outline-primary btn-block">
//                 detalle del producto
//             </button>
                                                           
//         </div>

//     </div>
// )