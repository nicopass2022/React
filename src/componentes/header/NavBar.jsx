import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'
//import { CartWidget } from './CartWidget.jsx'
export const NavBar =()=>{
	return <section>

		
		<nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
          <Link to="/">Brand Empresa</Link>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
            
            <Link to="/categoria/gorra">Gorras</Link>
            <Link to="/categoria/remera">Remeras</Link>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Opciones
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Opcion 1</a></li>
                  <li><a class="dropdown-item" href="#">Opcion 2</a></li>
                  <li><a class="dropdown-item" href="#">Opcion 3</a></li>
                </ul>
              </li>

            </ul>

          </div>
        <CartWidget/>  
        </div>
      </nav>



   
		
		</section>
}
