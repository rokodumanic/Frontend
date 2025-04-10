import Image from "next/image";
import styles from "./review.module.css";
import data from "@/components/text/reviews.json";
import { useState, useRef, useEffect } from "react";

function Review() {
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);
  const reviewRef = useRef(null);
  const [reviewWidth, setReviewWidth] = useState(0);
  
  useEffect(() => {
    const calculateReviewWidth = () => {
      if (reviewRef.current) {
        // Get the width of the review container
        const width = reviewRef.current.offsetWidth;
        // Get the computed right margin (if any) and add it
        const marginRight = parseFloat(window.getComputedStyle(reviewRef.current).marginRight) || 0;
        setReviewWidth(width + marginRight);
      }
    };

    // Calculate on initial render and when the window resizes (for responsiveness)
    calculateReviewWidth();
    window.addEventListener('resize', calculateReviewWidth);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', calculateReviewWidth);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.carouselWrapper}>
        <h3 className="regular mb-8">Our guests loved it!</h3>
        <div className={styles.carouselContainer}
          style={{ transform: `translateX(-${active * reviewWidth}px)` }}
          >
          {data.map((eachReview, index) => (
            <div
            ref={index === 0 ? reviewRef : null}
              className={`${styles.reviewContainer}`}
              key={index}
            >
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
        <div className={styles.controls}>
            {Array.from({ length: data.length }, (_, index) => (
              <div
                onClick={()=>setActive(index)}
                className={`${styles.controlBtn} ${ active === index ? styles.controlAct : styles.controlPas}`}
                key={index}
              ></div>
            ))}
      </div>
    </div>
  );
}

export default Review;
