import styles from "./style.module.css";
import Marquee from "react-fast-marquee";
import React from "react";
import Image from "next/image";
import images from "./images";

export default function Carousel() {
  const { imagePath } = images;
  return (
    <Marquee loop={0} pauseOnHover={false}>
      {imagePath.map((path, index) => [
        <div className={styles.img}>
          <Image
            src={`/generate to earn section images/${path.image}.png`}
            width={330}
            height={330}
            alt=""
            quality={100}
          />
        </div>,
      ])}
    </Marquee>
  );
}
