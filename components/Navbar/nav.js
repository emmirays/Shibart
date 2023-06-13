"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.sticky}>
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
          <a href="#">
            <span>Buy $ART</span>{" "}
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="#f7fbfa"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 4L21 12L13 20"
                  stroke="#f7fbfa"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>
          <a href="#">
            WhitePaper{" "}
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="#555555"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 4L21 12L13 20"
                  stroke="#555555"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>
          <a href="#">
            FAQ{" "}
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="#555555"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 4L21 12L13 20"
                  stroke="#555555"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>
          <button>connect wallet</button>
        </div>
        <button
          className={`${styles.btn} ${active && styles.active}`}
          onClick={() => setActive(!active)}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      </nav>
    </div>
  );
}
