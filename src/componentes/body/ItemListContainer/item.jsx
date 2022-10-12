import { Link } from "react-router-dom";
import { ItemDetailContainer } from "../../pages/ItemDetailContainer/ItemDetailContainer";
//import {DetailListContainer} from "../../pages/ItemDetailContainer/ItemListContainer/ListDetailContainer"
export const itemProducto=(producto)=>{

    return(
        <Link to={`/detalle/${producto.id}`}>
            
            <div className="col-md-3 border border-3" 
                key={producto.id}
                style={{marginLeft:100 }}>
                <div className="card w-100 mt-5">
                    {`${producto.name}`}
                </div>
                <div className="card-body">
                    <img src={producto.foto} alt="foto producto" className="w-50"/>
                    {producto.price}                                                
                </div>

                <div className="card-footer">
                    <div>
                    <button className="btn btn-outline-primary btn-block">
                            detalle
                        </button>
                    </div>
                                                                                
                </div>



            </div>
        </Link>
    )
    }

//     <div>
//     <button onClick={()=>{ItemDetailContainer(producto.id)}}>
//         Open dlc
//     </button>
// // </div>
// <button className="btn btn-outline-primary btn-block">
// detalle del producto
// </button>
    

    