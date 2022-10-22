import { useContext, useState, createContext, useEffect } from "react";
//import { CartWidget } from "../componentes/header/CartWidget";
//import { NavBar } from "../componentes/header/NavBar";



const CartContext = createContext([])
export const useCartContext=()=>useContext(CartContext)

//creo el provider
const CartContextProvider=({children})=>{
    //defino el carrito
    const [cartList,setCartList]=useState ([])
    //defino un state para cantidades

    const[valorCarrito,setValorCarrito]=useState(0)
    const[cantidadArticulos,setCantidadArticulos]=useState(0)
    let valorProducto=0
    

    const eliminoArticulo=(producto)=>{
        console.log("entro a eliminoArticulo")
        
        setValorCarrito(valorCarrito-producto.total)
        const cartListModificada=(cartList.filter(productoexistente=>productoexistente.id!==producto.id))
        setCartList(cartListModificada)
        setCantidadArticulos(cantidadArticulos-1)
        
    }


    //calculo el valor de todos los articulos del carrito
    // const valorTotal=()=>{
        
    //     cartList.map(producto=>setValorCarrito(producto.cantidad * producto.price))
        

    //         }
            
            const addItem=(producto,cantidad)=>{
                
                //agrego el producto al cartList
                
                setCantidadArticulos(cantidadArticulos+1)
                setValorCarrito(valorCarrito+producto.cantidad*producto.price)
                
                valorProducto=producto.cantidad*producto.price
                producto.total=valorProducto
                setCartList([...cartList,producto])
                
                

            }
            const vaciarCarrito=()=>{
                setCartList([])
                setCantidadArticulos(0)
                setValorCarrito(0)
                //setValorProducto(0)
                //seteo el contador de cantidades y valores en 0
                //setcantCarrito(0)
                //setValorCarrito(0)
                //setValorProducto(0)
        
            }

    //verifico que el producto exista
    const isInCart=(producto,cantidad)=>{
        
        if (cartList.length==0){
            
            
            addItem({ ...producto,cantidad } )

        }else{
            
            try{
                
                //busco si existe en el carrito
                const existe=(cartList.find(productoexistente=>productoexistente.id===producto.id))
                existe ? console.log("existe el art") : console.log("no existe") 
                //si existe, sumo la cantidad que tenia + la nueva cantidad
                const canTotal=parseInt(existe.cantidad+=cantidad)
                
                //traigo el stock del articulo
                const stock=parseInt(producto.stock)
                //verifico si la cantidad es mayor al stock disponible
                if (canTotal>stock){

                    existe.cantidad=stock
                    
                    //alerto que excede el stock y la cantidad del producto es = al stock disponible
                    alert("solo puede adquirir"+stock+"productos")
                    //let valorcompra= stock*producto.price
                    valorProducto=stock*existe.price
                    existe.total=valorProducto
                    
                }else{
                    //seteo la cantidad del producto en cantidad total
                    existe.cantidad=canTotal
                    valorProducto=canTotal*existe.price
                    setValorCarrito(valorCarrito+existe.cantidad*existe.price)
                    existe.total=valorProducto
                    

                }


            }catch (error) {
                console.log(error)
                addItem({ ...producto,cantidad } )
            }

        }
    }
    return(
        <CartContext.Provider value= {{
            cartList,
            addItem,
            vaciarCarrito,
            isInCart,
            cantidadArticulos,
            valorCarrito,
            eliminoArticulo
            
            
            
        }}>
        {children}
        </CartContext.Provider>
        )
    }

export default CartContextProvider
