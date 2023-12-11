import React from 'react';
import NavBar from './NavBar/Nav';
import styles from './Header.module.css';
import { TiShoppingCart } from 'react-icons/ti';
import LoginButton from '../Buttons/LoginButton';
import styled from 'styled-components';
import SearchBar2 from './SearchBar/SearchBar2';
import LogoutButton from '../Buttons/LogoutButton';

const Header = ({ setResults }) => {
  const Sh1 = styled.h1`
    font-size: 40px;
    letter-spacing: 12px;
    text-shadow: 2px 2px 2px #000;
    text-shadow: -2px -2px -2px #000;
    color: #0954f4;
  `;

  return (
    <div>
      <div className={styles.Headertop}>
        <div className={styles.mainHeader}>
          <Sh1>Innova</Sh1>
          <SearchBar2 setResults={setResults} />
          <LoginButton />
          <LogoutButton />
          <TiShoppingCart size="3.24rem" />
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
