import styles from "./OfferContainer.module.css";
import data from "../text/offer.json";
import Image from "next/image";
import TickIcon from "./tickIcon";

function OfferContainer() {
  return (
    <div className={styles.offer}>
      {data.map((offer, index) => (
        <div
          className={`${styles.square} ${styles.offerContainer} ${offer.bgcolor}`}
        >
          <div key={index} className={styles.featureItem}>
            <h3 className={`${styles.title} regular`}>{offer.title}</h3>
            {offer.price === "" ? null : (
              <span className="bg-[#062949] text-white body1 regular rounded-lg px-2 py-1">
                from {offer.price}&euro;
              </span>
            )}
          </div>

          <div className={styles.benefitsContainer}>
          {offer.offers.map((eachOffer, i) => (
            <p className={`${styles.benefits} body1 regular`}>
              <TickIcon index={i} includes={offer.includes} />
              {eachOffer}
            </p>
          ))}
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default OfferContainer;
