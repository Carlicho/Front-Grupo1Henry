
import styles from './Searchbar.module.css'
import { HiOutlineSearch } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";

import styled from 'styled-components'

const SearchBar = () => {

  const Sh1 = styled.h1`
    font-size: 40px;
    letter-spacing: 12px;
    text-shadow: 2px 2px 2px blue;
    text-shadow: -2px -2px -2px orange;
  `;

  return (
    <div className={styles.mainHeader}>
            <Sh1>Innova</Sh1>
            <div className={styles.inputLogin}>
            <div className={styles.inputBox}>
            <input placeholder='BUSCAR' type='search' className={styles.searchInput}></input>
            <button className={styles.lupaBtn}><HiOutlineSearch size="30px" /></button>
            </div>
            <button className={styles.btnLogin}>Iniciar Sesión </button>
            
            <TiShoppingCart  size="3.24rem" />
            </div>
    </div>

  )
}

export default SearchBar