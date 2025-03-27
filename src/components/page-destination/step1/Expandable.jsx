// components/Expandable.js
import { useState } from "react";
import styles from "./expandable.module.css";
import ProgressBar from "@/components/tools/ProgressBar";
import Image from "next/image";

const Expandable = ({ src, alt, title, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.border}>
    <div className={styles.expandableContainer}>
      <div className={styles.expandableHeader} onClick={toggleExpand}>
        <span className="subtitle1 semibold">{title}</span>
        <span
          className={`${styles.arrow} ${isExpanded ? "${styles.rotated}" : ""}`}
        >
          ▼
        </span>
      </div>
      {isExpanded && (
        <div className={styles.expandableContent}>
          
              {src && (
                <div className={styles.imageContainer}>
                  <Image src={src} alt={alt} fill className={styles.routeImage} />
                </div>
              )}

{/*               <div className={styles.listsContainer}>
 */}              <ul className={`space-y-3`}>
                 {(() => {
                   const listItems = [];
                   for (let i = 0; i < 5; i++) {
                     if (items[i]) {
                       listItems.push(
                         <li key={i} className={styles.listItem}>
                           <span className="body1 regular">{items[i].title}</span>
                           <ProgressBar percentage={items[i].percentage} barColor="#062949"/>
                         </li>
                       );
                     }
                   }
                   return listItems;
                 })()}
                </ul>
                <ul className={`space-y-3`}>
                 {(() => {
                   const listItems = [];
                   for (let i = 5; i < items.length; i++) {
                     if (items[i]) {
                       listItems.push(
                         <li key={i} className={styles.listItem}>
                           {items[i].title}
                           <ProgressBar percentage={items[i].percentage} barColor="#062949"/>
                         </li>
                       );
                     }
                   }
                   return listItems;
                 })()}
                </ul>
              </div>
          
      )}
    </div>
    </div>
  );
};

export default Expandable;
