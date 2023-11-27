
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
    <div >
        <div className={styles.inputBox}>
          <div className={styles.searchInput}></div>
        </div>
    </div>

  )
}

export default SearchBar