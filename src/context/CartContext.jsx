import { useContext, useState, createContext } from "react";



const CartContext = createContext([])
export const useCartContext=()=>useContext(CartContext)

//creo el provider
const CartContextProvider=({children})=>{
    //defino el carrito
    const [cartList,setCartList]=useState ([])
    //defino un state para cantidades
    const[valueCart,setValueCart]=useState(0)
    
    let valueProduct=0
    
    const cantTotal  = cartList.reduce((acum, prod) => acum += prod.cant , 0)
    
    
    const delItem=(product)=>{
        
        
        setValueCart(valueCart-product.total)
        const cartListModif=(cartList.filter(productexist=>productexist.id!==product.id))
        setCartList(cartListModif)
        
        
    }


            
            const addItem=(product)=>{
                
                //agrego el producto al cartList
                
            
                setValueCart(valueCart+product.cant*product.price)
                
                valueProduct=product.cant*product.price
                product.total=valueProduct
                setCartList([...cartList,product])
               
                
                

            }
            const emptyCart=()=>{
                setCartList([])

                setValueCart(0)

        
            }

    //verifico que el producto exista
    const isInCart=(product)=>{
       
        //verifico si hay productos en el carlist
        if (cartList.length==0){
            //si no hay, agredo
            
            addItem({ ...product} )

        }else{
            
            //si hay, busco a ver si ya existe el producto
            try{
                //busco si existe en el carrito
                const exist=(cartList.find(productexist=>productexist.id===product.id))
                
                //si existe, sumo la cantidad que tenia + la nueva cantidad
                const canTotal=parseInt(exist.cant+=product.cant)
                
                //traigo el stock del articulo
                const stock=parseInt(product.stock)
                //verifico si la cantidad es mayor al stock disponible
                if (canTotal>stock){

                    exist.cant=stock
                    
                    //alerto que excede el stock y la cantidad del producto es = al stock disponible
                    alert("solo puede adquirir"+stock+"productos")
                    
                    valueProduct=stock*exist.price
                    exist.total=valueProduct
                    
                }else{
                    //seteo la cantidad del producto en cantidad total
                    exist.cant=canTotal
                    valueProduct=canTotal*exist.price
                    setValueCart(valueCart+exist.cant*exist.price)
                    exist.total=valueProduct
                    

                }

            }catch (error) {
                
                addItem({ ...product } )
            }

        }
    }
    return(
        <CartContext.Provider value= {{
            cartList,
            addItem,
            emptyCart,
            isInCart,
            valueCart,
            delItem,
            cantTotal
            
            
            
        }}>
        {children}
        </CartContext.Provider>
        )
    }

export default CartContextProvider
