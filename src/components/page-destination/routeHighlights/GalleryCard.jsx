import Image from "next/image";
import styles from "./routeHigh.module.css";

const GalleryCard = ({ src, alt, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.imageContainer}`}>
        <Image
          className={styles.image}
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
        />
      </div>
      <div className={styles.content}>
        <h5 className="semibold">{title}</h5>
        <p className="body2 regular">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
