import React from 'react';
import Image from "next/image";
import data from '../text/tours.json';
import ProgressBar from '../tools/ProgressBar';
import styles from "./tourItem.module.css";

function TourBox() {
  return (
    <div className={styles.tourbox}>
      {data.map((tour) => (
        <div key={tour.id} className={styles.touritem}>
        <div className={styles.imageContainer}>
          <Image
            src={tour.src}
            alt={tour.alt}
            width={1098}
            height={404}
            className={styles.image}
          />
          </div>
          <div className="absolute bottom-12 left-14 text-white">
          <p className='pb-1 subtitle2 regular'>From ${tour.price}/person</p>
          <h4 className=" text-white semibold">{tour.name} &gt;</h4>
          </div>
          <div className="absolute bottom-14 right-14 text-white">
          <div className={styles.progressContainer}>
          <p className='body1 regular pb-1 mr-5'>Party </p>
          <ProgressBar percentage={tour.party}/>
          </div>
          <div className={styles.progressContainer}>
          <p className='body1 regular pb-1 mr-5'>Adventure </p>
          <ProgressBar percentage={tour.adventure}/>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourBox;