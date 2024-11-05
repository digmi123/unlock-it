import CarouselWrapper from "@/components/carousel/CarouselWrapper";
import CarouselLayout from "@/Layouts/CarouselLayout";
import { forwardRef } from "react";
const Carousel = forwardRef((props, ref) => {
  return (
    <CarouselLayout>
      <CarouselWrapper ref={ref} />
    </CarouselLayout>
  );
});

export default Carousel;
