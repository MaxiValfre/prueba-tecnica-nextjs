"use client";

import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logoLink} href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.logoIcon}
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
        </svg>
        <span className={styles.logoText}>John Doe</span>
      </a>
      <nav className={styles.nav}>
        <a className={styles.navLink} href="#about">
          Sobre Mí
        </a>
        <a className={styles.navLink} href="#interests">
          Intereses
        </a>
        <a className={styles.navLink} href="#contact">
          Contacto
        </a>
      </nav>
    </header>
  );
}
