import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginButton.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const { user, loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: 'http://localhost:3001'
          }
        });
    
        let result;

        if ( user ){
          result = await axios.post('http://localhost:3001/auth',
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
          navigate('/logout', { replace: true });
        } else {
          console.error(error);
        }
      }
    };

    getAccessToken();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <div>
      {!isAuthenticated ? (
        <button className={styles.LoginBtn} onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <p>Bienvenido, has iniciado sesión</p>
      )}
    </div>
  );
};

export default LoginButton;