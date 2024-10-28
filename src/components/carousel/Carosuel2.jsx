import React from "react";
import Slider from "react-slick";
import { customerData } from "./const";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard2";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-4 relative  ">
      <Slider {...settings}>
        {customerData.map((customer) => (
          <div key={customer.id} className="p-4 flex gap-4">
            <CarouselCard
              name={customer.name}
              date={customer.date}
              feedback={customer.feedback}
              image={customer.image}
              rating={customer.rating}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
