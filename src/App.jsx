
//import { createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
//import { CartWidget } from './componentes/header/CartWidget';
import './componentes/header/NavBar.jsx';
import { NavBar } from './componentes/header/NavBar.jsx';
import { ItemCart } from './componentes/body/CarritoPage/ItemCarrito.jsx';

import { NotFound404 } from './componentes/NotFound404/NotFound404';
import CartPage from './componentes/pages/CarritoPage/CarritoPage';
//import {Compra} from './componentes/pages/Compra/Compra.jsx';
import { ItemDetailContainer } from './componentes/pages/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './componentes/pages/ItemListContainer/ItemListContainer';
import CartContextProvider from './context/CartContext';
import Contact from './componentes/pages/contacto/contacto';




function App() {

  <ItemCart/>
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
        <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/" element={<ItemListContainer/>}/>
          <Route path ="/category/:idCategory" element={<ItemListContainer/>}/>
          <Route path ="/detail/:idProduct" element={<ItemDetailContainer/>}/>
          
          <Route path ="/cart" element={<CartPage/>}/>
          <Route path ="/404" element={<NotFound404/>}/>

          <Route path="*" element={<Navigate to="/404"/>}/>
          

          
        </Routes>

      </BrowserRouter>
     
    </CartContextProvider>
    
  )

}

export default App;

