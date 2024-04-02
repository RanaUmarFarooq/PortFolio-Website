import React, { useState } from "react";
import styles from "./Header.module.css";
const Header = () => {
  const [activePage, setActivePage] = useState("");

  // Function to handle click event and update active page
  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo Section */}
        <a href="#home" className={styles.logo}>
          Umar F.
        </a>
        {/* Navbar Links */}
        <nav className={styles.navBar}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
