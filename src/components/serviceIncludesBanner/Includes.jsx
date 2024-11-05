import { IncludesIcons } from "@/common/const";
import serviceData from "../../dataJson/servicesData.json";
import ServiceIncludesCard from "@/components/BannerCard/ServiceIncludesCard";
import { forwardRef } from "react";

const Includes = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-primary flex flex-col justify-center items-center p-10 gap-5">
      <h2 className="text-4xl md:text-3xl	 font-bold text-foreground">Our services include:</h2>
      <div className="flex items-center justify-around gap-6 flex-wrap">
        {serviceData.map((service) => (
          <ServiceIncludesCard
            key={service.id}
            description={service.description}
            icon={IncludesIcons[service.icon]}
          />
        ))}
      </div>
    </div>
  );
});

export default Includes;
