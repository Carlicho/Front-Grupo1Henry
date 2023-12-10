import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import NavBar from './NavBar/Nav';
import styles from './Header.module.css';
import { HiOutlineSearch } from 'react-icons/hi';
import { TiShoppingCart } from 'react-icons/ti';
import LoginButton from '../Buttons/LoginButton';
import styled from 'styled-components';
import SearchBar2 from './SearchBar/SearchBar2';

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
          <TiShoppingCart size="3.24rem" />
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;