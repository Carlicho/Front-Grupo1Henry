
import styles from './Searchbar.module.css'

const SearchBar = () => {
  return (
    <div className={styles.mainHeader}>
            <h1>Innova</h1>
            <div className={styles.inputBox}>
            <input placeholder='BUSCAR' type='search' className={styles.searchInput}></input>
            <button className={styles.lupaBtn}>LupaImg</button>
            </div>
            <button className={styles.btnLogin}>Iniciar Sesión </button>
            <p> CarritoImg</p>
    </div>

  )
}

export default SearchBar