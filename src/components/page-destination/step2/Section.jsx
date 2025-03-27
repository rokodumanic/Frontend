import Image from "next/image";
import styles from "./step2.module.css";

function Section({
  index,
  src,
  alt,
  title,
  description,
  button,
  buttonUrl,
  optionTitle,
  optionDescription,
}) {
  return (
    <div className="greenVogue950">
      {index % 2 === 0 ? (
        <div className={styles.sectionContent}>
          <div>
            <div className={styles.imgContainer}>
              <Image className={styles.image} src={src} alt={alt} fill />
            </div>
            <div className={styles.optionContainer}>
              <p className="subtitle1 semiboldP">{optionTitle}</p>
              <p>{optionDescription}</p>
            </div>
          </div>
          <div className={styles.textContainer}>
            <h3 className="semiboldP">{title}</h3>
            <p className="body1 slim">{description}</p>
            <button className={`${styles.button} button`} href={buttonUrl}>{button} <span className={styles.spanArrow}> {">"} </span></button>
          </div>
        </div>
      ) : (
        <div className={styles.sectionContent}>
          <div className={styles.textContainer}>
            <h3 className="semiboldP">{title}</h3>
            <p className="body1 slim">{description}</p>
            <button className={`${styles.button} button`} href={buttonUrl}>{button} <span className={styles.spanArrow}> {">"} </span></button>
          </div>
          <div>
            <div className={styles.imgContainer}>
              <Image className={styles.image} src={src} alt={alt} fill />
            </div>
            <div className={styles.optionContainer}>
              <p className="subtitle1 semiboldP">{optionTitle}</p>
              <p>{optionDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section;
