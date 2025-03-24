import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1>League Of Legends</h1>
          <p>jogo mt ruim</p>
          <p>mas o aram é bão dimai</p>
          <Link href="/items">saiba mais sobre os items</Link>
        </div>
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}