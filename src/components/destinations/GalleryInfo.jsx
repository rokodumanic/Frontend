import Image from "next/image";
import data from "../text/galleryInfo.json";
import styles from "./gallery.module.css";

function GalleryInfo() {
  return (
    <div className={styles.galleryInfo}>
      {data.map((feature, index) => (
        <div key={index} className={`${styles.infoContainer}`}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={feature.src}
              alt={feature.alt}
              width={26}
              height={26}
            />
            <h5 className="semibold">{feature.title}</h5>
          </div>
          <p style={{ marginTop: "10px" }}>{`${feature.description} body1 regular`}</p>
        </div>
      ))}
    </div>
  );
}

export default GalleryInfo;
