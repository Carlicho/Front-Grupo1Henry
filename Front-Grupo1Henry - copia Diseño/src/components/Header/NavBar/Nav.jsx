import { useEffect, useRef, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { jwtDecode } from 'jwt-decode';

const {
  VITE_URL_FRONTEND,
  VITE_AUTH0_AUDIENCE
} = import.meta.env;

const NavBar = () => {
  const { isLoading, getAccessTokenSilently } = useAuth0();
  const [ isAdmin, setIsAdmin ] = useState(false);
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
}, [getAccessTokenSilently, isLoading]);

useEffect(() => {
  if ( !token ) {
    return;
  }

  console.log('check token');

  try {
    const decodedToken = jwtDecode(token);
    const { permissions } = decodedToken;

    console.log('permissions', permissions)

    if ( permissions?.includes('admin:admin') ) {
      setIsAdmin(true);
    }
  } catch (exception) {
    console.warn('error al obtener permisos', exception);
  }
}, [ token ]);

  return (
    <nav className={styles.nav}>
      <Link to="/productos" className={styles.navlink}><h4>Products</h4></Link>
      { isAdmin && ( <Link to="/admin" className={styles.navlink}><h4>Admin</h4></Link> )}
      { isAdmin && ( <Link to="/usuarios" className={styles.navlink}><h4>Usuarios</h4></Link> )}
      <Link to="/about" className={styles.navlink}><h4>Sobre nosotros</h4></Link>
    </nav>
  );
};

export default NavBar;
