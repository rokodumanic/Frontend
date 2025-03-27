import Image from 'next/image';
import data from "@/components/text/welcomeImages.json";
import styles from "./imageExp.module.css"

function ImageExp() {
  console.log("DATTTTAAAAAAA", data[0]);
  return (
    <div className={styles.imageExp}>
      {data.map((image, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image
            src={image.src}
            alt={image.alt}
            width={200}
            height={300}
            className={styles.image}
          />
          <h4 className={`${styles.title} slim`}>{image.alt}</h4>
        </div>
      ))}
    </div>
  );
}

export default ImageExp;
