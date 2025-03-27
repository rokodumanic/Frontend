import BlockHeader from "../tools/BlockHeader";
import GalleryHeader from "../text/galleryHeader.json";
import Pictures from "../text/galleryPictures.json";
import Image from "next/image";
import GalleryInfo from "./GalleryInfo";
import styles from "./gallery.module.css";

function Gallery() {
  return (
    <div className={`${styles.gallery} greenVogue950`}>
      <BlockHeader
        blockname={GalleryHeader.blockname}
        title={GalleryHeader.title}
        description={GalleryHeader.description}
        bgcolor={GalleryHeader.bgcolor}
      />
      <div className={styles.galleryContainer}>
        {Pictures.map((pic, index) => (
          <div key={index} className={styles.squareContainer}>
            <Image
              src={pic.src}
              alt={pic.alt}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "10px" }}
            />
          </div>
        ))}
      </div>
      <GalleryInfo />
    </div>
  );
}

export default Gallery;
