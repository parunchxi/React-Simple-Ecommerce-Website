// Import link
import { Link } from "react-router-dom";

// Import icons
import { FaShoppingCart } from "react-icons/fa";

// Import styles
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/favicon.svg" />
          <h1>S4U</h1>
        </Link>
      </div>
      <ul className={styles.link_group}>
        <li>
          <Link to="/cart">
            <FaShoppingCart title="Cart" />
            <span>0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
