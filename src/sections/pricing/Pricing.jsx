import PricingCarouselCard from "./PricingCarouselCard";
import { PRICING_DATA } from "./pricingData";
import Carousel from "../../components/carousel/Carosuel";
import { forwardRef } from "react";
const PricingSection = forwardRef((props, ref) => {
  return (
    <div className="w-full py-6" ref={ref}>
      <Carousel data={PRICING_DATA} CardComponent={PricingCarouselCard} />
    </div>
  );
});

export default PricingSection;
