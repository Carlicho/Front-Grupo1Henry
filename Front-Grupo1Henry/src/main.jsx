import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const {
  VITE_AUTH0_DOMAIN,
  VITE_AUTH0_CLIENT_ID,
  VITE_AUTH0_AUDIENCE
} = import.meta.env;



ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={VITE_AUTH0_DOMAIN}
    clientId={VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: VITE_AUTH0_AUDIENCE
    }}
    useRefreshTokens
    cacheLocation='localstorage'
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
