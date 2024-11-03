import { iconMap } from "@/common/const";
import React from "react";

function BenefitCard({ services }) {
  return (
    <div className="flex grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div key={service.id} className="p-6 bg-gray-900 text-white rounded-lg">
          <h4 className="font-bold text-2xl mb-2">{service.title}</h4>
          <div className="flex items-center mb-3">
            {iconMap[service.icon]}
            <h3 className="text-xl font-semibold ml-2">{service.text}</h3>
          </div>
          <p className="text-lg">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BenefitCard;
