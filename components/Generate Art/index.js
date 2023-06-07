import Carousel from "./Carousel";
import styles from "./style.module.css";

export default function GenerateArts() {
  return (
    <div className={styles.arts}>
      <div className={styles.head}>
        <h1>ShibArt - Generate To Earn</h1>
        <p>
          We are revolutionizing the world of digital art with the power of
          stable diffusion & blockchain
        </p>
      </div>
      <Carousel />
      <button className={styles.btn}>STart creating</button>
    </div>
  );
}
