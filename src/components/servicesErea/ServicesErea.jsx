import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const ServiceArea = ({ locations, mapCenter, zoom, mapStyle }) => {
  return (
    <div className="service-area flex flex-col">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        {" "}
        {/* Replace with your API key */}
        <GoogleMap
          id="service-area-map"
          mapContainerStyle={mapStyle}
          center={mapCenter}
          zoom={zoom}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              label={location.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default ServiceArea;
