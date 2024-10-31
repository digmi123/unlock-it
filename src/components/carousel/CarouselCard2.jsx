import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN button

const CarouselReviewersCard = ({ name, date, feedback, image, rating }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-h-[500px] h-[500px] ">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="h-[340px] flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
          <p className="mt-2 text-gray-700">{feedback}</p>
          <div className="flex items-center mt-4">
            <span className="text-yellow-400">{"★".repeat(rating) + "☆".repeat(5 - rating)}</span>
          </div>
        </div>
        <Button variant="ghost" className="mt-4 w-full text-center">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default CarouselReviewersCard;
