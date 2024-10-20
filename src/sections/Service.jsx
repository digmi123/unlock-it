import React from 'react';
import ServiceArea from './../components/servicesErea/ServicesErea'; // Import the ServiceArea component
import ServiceEreaLayout from '@/Layouts/ServiceEreaLayout';

// Example service area locations
const serviceAreas = [
    { id: 1, name: "Downtown", position: { lat: 34.0522, lng: -118.2437 } }, // Los Angeles
    { id: 2, name: "Uptown", position: { lat: 34.0622, lng: -118.2537 } },  // Los Angeles
    { id: 3, name: "Midtown", position: { lat: 34.0722, lng: -118.2637 } }, // Los Angeles
];

const App = () => {
    const mapCenter = { lat: 34.0522, lng: -118.2437 }; // Center on Los Angeles
    const zoomLevel = 12; // Default zoom level

    return (
        <div>
           
           <ServiceEreaLayout>
              <ServiceArea
                locations={serviceAreas} 
                mapCenter={mapCenter} 
                zoom={zoomLevel} 
            /> {/* Add ServiceArea component here */}
           </ServiceEreaLayout>

        </div>
    );
};

export default App;