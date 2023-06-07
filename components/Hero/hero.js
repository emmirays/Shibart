import Image from "next/image";
import styles from "./style.module.css";
import Dropdown from "./Dropdown/dropdown";
import Stats from "./Stats/stats";
import Countdown from "./Countdown/countdown";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.img}>
          <Image
            className={styles.hero_img}
            src="/hero-img.png"
            width={800}
            height={709}
            quality={100}
            priority={true}
            alt=""
          />
        </div>
        <div className={styles.txt}>
          <Dropdown />
          <Stats
            bal="0"
            currentPrice="0.0000296"
            nextPrice="0.0000320"
            points="0"
          />
          <Countdown />
          <div className={styles.progress_con}>
            <p>raised so far: $5,900,241.93</p>
            <div className={styles.progress}></div>
          </div>
          {/* Amount */}
          <div className={styles.amount}>
            <div className={styles.block}>
              <div className={styles.head}>
                <p>You pay</p>
                <p className={styles.blk}>MAX</p>
              </div>
              <div className={styles.input}>
                <input placeholder="0" type="text" />
                <Image src="/usdt.svg" width={35} height={35} alt="" />
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.head}>
                <p>Points you receive</p>
              </div>
              <div className={styles.input}>
                <input placeholder="0" type="text" />
                <Image src="/usdt.svg" width={35} height={35} alt="" />
              </div>
            </div>
          </div>
          {/* Button */}
          <button className={styles.connect_wallet}>Connect wallet</button>
        </div>
      </div>
    </>
  );
}
