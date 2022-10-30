import { memo } from "react";
import { ItemProducto } from "./item";



export const ItemList =  memo(({productos}) => {
    //console.log("renderizo IL")
 
    


    return(
        
        <>
            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}
            >

        

                {productos.map( prod =>  <ItemProducto key={prod.id} prod={prod} />  )}
                
            </div>


        </>
    )

}
)