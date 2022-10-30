
import { useState } from 'react'
import { Link } from "react-router-dom"

import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'

import { useCartContext } from "../../../context/CartContext"
import { ItemCart } from "../../body/CarritoPage/ItemCarrito"


export default function CartPage(){
    
    
    const [loading,setLoading]=useState(false)
    const { cartList, emptyCart, valueCart, cantTotal} = useCartContext()
    const  [dataForm, setDataForm] = useState({
      name:"",
      phone:"",
      email:"",
      emailcheck:"",
    })
   
   
  const[confirm,setConfirm]=useState("0")
  const[validateMail,setValidateMail]=useState(true)
  //*****FECHA */
  let id=1
  const time = Date.now()
  const today = new Date(time)
  today.toDateString()
  //***fin fecha */
  //***Funcion para actualizar el stock  */
    const prodToUpdate=()=>{
      
      const listProducts=cartList.map(prod=>{
        
        const stockU=prod.stock-prod.cant
        const {id}=prod
        return{id,stockU}
      })
        
        const db = getFirestore()
        
       
        try{
        listProducts.forEach(element => {

          const orderDoc=doc(db,"productos",element.id)
          updateDoc(orderDoc,{stock:element.stockU})
        });
      }catch(err){
        console.log(err)
      }
        

      
    }
    //***fin actualizar stock */
  const genOrder = async (e)=>{
    
      e.preventDefault()
      prodToUpdate()
      
      const Order = {}
      //VALIDO EL CORREO
      
      if (dataForm.email===dataForm.emailcheck){
        setValidateMail(true)
        
      }else{
       
        setValidateMail(false)
        return;
        
      }
      setLoading(true)
        Order.buyer= {
              name: dataForm.name,
              phone: dataForm.phone,
              email: dataForm.email

          }
          Order.products=cartList.map(prod=>{
              const {id,name:title, price}=prod
              return{id,title,price}

        })
       

    

        const db = getFirestore()
        const orders= collection(db,"ordenes")
        

        try{
          
            const docRef = await  addDoc(orders,Order);
            
            id=docRef.id
            setLoading(false)
    
            setConfirm(id)
    
            emptyCart()
    
    
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
        {cantTotal?
        <div>
                  
                
                
                  <div className="row"></div>
                  
              <div className="container">
                <div className="row shadow">
                  <hr></hr>
                  <div className="col-6">
                      
                      <div className="  border-3 bg-white   mb-5 bg-white rounded" >
                        
                        {cartList.map(product =>  <ItemCart key={product.id} product={product} />  )}
                      </div>
                  </div>
                  <div className="col bg-light shadow">

                      <h2>Resumen de la compra</h2>
                      <br></br>
                      <h3>Total de Articulos {cantTotal}</h3>
                      <br></br>

                      <h3>Total Compra $ {valueCart}</h3>
                      <br></br>
                      por favor, complete el formulario para finalizar la compra
                      <br></br>
                      {validateMail?<h3></h3>:<h3>Verifique el campo correo</h3>}
                      <br></br>


            <form onSubmit={genOrder}>
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


                      <button className="btn btn-outline-primary btn-block" onClick={emptyCart}>Vaciar carrito</button>
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

                  


                  
                  {confirm==0 ?
                    <h3></h3>
                    :
                    <div>
                      <br></br>
                      <h3>Felicitaciones {dataForm.name}, tu codigo de confirmacion es {confirm}</h3>
                      <h1>Gracias por su compra</h1>
                    </div>
                  }
            <div>
                      </div>
        </div>
        :
        <div>
          
          
          {confirm==0 ?
            
                    <div>
                      <br></br>
                      <h1>Tu carrito esta vacio :(</h1>
                      <br></br>
                      <Link to="/">
                        <button className="btn btn-outline-primary btn-block">
                          comenzar compra
                        </button>
                      </Link>
                    </div>
                    
                    :
                    
                 
                    <div>
                    <h3>Felicitaciones {dataForm.name} , tu codigo de confirmacion es {confirm}</h3>
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
