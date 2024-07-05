"use client";

import { useState, FormEvent } from "react";
import styles from "../page.module.css";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactText}>
          <div className={styles.contactBadge}>Contacto</div>
          <h2 className={styles.contactTitle}>Ponte en contacto</h2>
          <p className={styles.contactDescription}>
            Si tienes alguna pregunta o simplemente quieres decir hola, no dudes
            en enviarme un mensaje.
          </p>
        </div>
        <div className={styles.contactFormWrapper}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="name">
                Nombre
              </label>
              <input
                className={styles.inputField}
                id="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="email">
                Correo electrónico
              </label>
              <input
                className={styles.inputField}
                id="email"
                placeholder="m@example.com"
                type="email"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="message">
                Mensaje
              </label>
              <textarea
                className={styles.inputTextarea}
                id="message"
                placeholder="Escribe tu mensaje..."
                required
              ></textarea>
            </div>
            <div className={styles.submitButtonWrapper}>
              <button type="submit" className={styles.submitButton}>Enviar</button>
            </div>
          </form>
          {isSubmitted && (
            <div className={styles.confirmationMessage}>
              ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
