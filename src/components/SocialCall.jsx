import Image from "next/image";
import styles from "./socialCall.module.css";

/* Nisam uspio exportati "ciste" slike */

function SocialCall() {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.imagesContainer}>
          <Image className={`${styles.image} ${styles.left}`} src={"/socialCall/left.png"} alt="People on deck" width={336} height={474} />
          <Image className={`${styles.image} ${styles.center}`} src={"/socialCall/center.png"} alt="People on deck" width={463} height={347}/>
          <Image className={`${styles.image} ${styles.right}`} src={"/socialCall/right.png"} alt="Hand heart" width={324} height={351}/>
      </div>
      <div className={styles.textContainer}>
        <h3 className="semibold">Check Charterag off your bucket list</h3>
        <p className="body1 regular">Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet</p>
        <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.explore} regular`}>EXPLORE</button>
        <button className={`${styles.button} ${styles.follow} regular`}>FOLLOW US <Image src={"/socialCall/instagramIcon.png"} alt="Instagram icon" width={24} height={24}/></button>
      </div>
      </div>
    </div>
  );
}

export default SocialCall;
