import { itemProducto } from "./item";


export const ItemList = (productos,loading) => {
    console.log("renderizo IL")
    


    return(
        
        <>
            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}
            >

        
            {/*<div className="bg-light">
            <h3>ItemList</h3>*/}
            {productos.map(producto=>itemProducto(producto) )}
            </div>


        </>
    )

};
