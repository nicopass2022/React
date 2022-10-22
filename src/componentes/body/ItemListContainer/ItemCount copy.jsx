import {useState} from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"
export const ItemCount =({stock, init, onAdd})=>{
    
    const [option,setOption]= useState(1);
    const [cont, setCont]=useState(init)
    //const[cambioBoton, setCambioBoton]=useState(true)
    const handleClickMas = ()=>{

        if (cont<stock){
            setCont(cont +1)
        }
    }
    const handleClickMenos = ()=>{
        
        if (cont>init){
            setCont(cont -1)
        }

    }
    const handleonAdd=()=>{
        
        onAdd(cont)
        
        //setCambioBoton(false)
            option===1?
            setOption(2):setOption(1)
        //cambioValor()
    }
    //function cambioValor (){
    const cambioValor=()=>{

        }
    //estilo para que esten alineados los botones
    
    const contenido={
    
            display: "flex",
            alignItems: 'center',
            justifyContent:'center',
        }

            
    return(
        <>
        {option===1?
       
            <div style={contenido}>
                <button className="btn btn-outline-primary btn-block" onClick={handleClickMenos}>-</button>
                <div className="col-md-2" >
                    <div className="border p-2"> {cont}</div>
                </div>
                
                <button className="btn btn-outline-primary btn-block" onClick={handleClickMas}>+</button>
                
                <button className="btn btn-outline-primary btn-block" onClick={handleonAdd}>
                    Agregar al carrito
                </button>  
                  
                </div>
            :
            <div>
                <Link to="/cart">
                    <button className="btn btn-outline-primary btn-block">
                        Ver Carrito
                    </button>
                </Link>
                <Link to="/">
                    <button className="btn btn-outline-primary btn-block">
                        Seguir comprando
                    </button>
                </Link>
            </div> 
        }
        </>
    )
}

// export default function Caso1(){
//     const [option,setOption]= useState(1);
//         function cambioValor (){
//             option===1?
//             setOption(2):setOption(1)
//         }
//         return(
//             <>
//             {option===1?
//                                 <div>
//                                 <button className="btn btn-outline-primary btn-block" onClick={cambioValor}>
//                                         Opcion1
//                                     </button>
//                                 </div>
//             :
            // <div>
            //     <Link to="/cart">
            //         <button className="btn btn-outline-primary btn-block" onClick={cambioValor}>
            //             Ver Carrito
            //         </button>
            //     </Link>
            //     <Link to="/">
            //         <button className="btn btn-outline-primary btn-block" onClick={cambioValor}>
            //             Seguir comprando
            //         </button>
            //     </Link>
            // </div>    
//         }
//             </>
//         )

// }