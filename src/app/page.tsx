"use client";
import styles from "../app/page.module.css";
import Header from "./components/header";
import About from "./components/about";
import Interests from "./components/interests";
import Contact from "./components/contact";
import Footer from "./components/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <About />
        <Interests />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}
