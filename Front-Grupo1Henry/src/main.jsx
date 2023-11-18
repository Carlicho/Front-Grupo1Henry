import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
// import Products from './components/Products/Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    {/* <Products /> */}
    <Footer />
  </BrowserRouter>,
)
