
import { useState } from 'react';
import styles from './Searchbar.module.css'
import { HiOutlineSearch } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";

import styled from 'styled-components'

const SearchBar = ({filtrar}) => {
  const [productos, setProductos] = useState('')
  
  console.log(productos, '-> dataaaaaa');
  const inputChange = (e) => {
    console.log(e.target.value);
    // setProductos(e.target.value)
    // filtrar(e.target.value)
  }

  return (
    <div >
        <div className={styles.inputBox}>
          <input
            placeholder='Buscador' 
            className={styles.searchInput}
            // value={data}
            onChange={inputChange}
          />
          <button onClick={() => onSearch(data)}>Agregar</button>
        </div>
    </div>

  )
}

export default SearchBar