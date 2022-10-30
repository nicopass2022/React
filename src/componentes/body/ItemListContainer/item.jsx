import { Link } from "react-router-dom";


export const ItemProduct=({prod})=>{
    
   

    return(
        <div            
            style={{ marginLeft: 100}}
            className='col-md-3'
        > 
            <Link to={`/detail/${prod.id}`}>
                
                <div className="card w-100 mt-5 shadow h-100" > 
                    <div className="card-header w-100  text-muted">
                    
                        {`${prod.name}`}-{`${prod.category}`}
                    </div>
                    <div className="card-body">
                        <img src={prod.foto} alt="foto producto" className="w-75"/>
                        <br></br>
                        <h3 className="text-muted text-reset">${prod.price}</h3>       
                        Stock disponible: {`${prod.stock}  `}                                        
                    </div>

                    <div className="card-footer">
                        <div>
                            <button className="btn btn-outline-primary btn-block">
                                detalle
                            </button>
                        </div>
                                                                                    
                    </div>


                    <div>
                        {prod.cant ?
                        <hi>Cantidad: {prod.cant}</hi>
                        :<h1></h1>
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
    }
