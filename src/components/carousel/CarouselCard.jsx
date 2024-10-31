import CarouselReviewersCard from "./CarouselCard2";
import { customerData } from "./const";
import { CallUsButton } from "@/main/common";
// Sample data
import Carousel from "./Carosuel2";
const CarouselCard = () => {
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <h2 className="text-center md:text-4xl text-6xl font-bold mb-8 mt-8">
        Top Rated in Melbourne, Over 23,000+ Happy Clients.
      </h2>

      <div className="w-full">
        <Carousel
          data={customerData}
          CardComponent={CarouselReviewersCard}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-center text-4xl font-bold mb-8 mt-8">
          Join the Happy Clients List. Call Now for a Free Estimate
        </h3>
        <CallUsButton />
      </div>
    </div>
  );
};

export default CarouselCard;
