import Image from "next/image";
import data from "@/components/text/step3CTA.json";
import styles from "./step3.module.css";

function CallToAction() {
  return (
    <div className={`${styles.callToAction} greenVogue950`}>
      <div className={styles.imgContainer}>
        <div
          className={`absolute top-0 left-0 w-full h-32 pointer-events-none `}
          style={{
            background: `linear-gradient(to bottom, #ecfbff, transparent)`,
            zIndex: `100`,
          }}
        />
        <Image
          className={styles.image}
          src="/beattleCar.png"
          alt="beattle car"
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h3 className="semiboldP">{data.title}</h3>
        <p className="body1 regular">{data.description}</p>
        <button className={`${styles.button} button`} href={"/"}>{data.button}<span className={styles.spanArrow}> {">"} </span></button>
      </div>
    </div>
  );
}

export default CallToAction;
