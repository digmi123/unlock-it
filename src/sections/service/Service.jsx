import React from 'react';
import ServiceArea from '../../components/servicesErea/ServicesErea'; // Import the ServiceArea component
import ServiceEreaLayout from '@/Layouts/ServiceEreaLayout';
import {serviceAreas,mapCenter,zoomLevel} from './const'
// Example service area locations


const App = () => {
    
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