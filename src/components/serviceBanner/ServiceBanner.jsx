import React from "react";
import ServiecBannerCard from "../BannerCard/ServiesBannerCard";
import { iconMap, iconMaps } from "@/common/const";

function ServiceBanner({ servicesData }) {
  const { titleData, services } = servicesData; // Destructure the JSON data
  const icons=iconMaps
  return (
    <div className="bg-black flex flex-col justify-center items-center p-10">
      <h3 className="mb-8 text-2xl font-extrabold leading-none tracking-tight text-white">
        {titleData}
      </h3>
      <ServiecBannerCard
        service={services.map((service) => ({
          ...service,
          icon: icons[service.icon], // Map the icon string to the actual component
        }))}
      />
    </div>
  );
}

export default ServiceBanner;
