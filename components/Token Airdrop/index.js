import Card from "./card";
import styles from "./style.module.css";

export default function Airdrop() {
  return (
    <div className={styles.airdrop}>
      <div className={styles.head}>
        <h1><span>$ART</span> 50 billion token airdrop</h1>
        <p>
          Help us reach our presale target and receive a huge $ART airdrop! The
          reward will be based on your cumulative referral amount. Follow these
          steps to join
        </p>
      </div>
      <div className={styles.cards}>
        <Card card="1" tittle="Purchase $ART in presale" desc="Purchasing any amount will generate a referral code." />
        <Card card="2" tittle="Share your referral code" desc="All sales made from your referral code are tracked." boxshadow="shadow" />
        <Card card="3" tittle="Start earning $ART airdrop" desc="Receive an airdrop on launch!" />
      </div>
      <button className={styles.buynow}>buy $ART now</button>
    </div>
  );
}
