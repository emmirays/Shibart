import styles from "./style.module.css";

export default function Card({ card, tittle, desc, boxshadow }) {
  return (
    <div className={`${styles.card} ${boxshadow}`}>
      <div className={styles.head}>
        <h1 className={styles.num}>{card}</h1>
        <h1 className={styles.tittle}>{tittle}</h1>
      </div>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}
