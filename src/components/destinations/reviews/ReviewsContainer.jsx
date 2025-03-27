import styles from "./reviewsContainer.module.css";
import ReviewsBG from "./ReviewsBackground";
import Review from "./Review";

function ReviewsContainer() {
  return(
    <div className={`${styles.reviewsContainer} greenVogue950`}>
    <ReviewsBG />
    <Review />
    </div>
  );
}

export default ReviewsContainer;
