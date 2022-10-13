import {useState} from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"
export const ItemCount =()=>{
    //agrego 1 unidad del pruducto 
    const { addItem  } = useCartContext()
    const onAdd=(cantidad=1,producto)=>{
        
        cambioValor()
        
        
        addItem( { ...producto, cantidad } )
        
    
        
    }

    const handleClickMas = ()=>{
        if (cont<=9){
            setCont(cont +1)
        }
    }
    const handleClickMenos = ()=>{
        
        if (cont>=2){
            setCont(cont -1)
        }

    }
    const [cont, setCont]=useState(0)
    const [option,setOption]= useState(1);
    //function cambioValor (){
    const cambioValor=()=>{
        //console.log("cambioValor")
        //console.log("valor option",option)
            option===1?
            setOption(2):setOption(1)
        }
    //estilo para que esten alineados los botones
    
    const contenido={
    
            display: "flex",
            alignItems: 'center',
            justifyContent:'center',
        }
        // const { addItem  } = useCartContext()
        // const onAdd=(cantidad=1)=>{
        //     console.log("onAdd",cantidad)
        //     addItem({...producto,cantidad})
        // }
            
    return(
        <>
        {option===1?
        <div style={contenido}>
            <button className="btn btn-outline-primary btn-block" onClick={handleClickMenos}>-</button>
            <div>{cont}</div>
            <button className="btn btn-outline-primary btn-block" onClick={handleClickMas}>+</button>
            
            <button className="btn btn-outline-primary btn-block" onClick={()=>onAdd()}>
            Agregar al carrito
            </button>  
              
        </div>
        
        
            :
            <div>
                <Link to="/cart">
                    <button className="btn btn-outline-primary btn-block" onClick={cambioValor}>
                        Ver Carrito
                    </button>
                </Link>
                <Link to="/">
                    <button className="btn btn-outline-primary btn-block" onClick={cambioValor}>
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
//             <div>
//                 <Link to="/cart">
//                     <button className="btn btn-outline-primary btn-block" onClick={cambioValor}>
//                         Ver Carrito
//                     </button>
//                 </Link>
//                 <Link to="/">
//                     <button className="btn btn-outline-primary btn-block" onClick={cambioValor}>
//                         Seguir comprando
//                     </button>
//                 </Link>
//             </div>    
//         }
//             </>
//         )

// }