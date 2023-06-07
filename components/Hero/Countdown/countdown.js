import styles from "./style.module.css"

export default function Countdown() {
    return(
        <div className={styles.countdown}>
            <div className={styles.block}>
                <h1>04</h1>
                <p>days</p>
            </div>
            <div className={styles.block}>
                <h1>12</h1>
                <p>hours</p>
            </div>
            <div className={styles.block}>
                <h1>15</h1>
                <p>minutes</p>
            </div>
            <div className={styles.block}>
                <h1>34</h1>
                <p>seconds</p>
            </div>
        </div>
    )
}