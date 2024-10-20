import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function CarouselPlugin({ dataCustom }) {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
    // Helper function to render stars based on the rating
    const renderStars = (rating) => {
      const totalStars = 5; // Assuming the rating is out of 5
      let stars = '';
      for (let i = 1; i <= totalStars; i++) {
        stars += i <= rating ? '★' : '☆'; // Full star for rating, empty for the rest
      }
      return stars;
    };
  

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex space-x-0">
          {dataCustom.map((item, index) => (
          <CarouselItem
          key={index}
          className="flex-shrink-0 w-full sm:w-[50%] md:w-[33.33%] lg:w-[20%] p-2" // Adjust widths as needed
        >
          <div className="p-1">
            <Card>
                <CardHeader>
                {item.image && (
                  <img
                    src={item.image}
                    alt={`${item.name}'s photo`}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                )}
                <span className="text-2xl font-semibold">{item.name}</span>
                </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-3 space-y-5">
              
              <p className="text-yellow-500 text-2xl mt-2">{renderStars(item.rating)}</p> {/* Display stars */}
                <p className="text-center">{item.feedback}</p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}