import styles from "./style.module.css";
import Image from "next/image";
import images from "./images";

export default function ArtGallery() {
  const { imagePath } = images;
  return (
    <div className={styles.gallery}>
      <div className={styles.head}>
        <div className={styles.top}>
          <h1>Gallery.</h1>
          <p>Shiba art you'll love</p>
        </div>
        <div className={styles.input}>
          <input placeholder="Shiba inu wearing sunglasses" type="text" />
          <button className={styles.btn}>generate</button>
          <button className={styles.settings}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 14.5C13.6569 14.5 15 13.1569 15 11.5C15 9.84315 13.6569 8.5 12 8.5C10.3431 8.5 9 9.84315 9 11.5C9 13.1569 10.3431 14.5 12 14.5Z"
                stroke="#3C2C2D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.5068 16.25C19.7218 17.58 18.8387 17.96 17.1706 17.39C16.0912 17.01 14.8156 17.675 14.6193 18.815C14.3249 20.525 13.5399 21 11.9699 21C10.3999 21 9.61492 20.43 9.32055 18.815C9.1243 17.675 7.84867 17.01 6.76929 17.39C5.10115 17.96 4.21803 17.58 3.43302 16.25C2.64802 15.015 2.9424 13.97 4.21803 12.925C5.10115 12.165 5.00303 10.835 4.1199 10.17C2.84427 8.935 2.74615 8.08 3.53115 6.75C4.31615 5.515 5.29741 5.23 6.86741 5.705C7.94679 6.085 9.1243 5.325 9.32055 4.28C9.71305 2.57 10.3999 2 12.0681 2C13.5399 2 14.3249 2.76 14.6193 4.375C14.8156 5.42 16.0912 6.085 17.1706 5.705C18.8387 5.04 19.7218 5.42 20.5068 6.75C21.2918 8.08 21.1937 8.935 19.82 10.075C18.9368 10.835 18.9368 12.165 19.82 12.925C21.1937 14.065 21.2918 14.92 20.5068 16.25Z"
                stroke="#3C2C2D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.pic_grid}>
        {imagePath.map((path, index) => [
          <Image
          className={styles.pic}
            src={`/gallery images/${path.image}.png`}
            width={330}
            height={330}
            quality={100}
            priority={true}
            alt=""
          />,
        ])}
      </div>
      <button className={styles.explore}>explorer more<span>109</span></button>
    </div>
  );
}
