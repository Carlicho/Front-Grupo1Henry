import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginButton.module.css';

const {
  VITE_URL_FRONTEND
} = import.meta.env;

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated && (
                <div>
                    <button className={styles.LoginBtn} onClick={() => logout({ logoutParams: { returnTo: VITE_URL_FRONTEND } }) }>Logout</button>
                </div>
            )}
        </>
    );
};

export default LogoutButton;
