import BlockHeader from "./tools/BlockHeader";
import destinationHeader from "./text/destinationsHeader.json";
import TourBox from "./destinations/TourBox";
import Gallery from "./destinations/Gallery";
import ReviewsContainer from "./destinations/reviews/ReviewsContainer";

function Destinations() {
  return (
    <div className="bg-[#ecfbff]">
      <BlockHeader
        blockname={destinationHeader.blockname}
        title={destinationHeader.title}
        description={destinationHeader.description}
        bgcolor={destinationHeader.bgcolor}
      />
      <TourBox />
      <ReviewsContainer />
      <Gallery />
    </div>
  );
}

export default Destinations;
