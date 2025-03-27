import styles from "./routeHigh.module.css";
import data from "../../text/routeHigh.json";
import GalleryCard from "./GalleryCard";


function RouteHigh(){
return(
    <div className={styles.routeContainer}>
        <h3 className="my-16 slim">Route Highlights</h3>
        <div className={`${styles.gallery} grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6`}>
        {data.map((feature, index) => (
          <GalleryCard key={index} {...feature} />
        ))}
        </div>
    </div>
);
}
export default RouteHigh;