import './App.css'
import PathRoutes from './helpers/PathRoutes.Helpers.Js'
import { Route, Routes } from 'react-router-dom'
import About from './components/Views/About/About'
import Header from './components/Header/Header'
import Products from './components/products/products'
import Help from './components/Help/Help'
import Index from './components/Views/Index/Index'
import Footer from './components/Footer/Footer'
import axios from 'axios';

import ProductDetail from './components/products/ProductDetailCard/ProductDetail'
import UserSettings from './components/UserLogued/UserSettings'
import { useState } from 'react'





function App() {

  const [products, setProducts] = useState([])
 
  //! cambiar el "id" por name
  //! startWith
  //! Agregar spread oparator en setProducts para almacenar el array de prodcutos que empiecen con "x" letra
    //traer categorias/lautaro
    // traer productos/
    // renderizar las cards
    // renderizar filtrado
    const [productos, setProductos] = useState([])

    function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        console.log(data, '-> data');
         if (data.name) {
            setProductos(() => [data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
    console.log(productos,'ffff');
  return (
    <div className='app'>



    <Header onSearch={onSearch}/>
    
      
    
    <Routes>
      <Route path={PathRoutes.LANDING} element={<Index/>}/>
      <Route path={PathRoutes.INDEX} element={<Index/>}/>
      <Route path={PathRoutes.PRODUCTOS} element={<Products productos={productos}/>} />
      <Route path={PathRoutes.DETAIL} element={<ProductDetail/>}/>
      <Route path={PathRoutes.AYUDA} element={<Help/>}/>
      <Route path={PathRoutes.ABOUT} element={<About/>}/>
 
    </Routes> 
    <Footer />
    </div>
  )
}

export default App
