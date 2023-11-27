import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginButton.module.css'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

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