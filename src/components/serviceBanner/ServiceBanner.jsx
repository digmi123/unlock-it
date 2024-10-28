import React from "react";
import ServiceBannerCard from "../BannerCard/ServiesBannerCard";
import { iconMaps } from "@/common/const";

function ServiceBanner({ servicesData }) {
  const { titleData, services } = servicesData;
  return (
    <div className="bg-black flex flex-col justify-center items-center p-10">
      <h3 className="mb-8 text-2xl font-extrabold leading-none tracking-tight text-white">
        {titleData}
      </h3>
      <ServiceBannerCard
        service={services.map((service) => ({
          ...service,
          icon: iconMaps[service.icon],
        }))}
      />
    </div>
  );
}

export default ServiceBanner;
