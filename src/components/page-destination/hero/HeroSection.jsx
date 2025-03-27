import styles from "./heroSection.module.css";
import Image from "next/image";
import InfoCard from "./InfoCard";
import Gradient from "@/components/tools/Gradiant";

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.bgImg}>
        <div className={styles.imageContainer}>
          <Image
            src="/islandCover.png"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.textOverlay}>
          <p className={styles.routeType}>Party route</p>
          <h1 className={styles.title}>The best stories are <br/> to be told</h1>
        </div>
        <Gradient color={"#213553"} height={"h-96"} />
      </div>
      <div className={styles.routeInfo}>
        <div className={`${styles.descriptionContainer} `}>
          <p className={`${styles.description} subtitle1 xslim`}>
            From mountains and canyons to fjord-like bays, nostalgic old towns
            to most stunning beaches. Get to now Croatia's twin sister -
            Montenegro.
          </p>
          <p className={`${styles.description} subtitle1 xslim`}>
            Walk the medieval streets of Kotor, dine the most amazing seafood in
            the Fisherman's village. Feel like a millionaire in Porto
            Montenegro, the most luxurious marina in this part of the World.
            Visit nostalgic old towns Perast, Risan and Herceg Novi. Hike
            mountains in Kotor. Get wild in Budva and Tivat. Relax in freshly
            opened chic Lazure marina.
          </p>
        </div>
        <InfoCard />
      </div>
    </div>
  );
}

export default HeroSection;
