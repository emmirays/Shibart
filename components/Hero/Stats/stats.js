import styles from "./Stats.module.css";

export default function Stats({bal, currentPrice, nextPrice, points}) {
  return (
    <div className={styles.stats}>
      <div className={styles.block}>
        <p className={styles.type}>USDT Balance</p>
        <p className={styles.value}>{bal}</p>
      </div>
      <div className={styles.block}>
        <p className={styles.type}>Current Price</p>
        <p className={styles.value}>${currentPrice}</p>
      </div>
      <div className={styles.block}>
        <p className={styles.type}>Next Price</p>
        <p className={styles.value}>${nextPrice}</p>
      </div>
      <div className={styles.block}>
        <p className={styles.type}>Your Points</p>
        <p className={styles.value}>{points}</p>
      </div>
    </div>
  );
}
