import styles from "./reviewsContainer.module.css";
import Image from "next/image";

function ReviewsBG(){
    return (
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
    );
}

export default ReviewsBG;