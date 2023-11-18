import './App.css'
import LandingPage from './LandingPage/landingPage'
import PathRoutes from './helpers/PathRoutes.Helpers.Js'
import { Route, Routes } from 'react-router-dom'
import About from './About/About'
import NavBar from './NavBar/Nav'
import Products from './Products/Products'
import Login from './Login/Login'
import Services from './Services/Services'

function App() {
  

  return (
    <div className='app'>

    <NavBar/>
    
    <Routes>
      <Route path={PathRoutes.LANDING} element={<LandingPage />} />
      <Route path={PathRoutes.HOME} element={<LandingPage/>}/>
      <Route path={PathRoutes.PRODUCTS} element={<Products/>}/>
      <Route path={PathRoutes.SERVICES} element={<Services/>}/>
      <Route path={PathRoutes.LOGIN} element={<Login/>}/>
      <Route path={PathRoutes.ABOUT} element={<About/>}/>
 
    </Routes> 
   
    </div>
  )
}

export default App
