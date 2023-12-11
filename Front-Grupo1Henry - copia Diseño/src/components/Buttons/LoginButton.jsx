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
  const { user, loginWithRedirect, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
  const [ nombreCompleto, setNombreCompleto ] = useState('');
  const token = useRef();

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: VITE_AUTH0_AUDIENCE
          }
        });

        token.current = accessToken;
    
        let result;

        if ( user ){
          console.log('user', user);

          result = await axios.post(`${VITE_URL_BACKEND}/auth`,
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
          console.error(error);
        }
      }
    };

    getAccessToken();
  }, [getAccessTokenSilently, user?.sub]);

  useEffect(() => {
    const getUsuario = async () => {
        const result = await axios.get(`${VITE_URL_BACKEND}/usuarios/${user.sub}`, {
            headers: {
                'Authorization': `Bearer ${token.current}`
            }
        });

        setNombreCompleto(result.data.nombre_completo);
    };

    getUsuario();
}, [user?.sub]);

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