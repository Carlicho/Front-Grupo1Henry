import './App.css'
import PathRoutes from './helpers/PathRoutes.Helpers.Js'
import { Route, Routes } from 'react-router-dom'
import About from './components/Views/About/About'
import NavBar from './components/NavBar/Nav'
import Products from './components/Views/Productos/Products'
import Login from './components/NavBar/Login/Login'
import Ayuda from './components/Views/Ayuda/Ayuda'
import Index from './components/Views/Index/Index'
import Footer from './components/Footer/Footer'

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
      <Footer />
    </div>
  )
}

export default App
