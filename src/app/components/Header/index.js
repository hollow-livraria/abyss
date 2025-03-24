import Image from "next/image";
import Logo from "/public/lol.png";
import styles from "./Header.module.css";

import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <Link href={"/"}>
          <Image src={Logo} alt="logo" className={styles.logotipo} />
        </Link>
        <ol>
          <li>
            <Link href="/pagina/items" className={styles.link}>
              Items
            </Link>
          </li>
          <li>
            <Link href="/pagina/campeoes" className={styles.link}>
              Campeões
            </Link>
          </li>
          <li>Lore</li>
          <li>Aram</li>
        </ol>
      </header>
    </div>
  );
}
