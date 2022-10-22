import { Link } from "react-router-dom";
import { ItemDetailContainer } from "../../pages/ItemDetailContainer/ItemDetailContainer";


export const itemProducto=(producto)=>{
    console.log("renderizo Item")
    return(
        <div            
            style={{ marginLeft: 100}}
            className='col-md-3'
        > 
            <Link to={`/detalle/${producto.id}`}>
                
                <div className="card w-100 mt-5 shadow h-100" > 
                    <div className="card-header w-100  text-muted">
                    
                        {`${producto.name}`}-{`${producto.categoria}`}
                    </div>
                    <div className="card-body">
                        <img src={producto.foto} alt="foto producto" className="w-75"/>
                        <br></br>
                        <h3 className="text-muted text-reset">${producto.price}</h3>                                                
                    </div>

                    <div className="card-footer">
                        <div>
                            <button className="btn btn-outline-primary btn-block">
                                detalle
                            </button>
                        </div>
                                                                                    
                    </div>


                    <div>
                        {producto.cantidad ?
                        <hi>Cantidad: {producto.cantidad}</hi>
                        :<h1></h1>
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
    }

