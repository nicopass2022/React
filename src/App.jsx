
import { createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
//import { CartWidget } from './componentes/header/CartWidget';
import './componentes/header/NavBar.jsx';
import { NavBar } from './componentes/header/NavBar.jsx';
import { ItemCarrito } from './componentes/body/CarritoPage/ItemCarrito.jsx';

import { NotFound404 } from './componentes/NotFound404/NotFound404';
import CarritoPage from './componentes/pages/CarritoPage/CarritoPage';
import {Compra} from './componentes/pages/Compra/Compra.jsx';
import { ItemDetailContainer } from './componentes/pages/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './componentes/pages/ItemListContainer/ItemListContainer';
import CartContextProvider from './context/CartContext';



function App() {

  <ItemCarrito/>
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path ="/" element={<ItemListContainer/>}/>
          <Route path ="/categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path ="/detalle/:idProducto" element={<ItemDetailContainer/>}/>
          
          <Route path ="/cart" element={<CarritoPage/>}/>
          <Route path ="/404" element={<NotFound404/>}/>

          <Route path="*" element={<Navigate to="/404"/>}/>
          <Route path ="/compra" element={<Compra/>}/>
          
        </Routes>

      </BrowserRouter>
     
    </CartContextProvider>
    
  )

}

export default App;

