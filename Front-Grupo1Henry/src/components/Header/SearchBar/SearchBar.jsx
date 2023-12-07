import { useState } from 'react';
import styles from './Searchbar.module.css';

const SearchBar = ({ filtrar }) => {
  const [productos, setProductos] = useState('');

  const inputChange = (e) => {
    const value = e.target.value;
    setProductos(value);

    // Uncomment the line below if you want to use the filtrar prop
    // filtrar(value);
  };

  const onSearch = () => {
    // Perform any actions you need when the search button is clicked
    console.log('Search clicked with value:', productos);
  };

  return (
    <div>
      <div className={styles.inputBox}>
        <input
          placeholder="Buscador"
          className={styles.searchInput}
          value={productos}
          onChange={inputChange}
        />
        <button onClick={onSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;