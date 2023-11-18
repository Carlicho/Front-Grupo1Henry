import './App.css'
import PathRoutes from './helpers/PathRoutes.Helpers.Js'
import { Route, Routes } from 'react-router-dom'
import About from './components/Views/About/About'
import Header from './components/Header/Header'
import Products from './components/Views/Productos/Products'

import Ayuda from './components/Views/Ayuda/Ayuda'
import Index from './components/Views/Index/Index'

function App() {
  

  return (
    <div className='app'>

    <Header/>
    
    <Routes>
      <Route path={PathRoutes.LANDING} element={<Index/>}/>
      <Route path={PathRoutes.INDEX} element={<Index/>}/>
      <Route path={PathRoutes.PRODUCTS} element={<Products/>}/>
      <Route path={PathRoutes.AYUDA} element={<Ayuda/>}/>
      <Route path={PathRoutes.ABOUT} element={<About/>}/>
 
    </Routes> 
   
    </div>
  )
}

export default App
