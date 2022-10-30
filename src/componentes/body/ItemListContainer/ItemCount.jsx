import {useState} from "react"
import { Link } from "react-router-dom"


export const ItemCount =({stock, init, onAdd, valor})=>{
   
    
    const [option,setOption]= useState(1);
    const [cont, setCont]=useState(init)

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
        setOption(2)
        
        onAdd(cont)
        

    }
    
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
       
            <div>
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
                <br></br>  
                Total $:{valor*cont}
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

