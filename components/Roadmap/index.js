import styles from "./style.module.css";
import Image from "next/image";

export default function Roadmap() {
  return (
    <div className={styles.roadmap}>
      <div className={styles.image}>
        <div className={styles.txt}>
          <h1>Roadmap</h1>
          <img src="./red_arrow.svg" alt="" />
        </div>
        <Image
          className={styles.dog}
          src="/roadmap_img.png"
          width={800}
          height={1408}
          quality={100}
          priority={true}
          alt=""
        />
      </div>
      <div className={styles.content}>
        <div className={styles.block}>
          <div className={styles.head}>
            <h1>Already Done</h1>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16"
                r="12"
                stroke="#686A6C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6667 16H21.3334"
                stroke="#686A6C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <ul className={styles.list}>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
                AI art generator - operational and connected to external GPUs
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              Working platform
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              User profiles
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              Gallery
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              Rating system
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              Comments, direct messaging, and comments system
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <div className={styles.head}>
            <h1>Q3, 2023</h1>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16"
                r="12"
                stroke="#686A6C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6667 16H21.3334"
                stroke="#686A6C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <ul className={styles.list}>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              TGE
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              CEX listings (Aiming for Binance)
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              Chatbot Integrations
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              Staking platform live
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              Platform launch
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              Mint NFT Collections
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              Continue to scale infrastructure
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <div className={styles.head}>
            <h1>Q4, 2024</h1>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16"
                r="12"
                stroke="#686A6C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6667 16H21.3334"
                stroke="#686A6C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <ul className={styles.list}>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              Client-side software to harness distributed GPU power
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              Third party wallet for Miners
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              50,000 holders
              </span>
            </li>
            <li>
              <Image src="/point.svg" width={24} height={24} alt="" />
              <span>
              New roadmap announced
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
