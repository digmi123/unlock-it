// Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";

const Carousel = ({ data, CardComponent, settingsOverrides }) => {
  const defaultSettings = {
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

  const settings = { ...defaultSettings, ...settingsOverrides };

  return (
    <div className="max-w-7xl mx-auto p-4 relative">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-4">
            <CardComponent {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
