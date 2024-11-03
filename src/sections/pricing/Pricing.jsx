import PricingCarouselCard from "./PricingCarouselCard";
import { PRICING_DATA } from "./pricingData";
import Carousel from "../../components/carousel/Carosuel";
const PricingSection = () => {
  return (
    <div className="w-full py-6">
      <Carousel data={PRICING_DATA} CardComponent={PricingCarouselCard} />
    </div>
  );
};

export default PricingSection;
