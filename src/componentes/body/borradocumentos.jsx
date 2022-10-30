//***borro colecciones */
      //const eliminaColeccion=()=>{

        const [ordenesFB,setOrdenesFB]=useState([])
        useEffect(()=>{
            console.log("en eliminar")
            const db=getFirestore()
            const queryCollection=collection(db,"ordenes")
            getDocs(queryCollection)
            .then(resp=>setOrdenesFB(resp.docs.map(ord=>({id:ord.id, ...ord.data()}))))
            
            
            //.catch(err=>console.log(err))
            //.finally(()=>console.log("termino"))
        },[])
        const listaOrdenes=[]
        
        //console.log(ordenesFB)
        ordenesFB.map(ordenes=>(listaOrdenes.push({id:ordenes.id})))
        //console.log(listaOrdenes)
        //console.log(listaOrdenes[1])
        //const db=getFirestore()
        //const queryCollection=collection(db,"ordenes")
        listaOrdenes.forEach(element =>console.log(element.id))
        console.log("intento eliminar lista")
        useEffect(()=>{
            console.log("en eliminar2")
            const db=getFirestore()
            const queryCollection=collection(db,"ordenes")
            getDocs(queryCollection)
            .then(resp=>setOrdenesFB(resp.docs.map(ord=>({id:ord.id, ...ord.data()}))))
            
            

        },[])
        
        listaOrdenes.forEach(element => {

            const db = getFirestore();
            
            const docRef = doc(db, "ordenes", element.id);
            
            deleteDoc(docRef)
            .then(() => {
                console.log("Entire Document has been deleted successfully.")
            })
            .catch(error => {
                console.log(error);
            })
        });


      //**fin borro colecciones */
    