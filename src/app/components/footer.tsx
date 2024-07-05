"use client";

import styles from "../page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>
        © 2024 John Doe. Todos los derechos reservados.
      </p>
      <nav className={styles.footerNav}></nav>
    </div>
  </footer>
  );
}
