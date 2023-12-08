import './App.css'
import PathRoutes from './helpers/PathRoutes.Helpers.Js'
import { Route, Routes } from 'react-router-dom'
import About from './components/Views/About/About'
import Header from './components/Header/Header'
import Products from './components/products/products'
import Admin from './components/Admin/Admin'
import Index from './components/Views/Index/Index'
import Footer from './components/Footer/Footer'
import axios from 'axios';

import ProductDetail from './components/products/ProductDetailCard/ProductDetail'
import UserSettings from './components/UserLogued/UserSettings'
import { useEffect, useState } from 'react'
import Perfiericos from './components/products/ProductCategories/Perifericos/Perfiericos'
import Notebooks from './components/products/ProductCategories/Notebooks/Notebooks'
import Monitores from './components/products/ProductCategories/Monitores/Monitores'
import SearchResults from './components/Header/SearchBar/SearchResults'
import SearchResultsList from './components/Header/SearchBar/SearchResultsList'





function App() {


 
  const [allProducts, setAllProducts] = useState([])
  const [allMonitores, setAllMonitores] = useState([])
  const [allNotebooks, setAllNotebooks] = useState([])
  const [allPerfiericos, setAllPerfiericos] = useState([])
  

  const [dataProducts, setDataProducts] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const[results, setResults] = useState([])

  //! cambiar el "id" por name
  //! startWith
  //! Agregar spread oparator en setProducts para almacenar el array de prodcutos que empiecen con "x" letra
    //traer categorias/lautaro
    // traer productos/
    // renderizar las cards
    // renderizar filtrado
  //   const [productos, setProductos] = useState([])

  //   function onSearch(id) {
  //     axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
  //       console.log(data, '-> data');
  //        if (data.name) {
  //           setProductos(() => [data]);
  //        } else {
  //           window.alert('¡No hay personajes con este ID!');
  //        }
  //     }).catch((error) => {         console.error('Error fetching data:', error)})
  //  }
   
  //   console.log(productos,'ffff');

  const perifericosGet = async () => {
    await axios('http://localhost:3001/categorias/3/productos').then(res=>{
      setAllPerfiericos(res.data.productos)
      setDataProducts(res.data.productos)
      console.log(res.data.productos, '->res ga');
    }).catch(error =>{
      console.log(error);
    })
}
useEffect(() => {
  perifericosGet()
}, [])


  const notebooksGet = async () => {
    await axios('http://localhost:3001/categorias/1/productos').then(res=>{
      setAllNotebooks(res.data.productos)
      setDataProducts(res.data.productos)
      console.log(res.data.productos, '->res ga');
    }).catch(error =>{
      console.log(error);
    })
}
useEffect(() => {
  notebooksGet()
}, [])

  

  const monitoresGet = async () => {
    await axios('http://localhost:3001/categorias/2/productos').then(res=>{
      setAllMonitores(res.data.productos)
      setDataProducts(res.data.productos)
      console.log(res.data.productos, '->res ga');
    }).catch(error =>{
      console.log(error);
    })
}
useEffect(() => {
  monitoresGet()
}, [])

   
    const peticionGet = async () => {
        await axios('http://localhost:3001/productos').then(res=>{
          setAllProducts(res.data)
          setDataProducts(res.data)
          console.log(res.data, '->res ga');
        }).catch(error =>{
          console.log(error);
        })
    }
    useEffect(() => {
      peticionGet()
    }, [])

    console.log(allMonitores, '-> usuarios');
    
const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda=allProducts.filter((elementos)=> {
      if (elementos.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ) {
        return elementos
      }
    })
    setAllProducts(resultadosBusqueda)
  }

  return (
    <div className='app'>



  <Header setResults={setResults} filtrar={filtrar} />
    
     
    <Routes>
      <Route path={PathRoutes.LANDING} element={<Index/>}/>
      <Route path={PathRoutes.INDEX} element={<Index/>}/>
      <Route path={PathRoutes.PRODUCTOS} element={<Products productos={allProducts}/>} />
      <Route path={PathRoutes.DETAIL} element={<ProductDetail/>}/>
      <Route path={PathRoutes.ADMIN} element={<Admin/>}/>
      <Route path={PathRoutes.ABOUT} element={<About/>}/>
      <Route path={PathRoutes.MONITORES} element={<Monitores productos={allMonitores}/>}/>
      <Route path={PathRoutes.NOTEBOOKS} element={<Notebooks productos={allNotebooks}/>}/>
      <Route path={PathRoutes.PERIFERICOS} element={<Perfiericos productos={allPerfiericos}/>}/>
      <Route path={PathRoutes.SEARCHRESULTS} element={<SearchResults results={results}/>}/>
    </Routes> 
    <Footer />

    <SearchResultsList result={results}/>
    </div>
  )
}

export default App
