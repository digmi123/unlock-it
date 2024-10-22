import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import CarouselCon from "../carouselContent/CarouselCon";
export function CarouselPlugin({ dataCustom }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  // Helper function to render stars based on the rating

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
       <CarouselCon dataCustom={dataCustom} />
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
