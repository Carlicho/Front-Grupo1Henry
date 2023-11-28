import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import NavBar from './NavBar/Nav'
import styles from './Header.module.css'
import { HiOutlineSearch } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import LoginButton from '../Buttons/LoginButton';

import styled from 'styled-components'


const Header = ({onSearch}) => {

  const Sh1 = styled.h1`
  font-size: 40px;
  letter-spacing: 12px;
  text-shadow: 2px 2px 2px blue;
  text-shadow: -2px -2px -2px orange;
`;

  return (
    
  
    <div>

        <div className={styles.Headertop}>
        <div className={styles.mainHeader}>
        <Sh1>Innova</Sh1>

        <SearchBar onSearch={onSearch}/>
        
        <LoginButton/>
        
        <TiShoppingCart  size="3.24rem" />

        </div>

        <NavBar/>
        </div>
        </div>

    
  )
}

export default Header