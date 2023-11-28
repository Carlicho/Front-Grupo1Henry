
import { useState } from 'react';
import styles from './Searchbar.module.css'
import { HiOutlineSearch } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";

import styled from 'styled-components'

const SearchBar = ({onSearch}) => {
  const [data, setData] = useState('')

  const Sh1 = styled.h1`
    font-size: 40px;
    letter-spacing: 12px;
    text-shadow: 2px 2px 2px blue;
    text-shadow: -2px -2px -2px orange;
  `;

  const inputChange = (e) => {
    console.log(e.target.value);
    setData(e.target.value)
  }

  return (
    <div >
        <div className={styles.inputBox}>
          <input
            placeholder='Buscador' 
            className={styles.searchInput}
            value={data}
            onChange={inputChange}
          />
          <button onClick={() => onSearch(data)}>Agregar</button>
        </div>
    </div>

  )
}

export default SearchBar