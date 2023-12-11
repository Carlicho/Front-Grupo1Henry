import React, { useEffect, useState, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginButton.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const {
  VITE_URL_BACKEND,
  VITE_URL_FRONTEND,
  VITE_AUTH0_AUDIENCE
} = import.meta.env;

const LoginButton = () => {
  const { isLoading, user, loginWithRedirect, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
  const [ nombreCompleto, setNombreCompleto ] = useState('');
  const [ token, setToken ] = useState('');

  useEffect(() => {
    if ( isLoading ) {
      return;
    }

    const getAccessToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: VITE_AUTH0_AUDIENCE
          }
        });

        setToken(accessToken);
    
        if ( user ){
          console.log('user', user);

          await axios.post(`${VITE_URL_BACKEND}/auth`,
            {
              sub: user.sub,
              name: user.name,
              email: user.email
            },
            { headers: { 'Authorization': `Bearer ${accessToken}` } }
          );
        }
      } catch (error) {
        if ( error?.response?.status === 401 ) {
          console.error('El usuario actual no esta autorizado para acceso al sitio.');
          logout({ logoutParams: { returnTo: VITE_URL_FRONTEND } });
        } else {
          console.warn(error);
        }
      }
    };

    getAccessToken();
  }, [getAccessTokenSilently, user?.sub, isLoading]);

  useEffect(() => {
    if ( !token ) {
      return;
    }
    
    const getUsuario = async () => {
      try {
        let result; 

        if ( user && token ) {
          result = await axios.get(`${VITE_URL_BACKEND}/usuarios/${user?.sub || 0}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
          });
        }

        setNombreCompleto(result?.data?.nombre_completo);
      } catch (exception) {
        console.error('Error en loginbutton', exception);
      }
    };

    getUsuario();
  }, [user?.sub, token]);

  return (
    <div>
      {!isAuthenticated ? (
        <button className={styles.LoginBtn} onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <>
          <p>Bienvenido/a, {nombreCompleto}.</p>
          <Link to="/perfil">Ver perfil</Link>
        </>
      )}
    </div>
  );
};

export default LoginButton;