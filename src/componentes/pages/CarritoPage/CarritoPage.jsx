
import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"
import { ItemCarrito } from "../../body/CarritoPage/ItemCarrito"
import { addDoc, collection, doc, documentId, DocumentReference, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore'
import { useState } from 'react'


  export default function CarritoPage(){
    console.log("entro a carritopage")

    const [loading,setLoading]=useState(false)
    const { cartList, vaciarCarrito, valorCarrito,cantidadArticulos} = useCartContext()
  const  [dataForm, setDataForm] = useState({
  //     name: '',
  //     phone: '',
  //     email:''

  })
  const[validaCorreo,setValidaCorreo]=useState(true)
  //*****FECHA */
  let id=1
  const tiempoTranscurrido = Date.now()
  const hoy = new Date(tiempoTranscurrido)
  hoy.toDateString()
  //console.log(hoy)
  //****FIN FECHA */
  
    // const eliminar=()=>{
      //   eliminoArticulo(producto)
      // }
    
    const generarOrden = async (e)=>{
      e.preventDefault()
      const Orden = {}
      //VALIDO EL CORREO
      setLoading(true)
      if (dataForm.email===dataForm.emailcheck){
        setValidaCorreo(true)

      }else{
        console.log("correo incorrecto")
        setValidaCorreo(false)
      }
        Orden.buyer= {
              name: dataForm.name,
              phone: dataForm.phone,
              email: dataForm.email
              // name:"juan",
              // phone:"123456",
              // email:"n@n.com"
          }
          Orden.productos=cartList.map(prod=>{
              const {id,name:title, price}=prod
              return{id,title,price}
        })
        const db = getFirestore()
        const ordenes= collection(db,"ordenes")
        //addDoc(ordenes,Orden)
        //const docRef =  await addDoc(ordenes,Orden)
        try{
            const docRef =  await addDoc(ordenes,Orden);
    
            id=docRef.id
            setLoading(false)
    
            setConfirmacion(id)
    
            vaciarCarrito()
    
    
            }catch(err){
              console.log(err);
            }
        // .then(resp => console.log(resp))
        // .then(resp1=>console.log(docRef.id))
        // .catch(err => console.log(err))
        //.finally(() => vaciarCarrito())
      
      }
      //ORDEN DEL CARRITO, LA DEFINO Y AGREGO A LA BASE************
      const[confirmacion,setConfirmacion]=useState("0")
      //console.log(confirmacion)


      //*******AGREGA ORDEN */
      // const agregaOrden=async()=>{
      //   const Orden={}
        
      //   Orden.buyer={
      //     name: "nicolas ",
      //     phone: "4444",
      //       email: "a@a.com",
      //       fecha: hoy
      //     }
      //     Orden.productos=cartList.map(prod=>{
      //       const {id,name:title, price}=prod
      //       return{id,title,price}
      //     })
      //     Orden.total=valorCarrito

      //   const db= getFirestore()
      //   const ordenes= collection(db,"ordenes")


       


      //   try{
      //   const docRef =  await addDoc(ordenes,Orden);

      //   id=docRef.id

      //   setConfirmacion(id)

      //   vaciarCarrito()


      //   }catch(err){
      //     console.log(err);
      //   }

      // }
//FIN  AGREGA ORDEN***********************
//CAPTURO LOS INPUTS DEL FORM*****
  const handleInputChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
  })
}
console.log(dataForm)

    return (
      <>
        {cantidadArticulos?
        <div>
                  
                <i className="bi bi-cart"></i>
                
                  <div className="row"></div>
                  
              <div className="container">
                <div className="row shadow">
                  <hr></hr>
                  <div className="col-6">
                      
                      <div className="  border-3 bg-white   mb-5 bg-white rounded" >
                        {cartList.map(producto=>ItemCarrito(producto))}
                      </div>
                  </div>
                  <div className="col bg-light shadow">
                    
                      <h3>Total de Articulos {cantidadArticulos}</h3>
                      
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
                  <button type="submit">Generar orden</button>
              </form>



                      <button className="btn btn-outline-primary btn-block" onClick={vaciarCarrito}>Vaciar carrito</button>
                      <Link to="/">
                        <button className="btn btn-outline-primary btn-block">
                          Seguir comprando
                        </button>
                      </Link>
                      <Link to="/compra">
                        <button className="btn btn-outline-primary btn-block">
                          Comprar
                        </button>
                      </Link>
                  </div>
                  {loading ? 
                    <div className="d-flex justify-content-center">
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

                  


                  {/*<button onClick={agregaOrden}>comprar1</button>*/}
                  {confirmacion==0 ?
                    <h3></h3>
                    :
                    <div>
                      <h3>Felicitaciones, tu codigo de confirmacion es {confirmacion}</h3>
                      <h1>Gracias por su compra</h1>
                    </div>
                  }
            <div>
                      </div>
        </div>
        :
        <div>
          
          {confirmacion==0 ?
                    
                    <h1>Tu Carrito esta vacio</h1>
                    :
                    <div>
                      <h3>Felicitaciones , tu codigo de confirmacion es {confirmacion}</h3>
                      <h3>Gracias por su compra</h3>
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