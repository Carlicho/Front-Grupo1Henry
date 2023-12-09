import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import authConfig from "./auth_config.json";
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(

  
  <Auth0Provider
  domain={authConfig.domain}
  clientId={authConfig.clientId}
  redirectUri={window.location.origin}
>

      <BrowserRouter>
      <App />
  </BrowserRouter>

  </Auth0Provider>,

)
