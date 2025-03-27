import styles from "./OfferContainer.module.css";
import Image from "next/image";

function TickIcon({index, includes}){
    return(
        <Image
                src={
                  index < includes
                    ? "/icons/tickOn.png"
                    : "/icons/tickOff.png"
                }
                alt={
                  index < includes
                    ? "included"
                    : "not included"
                }
                width={16}
                height={16}
                className={styles.icon}
              />
    );
}

export default TickIcon;