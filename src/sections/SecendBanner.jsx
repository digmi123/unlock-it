import React from 'react'
import servicesData from "./../dataJson/secendBanerData.json"; // Import the JSON file
import SecondBan from '@/components/bannerSecend/SecondBan';
import { Bolt, Navigation, Clock } from "lucide-react"; // Import necessary icons
import BannerLayout from '@/Layouts/BannerLayout';
function SecondBanner() {
    const iconMap = {
        Bolt: <Bolt className="mr-2 h-20 w-20 text-primary text-3xl" />,
        Navigation: <Navigation className="mr-2 h-20 w-20 text-primary text-3xl" />,
        Clock: <Clock className="mr-2 h-20 w-20 text-primary text-3xl" />,
      };
    return (
        <BannerLayout >
        <SecondBan iconMaps={iconMap} servicesData={servicesData}/>
        </BannerLayout>
      )
}

export default SecondBanner