import { Link } from "react-router-dom"
import styles from './Nav.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
        

        <Link to="/home"      className={styles.logoname}>     Innova</Link>
        <Link to="/products"  className={styles.navlink}        > Products</Link>
        <Link to="/services"  className={styles.navlink}        > Services</Link>
        <Link to="/about"     className={styles.navlink}    >    About</Link>
        <Link to="/account"   className={styles.navlink}      >  Login</Link>
        
    </nav>
  )
}

export default NavBar