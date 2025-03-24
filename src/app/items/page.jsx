import styles from './items.module.css';
import Link from "next/link";

export default function items() {
    return (
        <div className={styles.page}>
          <main className={styles.main}>
            <div className={styles.card}>
              <h1>Meus items favoritos do League of Legends</h1>
              <ol>
                <li>BORK</li>
                <li>Botas da Lucidez</li>
                <li>Liandrys</li>
              </ol>
            </div>
          </main>
          <footer className={styles.footer}>
           
          </footer>
        </div>
      );
}