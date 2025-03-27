import ProgressBar from "../tools/ProgressBar";
import Image from "next/image";
import styles from "./flexBenefits.module.css";

function FlexBenefits({data}) {
  return (
    <div className={styles.flexBContainer}>
      {data.map((benefit, index) => (
        <div className={`${styles.flexBenefit} ${benefit.bgcolor}`}>
        <div className={styles.imgContainer}>
           <Image  src={benefit.src} alt="money icon" width={33} height={33}/>
           </div>
           <h4 className={`${benefit.color} semibold my-0`}>{benefit.title}</h4>
          <p className={`${benefit.color} body1 regular`}>{benefit.description}</p>
          <div className={styles.flexProgressBar}>
          <ProgressBar percentage={benefit.percentage} barColor="#1dc072" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlexBenefits;
