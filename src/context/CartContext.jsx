import { useContext, useState, createContext } from "react";



const CartContext = createContext([])
export const useCartContext=()=>useContext(CartContext)

//creo el provider
const CartContextProvider=({children})=>{
    //defino el carrito
    const [cartList,setCartList]=useState ([])
    //defino un state para cantidades
    const[valorCarrito,setValorCarrito]=useState(0)
    
    let valorProducto=0
    
    const cantidadTotal  = cartList.reduce((acum, prod) => acum += prod.cantidad , 0)
    

    const eliminoArticulo=(producto)=>{
        
        
        setValorCarrito(valorCarrito-producto.total)
        const cartListModificada=(cartList.filter(productoexistente=>productoexistente.id!==producto.id))
        setCartList(cartListModificada)
        
        
    }


            
            const addItem=(producto)=>{
                
                //agrego el producto al cartList
                
            
                setValorCarrito(valorCarrito+producto.cantidad*producto.price)
                
                valorProducto=producto.cantidad*producto.price
                producto.total=valorProducto
                setCartList([...cartList,producto])
               
                
                

            }
            const vaciarCarrito=()=>{
                setCartList([])

                setValorCarrito(0)

        
            }

    //verifico que el producto exista
    const isInCart=(producto)=>{
       
        //verifico si hay productos en el carlist
        if (cartList.length==0){
            //si no hay, agredo
            
            addItem({ ...producto} )

        }else{
            
            //si hay, busco a ver si ya existe el producto
            try{
                //busco si existe en el carrito
                const existe=(cartList.find(productoexistente=>productoexistente.id===producto.id))
                
                //si existe, sumo la cantidad que tenia + la nueva cantidad
                const canTotal=parseInt(existe.cantidad+=producto.cantidad)
                
                //traigo el stock del articulo
                const stock=parseInt(producto.stock)
                //verifico si la cantidad es mayor al stock disponible
                if (canTotal>stock){

                    existe.cantidad=stock
                    
                    //alerto que excede el stock y la cantidad del producto es = al stock disponible
                    alert("solo puede adquirir"+stock+"productos")
                    
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
                
                addItem({ ...producto } )
            }

        }
    }
    return(
        <CartContext.Provider value= {{
            cartList,
            addItem,
            vaciarCarrito,
            isInCart,
            valorCarrito,
            eliminoArticulo,
            cantidadTotal
            
            
            
        }}>
        {children}
        </CartContext.Provider>
        )
    }

export default CartContextProvider
