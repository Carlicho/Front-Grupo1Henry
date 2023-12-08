import { Link } from "react-router-dom"
import styles from './Nav.module.css'


const NavBar = () => {
  return (

    
    <nav className={styles.nav}>
        

       
        <Link to="/productos"  className={styles.navlink }        >Products </Link>
        <Link to="/admin"     className={styles.navlink }        >Admin   </Link>
        <Link to="/about"   className={styles.navlink }        >Sobre nosotros   </Link>
        
    </nav>
  )
}

export default NavBar