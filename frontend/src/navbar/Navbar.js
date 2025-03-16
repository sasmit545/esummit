import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
        
      </Link>
      
      <ul className={`${styles.nav_links} ${isOpen ? styles.open : ''}`}>
        <li><Link to="/" onClick={closeNavbar}>Home</Link></li>
        <li><Link to="/events" onClick={closeNavbar}>Events</Link></li>
        <li><Link to="/speakers" onClick={closeNavbar}>Speakers</Link></li>
        <li><Link to="/team" onClick={closeNavbar}>Team</Link></li>
      </ul>

      <div className={styles.hamburger} onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
