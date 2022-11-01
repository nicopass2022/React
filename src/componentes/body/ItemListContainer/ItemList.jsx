import { memo } from "react";
import { ItemProduct } from "./item";



export const ItemList =  memo(({products}) => {
    


    return(
        
        <>
            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}
            >

        

                {products.map( prod =>  <ItemProduct key={prod.id} prod={prod} />  )}
                
            </div>

                
        </>
    )

}
)
