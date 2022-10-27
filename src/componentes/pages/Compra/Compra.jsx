export const Compra=()=>{
    const Orden={}

    Orden.buyer={
        nombre: "Juan",
        telefono:"1111"
    }
    Orden.productos(cartList)
    //     let comprador=[]
    //     comprador.push(nombre.value)
    //     comprador.push(apellido.value)
    //     comprador.push(domiclio.value)
    //     comprador.push(correo.value)
    //     console.log(comprador)

    // }
    return(
        <>
    <h1>Gracias por su compra</h1>
    <h3>definir buyer</h3>
    <input className="nombre"type="text" value="Nombre"></input>
    <input className="apellido"type="text" value="apellido"></input>
    <input className="domicilio"type="text" value="domicilio"></input>
    <input className="correo"type="email" value="correo"></input>
    <button onClick={buyer}>comprar</button>
    </>
    )
}