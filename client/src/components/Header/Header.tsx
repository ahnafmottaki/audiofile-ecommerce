import styles from "./header.module.css";
import logo from "../../assets/shared/desktop/logo.svg";
import { Menu, ShoppingCart } from "lucide-react";
import MobileNav from "../MobileNav/MobileNav";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.wrapper}>
      <MobileNav isOpen={isMenuOpen} />
      <div className={`container ${styles.header}`}>
        <div className={styles.logo}>
          <Menu className="icon" onClick={handleIsMenuOpen} />
          <img src={logo} alt="Audiophile logo" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>home</li>
            <li>headphones</li>
            <li>speakers</li>
            <li>earphones</li>
          </ul>
        </nav>
        <div>
          <ShoppingCart className={`icon`} />
        </div>
      </div>
    </header>
  );
};

export default Header;
