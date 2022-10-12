// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import './componentes/header/NavBar.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './componentes/header/NavBar.jsx';
import { NavBar } from './componentes/header/NavBar.jsx';
//import { NavBar } from './componentes/header/NavBar.js';
import { NotFound404 } from './componentes/NotFound404/NotFound404';
import CarritoPage from './componentes/pages/CarritoPage/CarritoPage';
import { ItemDetailContainer } from './componentes/pages/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './componentes/pages/ItemListContainer/ItemListContainer';
//import { ItemDetailContainer } from './componentes/pages/ItemDetailContainer/ItemDetailContainer';
//import { ItemListContainer } from './componentes/pages/ItemListContainer/ItemListContainer';



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path ="/" element={<ItemListContainer/>}/>
        <Route path ="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route path ="/detalle/:idProducto" element={<ItemDetailContainer/>}/>
        
        <Route path ="/cart" element={<CarritoPage/>}/>
        <Route path ="/404" element={<NotFound404/>}/>

        <Route path="*" element={<Navigate to="/404"/>}/>
        
        
      </Routes>

    </BrowserRouter>
  )

}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
