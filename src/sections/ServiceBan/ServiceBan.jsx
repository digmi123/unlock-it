import React from "react";
import BannerLayout from "@/Layouts/BannerLayout";
import ServiceBanner from "@/components/serviceBanner/ServiceBanner";
import servicesData from "./../../dataJson/servicesData.json";

function Banner() {
  return (
    <BannerLayout>
      <ServiceBanner servicesData={servicesData} />
    </BannerLayout>
  );
}

export default Banner;
