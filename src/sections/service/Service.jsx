import ServiceArea from "../../components/servicesErea/ServicesErea"; // Import the ServiceArea component
import ServiceEreaLayout from "@/Layouts/ServiceEreaLayout";
import { serviceAreas, mapCenter, zoomLevel } from "./const";
// Example service area locations

const AreaService = (style) => {
  return (
    <>
      <h2 className="font-bold text-3xl">Service Areas</h2>

      <ServiceEreaLayout>
        <ServiceArea
          mapStyle={style}
          locations={serviceAreas}
          mapCenter={mapCenter}
          zoom={zoomLevel}
        />
        {/* Add ServiceArea component here */}
      </ServiceEreaLayout>
    </>
  );
};

export default AreaService;
