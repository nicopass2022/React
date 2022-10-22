import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { CartWidget } from './CartWidget'
//import { CartWidget } from './CartWidget.jsx'
export const NavBar =()=>{
  //cargo el cartcontext para traer cantidad de articulos
  const{cantidadArticulos}=useCartContext()
  
	return <section>

		
		<nav className="navbar navbar-expand-lg bg-secondary text-white">
        <div className="container-fluid">
          <Link to="/" className="nav-link active text-white">Brand Empresa</Link>
          
          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
            
            
            
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/categoria/gorra" className="nav-link active text-white">Gorras</Link>
                 
              </li>
              <li className="nav-item">
                <Link to="/categoria/remera" className="nav-link active text-white">Remeras</Link>
                 {/*<a className="nav-link active text-white" aria-current="page" href="#">Home</a>*/}
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active text-white" aria-current="page">Home</Link>
                {/*<a className="nav-link text-white text-white" href="#">Contacto</a>*/}
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/categoria/remera" className="dropdown-item">Remeras</Link></li>
                  <li><Link to="/categoria/gorra" className="dropdown-item">Gorras</Link></li>

                </ul>
              </li>

            </ul>

          </div>
          <Link to="/cart">
            {CartWidget(cantidadArticulos)}  
          </Link>
        </div>
      </nav>



   
		
		</section>
}
