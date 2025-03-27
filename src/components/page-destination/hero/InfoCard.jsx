import Image from "next/image";
import styles from "./infoCard.module.css";

function InfoCard() {
  return (
    <div className={styles.card}>
      <h5 className="semibold">Dubrovnik party route</h5>
      <div className={styles.rating}>
        <Image
          src="/icons/star-icon.png"
          alt="Review Icon"
          width={20}
          height={20}
        />

        <span className="body1 regular">
          
          <span className={`${styles.ratingValue} subtitle1 semibold`}>
            4.9
          </span>{" "}
          rating of 461 reviews
        </span>
      </div>
      <div className={`${styles.detailsContainer} body1 regular`}>
        <div className={styles.details}>
          <Image
            src="/icons/sailboat-icon.png"
            alt="My Icon"
            width={30}
            height={10}
          />
          <p className={styles.detail}>Party vibe</p>
        </div>
        <div className={styles.details}>
          <Image
            src="/icons/group-icon.png"
            alt="My Icon"
            width={30}
            height={10}
          />
          <p className={styles.detail}>Up to 40 people</p>
        </div>
        <div className={styles.details}>
          <Image
            src="/icons/age-range.png"
            alt="My Icon"
            width={30}
            height={10}
          />
          <p className={styles.detail}>20-40 age range</p>
        </div>
        <div className={styles.details}>
          <Image
            src="/icons/wifi-icon.png"
            alt="My Icon"
            width={30}
            height={10}
          />
          <p className={styles.detail}>Free WiFi</p>
        </div>
        <div className={styles.details}>
          <Image
            src="/icons/calendar-icon.png"
            alt="My Icon"
            width={30}
            height={10}
          />
          <p className={styles.detail}>July 1 August</p>
        </div>
      </div>
      <div className={styles.bookNowContainer}>
        <button className={`${styles.bookNow} button regular`}>BOOK NOW</button>
        <p className={`${styles.bookNowText} body2 xslim`}>Prices from €1136 per person</p>
      </div>
    </div>
  );
}

export default InfoCard;
