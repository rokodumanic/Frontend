import Image from 'next/image';
import { useState } from 'react';

function Ratings() {
  const [rating, setRating] = useState([
    { iconSrc: '/star.png', iconAlt: 'Star Icon', score: 4.8, max: 5, numRev: 325 },
    { iconSrc: '/facebook.png', iconAlt: 'Facebook Icon', score: 4.8, max: 5, numRev: 325 },
    { iconSrc: '/google.png', iconAlt: 'Google Icon', score: 4.8, max: 5, numRev: 325 },
  ]);

  return (
    <div className="flex justify-evenly p-4">
      {rating.map((rating, index) => (
        <div key={index} className="flex items-center">
          <Image
            src={rating.iconSrc}
            alt={rating.iconAlt}
            height={42}
            width={42}
            className="mr-2"
          />
          <div className="flex flex-col ml-6">
            <h5 className="mb-1">
              {rating.score}/{rating.max}
            </h5>
            <span className="body2 regular">Based on {rating.numRev} reviews</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ratings;
