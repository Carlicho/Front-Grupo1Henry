import './App.css'
import PathRoutes from './helpers/PathRoutes.Helpers.Js'
import { Route, Routes } from 'react-router-dom'
import About from './Views/About/About'
import NavBar from './NavBar/Nav'
import Products from './Views/Productos/Products'
import Login from './NavBar/Login/Login'
import Ayuda from './Views/Ayuda/Ayuda'
import Index from './Views/Index/Index'

function App() {
  

  return (
    <div className='app'>

    <NavBar/>
    
    <Routes>
      <Route path={PathRoutes.LANDING} element={<Index/>}/>
      <Route path={PathRoutes.INDEX} element={<Index/>}/>
      <Route path={PathRoutes.PRODUCTS} element={<Products/>}/>
      <Route path={PathRoutes.AYUDA} element={<Ayuda/>}/>
      <Route path={PathRoutes.LOGIN} element={<Login/>}/>
      <Route path={PathRoutes.ABOUT} element={<About/>}/>
 
    </Routes> 
   
    </div>
  )
}

export default App
