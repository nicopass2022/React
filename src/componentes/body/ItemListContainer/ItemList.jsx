import { itemProducto } from "./item";


export const ItemList = (productos,loading) => {
    
    //console.log(productos)
    const contenido = {
          display: "block",
          border: "1px solid black",
          height: "340px",
          width: '100%',
          padding: "10px",
          opacity: 0.5,
          background: "grey"
    }

    return(
        
        <>
            <h3>ItemList</h3>
            {productos.map(producto=>itemProducto(producto) )}



        </>
    )

};
// {productos.map(producto=>itemProducto(producto) )
// }
