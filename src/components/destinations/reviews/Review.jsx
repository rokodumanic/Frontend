import Image from "next/image";
import styles from "./review.module.css";
import data from "@/components/text/reviews.json";

function Review() {
  return (
    <div className={styles.container}>
      <div className={styles.carouselWrapper}>
        <h3 className="regular mb-8">Our guests loved it!</h3>
        <div className={styles.carouselContainer}>
          {data.map((eachReview, index) => (
            <div className={styles.reviewContainer}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={eachReview.src}
                  alt={eachReview.alt}
                  width={40}
                  height={40}
                />
              </div>
              <p className="body2 regular">{eachReview.username}</p>
              <h5 className="semibold mb-2">{eachReview.title}</h5>
              <p className="body1 regular">{eachReview.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
