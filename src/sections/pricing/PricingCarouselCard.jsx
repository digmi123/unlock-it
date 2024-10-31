// PricingCarouselCard.js
import React from "react";

const PricingCarouselCard = ({ price, service }) => (
  <div className="p-6 border rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white via-gray-50 to-gray-100">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">{price}</h2>
    <p className="text-lg text-gray-700 font-medium">{service}</p>
    <div className="mt-4">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
        Get Started
      </button>
    </div>
  </div>
);

export default PricingCarouselCard;
