//array de productos
const products=[
    {id:"1", name:"remera roja", descripcion:"El producto consta de aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc", price:"50", categoria:"remera", stock:"5", foto:"https://www.segutecnica.com/images/000000000001757037365remera-naranja-segutecnica.png"},
    {id:"2", name:"remera azul", descripcion:"aaaaaaaaaaaaaaa",price:"60", categoria:"remera", stock:"10", foto:"https://www.remerasya.com/media/catalog/product/cache/839e5c25c645eac744603bf9726fb4fd/r/e/remera_azul_lisa_3.jpg"},
    {id:"3", name:"remera Amarilla", descripcion:"aaaaaaaaaaaaaaa",price:"70", categoria:"remera",stock:"50", foto:"https://static.dafiti.com.ar/p/topper-6642-207198-1-product.jpg"},
    {id:"4", name:"remera Negra", descripcion:"aaaaaaaaaaaaaaa",price:"80", categoria:"remera", stock:"90", foto:"https://static.dafiti.com.ar/p/topper-6959-873019-1-product.jpg"},
    {id:"5", name:"gorra roja", descripcion:"aaaaaaaaaaaaaaa",price:"90", categoria:"gorra", stock:"70", foto:"https://static.dafiti.com.ar/p/bravo-0103-594339-1-product.jpg"},
    {id:"6", name:"gorra azul", descripcion:"aaaaaaaaaaaaaaa",price:"110", categoria:"gorra", stock:"33", foto:"https://http2.mlstatic.com/D_NQ_NP_605965-MLA44164688536_112020-O.webp"},
    {id:"7", name:"gorra amarilla", descripcion:"aaaaaaaaaaaaaaa",price:"110", categoria:"gorra", stock:"41", foto:"https://http2.mlstatic.com/D_NQ_NP_636320-MLA49936790812_052022-O.webp"},
    {id:"8", name:"gorra negra", descripcion:"aaaaaaaaaaaaaaa",price:"120", categoria:"gorra", stock:"27", foto:"https://static.dafiti.com.ar/p/bravo-0107-994339-1-product.jpg"}

]
export const gFetch =()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(products)
        },3000)
        
        
    })
}