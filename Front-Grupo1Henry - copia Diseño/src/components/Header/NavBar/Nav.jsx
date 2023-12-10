import { Link } from "react-router-dom"
import styles from './Nav.module.css'


const NavBar = () => {
  return (

    
    <nav className={styles.nav}>
        

       
        <Link to="/productos"  className={styles.navlink }        > <h4>Products</h4> </Link>
        <Link to="/admin"     className={styles.navlink }        > <h4>Admin</h4>   </Link>
        <Link to="/about"   className={styles.navlink }        > <h4>Sobre nosotros</h4>   </Link>
        
    </nav>
  )
}

export default NavBar