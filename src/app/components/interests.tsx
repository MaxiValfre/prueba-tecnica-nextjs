"use client";

import styles from "../page.module.css";
import Image from "next/image";

export default function Interest() {
  return (
    <section id="interests" className={styles.interestsSection}>
      <div className={styles.container}>
        <div className={styles.interestsText}>
          <div className={styles.interestsBadge}>Intereses</div>
          <h2 className={styles.interestsTitle}>Temas que me interesan</h2>
          <ul className={styles.interestsList}>
            <li>Desarrollo web</li>
            <li>Diseño de interfaces</li>
            <li>Fotografía digital</li>
            <li>Inteligencia artificial</li>
            <li>Sostenibilidad</li>
            <li>Viajes y aventuras</li>
          </ul>
        </div>
        <Image
          src="/interest.jpg"
          width="400"
          height="400"
          alt="Intereses"
          priority={false}
          className={styles.interestsImage}
        />
      </div>
    </section>
  );
}
