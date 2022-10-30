import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { CartWidget } from './CartWidget'

export const NavBar =()=>{
  //cargo el cartcontext para traer cantidad total  de articulos
  
  const{ cantidadTotal}=useCartContext()
  
 
	return <section>

		
		<nav className="navbar navbar-expand-lg bg-secondary text-white">
        <div className="container-fluid">
          <Link to="/" className="nav-link active text-white">Materiales OnLine</Link>
          
          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
            
            
            
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/contact" className="nav-link active text-white">Contacto</Link>
                 
              </li>

            

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/category/aridos" className="dropdown-item">Aridos</Link></li>
                  <li><Link to="/category/ladrillos" className="dropdown-item">Ladrillos</Link></li>
                  <li><Link to="/category/tejas" className="dropdown-item">Tejas</Link></li>
                </ul>
              </li>

            </ul>

          </div>
          <Link to="/cart">
            <CartWidget/>  
          </Link>
        </div>
      </nav>



   
		
		</section>
}
