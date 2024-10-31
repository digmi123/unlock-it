import PricingCarouselCard from "./PricingCarouselCard";
import { PRICING_DATA } from "./pricingData";
import Carousel from "@/components/carousel/Carosuel2";
const PricingSection = () => {
  return (
    <div className="w-full">
      <Carousel data={PRICING_DATA} CardComponent={PricingCarouselCard} />
    </div>
  );
};

export default PricingSection;
