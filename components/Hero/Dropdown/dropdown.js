"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Dropdown.module.css";
import Dropdown5 from "./data";

export default function Dropdown({ active, isOpen }) {
  const { Listdata } = Dropdown5;
  const [preview, setPreview] = useState(Listdata);

  const handlepreview = (Listdata) => {
    setPreview(Listdata);
  }

  const [open, setOpen] = useState(isOpen);
  const handleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.dropDown}>
      <div className={styles.btn} onClick={handleDropdown}>
        <div className={styles.coin}>
          <Image src="/usdt.svg" width={35} quality={100} priority={true} height={35} alt="" />
          <div className={styles.txt}>
            <h3>USDT</h3>
            <p>erc20</p>
          </div>
        </div>
        <Image
          src="/chevron down.svg"
          className={!open ? styles.hClosed : ""}
          width={27}
          height={27}
          quality="100"
          alt=""
        />
      </div>
      <div className={`${styles.content} ${!open && styles.closed}`}>
        {Listdata.map((Listdatas, index) => [
          <div className={`${styles.option} ${active && styles.active}`} onClick={handlepreview}>
            <div className={styles.coin}>
              <Image src={Listdatas.image} width={35} height={35} alt="" />
              <div className={styles.txt}>
                <h3>{Listdatas.name}</h3>
                <p>{Listdatas.subName}</p>
              </div>
            </div>
          </div>,
        ])}
      </div>
    </div>
  );
}
