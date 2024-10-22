import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {mapContainerStyle} from './const'
const ServiceArea = ({ locations, mapCenter, zoom }) => {
  

    return (
        <div className="service-area flex flex-col items-center ">
            <h2 className="text-5xl font-bold mb-4 text-center">Service Areas</h2>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> {/* Replace with your API key */}
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={mapCenter}
                    zoom={zoom}
                >
                    {locations.map(location => (
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