"use client";

import styles from "../page.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutText}>
          <div className={styles.aboutBadge}>Sobre Mí</div>
          <h2 className={styles.aboutTitle}>Hola, soy John Doe</h2>
          <p className={styles.aboutDescription}>
            Soy un apasionado de la tecnología y me encanta aprender cosas
            nuevas. Me gusta explorar diferentes áreas como desarrollo web,
            diseño, fotografía y más.
          </p>
        </div>
        <Image
          src="/man.png"
          width="400"
          height="400"
          alt="John Doe"
          className={styles.aboutImage}
          priority={false}
        />
      </div>
    </section>
  );
}
