import { Link } from "react-router-dom"
import styles from './Nav.module.css'


const NavBar = () => {
  return (

    
    <nav className={styles.nav}>
        

       
        <Link to="/productos"  className={styles.navlink }        >Products </Link>
        <Link to="/armatupc"  className={styles.navlink }        >Arma Tu Pc </Link>
        <Link to="/ayuda"     className={styles.navlink }        >Ayuda    </Link>
        <Link to="/about"   className={styles.navlink }        >Sobre nosotros   </Link>
        
    </nav>
  )
}

export default NavBar