"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
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
      <div className={`${styles.links} ${active && styles.active}`}>
        <a href="#">Buy $ART</a>
        <a href="#">WhitePaper</a>
        <a href="#">FAQ</a>
        <button>connect wallet</button>
      </div>
      <button className={styles.btn} onClick={() => setActive(!active)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
    </nav>
  );
}
