import styles from './campeoes.module.css';

export default function items() {
    return (
        <div className={styles.page}>
          <main className={styles.main}>
            <div className={styles.card}>
              <h1>Meus campeoes favoritos do League of Legends</h1>
              <ol>
                <li>Yasuo</li>
                <li>Xerath</li>
                <li>Shaco</li>
              </ol>
            </div>
          </main>
          <footer className={styles.footer}>
           
          </footer>
        </div>
      );
}