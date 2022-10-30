
import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"
import { ItemCarrito } from "../../body/CarritoPage/ItemCarrito"
import { addDoc, collection, getFirestore, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'


export default function CarritoPage(){
    
    
    const [loading,setLoading]=useState(false)
    const { cartList, vaciarCarrito, valorCarrito, cantidadTotal} = useCartContext()
    const  [dataForm, setDataForm] = useState({
      name:"",
      phone:"",
    })
   
    
  const[confirmacion,setConfirmacion]=useState("0")
  const[validaCorreo,setValidaCorreo]=useState(true)
  //*****FECHA */
  let id=1
  const tiempoTranscurrido = Date.now()
  const hoy = new Date(tiempoTranscurrido)
  hoy.toDateString()
  //***fin fecha */
  

  const generarOrden = async (e)=>{
    
      e.preventDefault()
      const Orden = {}
      //VALIDO EL CORREO
      setLoading(true)
      
      if (dataForm.email===dataForm.emailcheck){
        setValidaCorreo(true)
        
      }else{
        console.log("correo NO validado")
        
      }
        Orden.buyer= {
              name: dataForm.name,
              phone: dataForm.phone,
              email: dataForm.email

          }
          Orden.productos=cartList.map(prod=>{
              const {id,name:title, price}=prod
              return{id,title,price}
        })
        const db = getFirestore()
        const ordenes= collection(db,"ordenes")

        try{
          
            const docRef = await  addDoc(ordenes,Orden);
            
            id=docRef.id
            setLoading(false)
    
            setConfirmacion(id)
    
            vaciarCarrito()
    
    
            }catch(err){
              console.log(err);
            }

      
      }
      //ORDEN DEL CARRITO, LA DEFINO Y AGREGO A LA BASE************
 



//CAPTURO LOS INPUTS DEL FORM*****
  const handleInputChange = (e) => {

    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }


    return (
      <>
        {cantidadTotal?
        <div>
                  
                <i className="bi bi-cart"></i>
                
                  <div className="row"></div>
                  
              <div className="container">
                <div className="row shadow">
                  <hr></hr>
                  <div className="col-6">
                      
                      <div className="  border-3 bg-white   mb-5 bg-white rounded" >
                        
                        {cartList.map(producto =>  <ItemCarrito key={producto.id} producto={producto} />  )}
                      </div>
                  </div>
                  <div className="col bg-light shadow">
                    
                      <h3>Total de Articulos {cantidadTotal}</h3>
                      
                      <h3></h3>
                    
                    
                      <h3>Total Compra $ {valorCarrito}</h3>
                      por favor, complete el formulario para finalizar la compra
                      <br></br>
                      {validaCorreo?<h3></h3>:<h3>Verifique el campo correo</h3>}
                      <br></br>


            <form onSubmit={generarOrden}>
                  <input 
                      type="text" 
                      name="name"
                      placeholder="Nombre" 
                      value={dataForm.name}
                      onChange={handleInputChange}
                      required
                  />
                  <br></br>
                  <input 
                      type="number"
                      name="phone" 
                      value={dataForm.phone}
                      placeholder="Teléfono" 
                      onChange={handleInputChange}
                      required
                      />
                      <br></br>
                  <input 
                      type="email" 
                      name="email"
                      value={dataForm.email}
                      placeholder="Email" 
                      onChange={handleInputChange}
                      required
                      />
                      <br></br>
                      <input 
                      type="email" 
                      name="emailcheck"
                      value={dataForm.emailcheck}
                      placeholder="Repetir Email" 
                      onChange={handleInputChange}
                      required
                      />
                      <br></br>
                      <br></br>
                  <button type="submit" className="btn btn-outline-primary btn-block">Generar orden</button>
              </form>
              <hr></hr>


                      <button className="btn btn-outline-primary btn-block" onClick={vaciarCarrito}>Vaciar carrito</button>
                      <Link to="/">
                        <button className="btn btn-outline-primary btn-block">
                          Seguir comprando
                        </button>
                      </Link>

                  </div>
                  <br></br>
                  {loading ? 
                    <div className="d-flex justify-content-center">
                      <br></br>
                      <h3>Procesando compra</h3>
                      <br></br>
                        <div className="spinner-border" role="status">
                          
                            
                    
                        </div>
                    </div>
                  :
                      <h3></h3> 
                  }
                </div>
              </div>

                  


                  
                  {confirmacion==0 ?
                    <h3></h3>
                    :
                    <div>
                      <br></br>
                      <h3>Felicitaciones {dataForm.name}, tu codigo de confirmacion es {confirmacion}</h3>
                      <h1>Gracias por su compra</h1>
                    </div>
                  }
            <div>
                      </div>
        </div>
        :
        <div>
          
          
          {confirmacion==0 ?
            
                    <div>
                      <br></br>
                      <h1>Tu Carrito esta vacio</h1>
                      <br></br>
                      <Link to="/">
                        <button className="btn btn-outline-primary btn-block">
                          comenzar compra
                        </button>
                      </Link>
                    </div>
                    
                    :
                    
                 
                    <div>
                    <h3>Felicitaciones {dataForm.name} , tu codigo de confirmacion es {confirmacion}</h3>
                      <h3>Gracias por tu compra</h3>
                      <Link to="/">
                        <button className="btn btn-outline-primary btn-block">
                          Seguir comprando
                        </button>
                      </Link>
                </div>
          }
        </div>
      }
    </>
)
}
