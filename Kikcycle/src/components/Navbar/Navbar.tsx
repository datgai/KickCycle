import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__hamburger}>
        <input type="checkbox" name="hamburger" id="hamburger" />
        <label htmlFor="hamburger">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </label>
      </div>
      <div className={styles.navbar__menu}>
        <menu>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
        </menu>
      </div>
      <a href="/" className={styles.navbar__brand}>
        <h1>KikCycle</h1>
        <img src="/logo.svg" alt="Logo" />
      </a>
    </nav>
  );
};

export default Navbar;
