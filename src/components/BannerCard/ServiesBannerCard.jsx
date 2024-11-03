import React from "react";
import { Button } from "@/components/ui/button";

function ServiceBannerCard({ service }) {
  return (
    <div className="flex  space-x-8 items-center  ">
      {service.map((item) => (
        <div key={item.id} className={item.class}>
          {item.icon}
          {item.text}
        </div>
      ))}
    </div>
  );
}

export default ServiceBannerCard;
