import CarouselWrapper from "@/components/carousel/CarouselWrapper";
import CarouselLayout from "@/Layouts/CarouselLayout";

function Carousel({id}) {
  return (
    <CarouselLayout>
      <CarouselWrapper id={id}/>
    </CarouselLayout>
  );
}

export default Carousel;
