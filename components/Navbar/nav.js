import Image from "next/image";
import styles from "./style.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Image
        src="/logo-light.svg"
        width={206}
        height={52}
        quality={100}
        pr
        alt=""
      />
      <div className={styles.links}>
        <a href="#">buy $art</a>
        <a href="#">whitepaper</a>
        <a href="#">FAQ</a>
        <button>connect wallet</button>
      </div>
      <button className={styles.btn}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
    </nav>
  );
}
