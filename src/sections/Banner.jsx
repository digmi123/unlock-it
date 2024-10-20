import React from 'react'
import BannerLayout from "@/Layouts/BannerLayout";
import BannerBtn from '@/components/banner/BannerBtn';
import { Lock, Layers, Key } from "lucide-react";
import servicesData from "./../dataJson/bannerData.json"; // Import the JSON file

function Banner() {
  const iconMap = {
    Lock: <Lock className="mr-2 h-6 w-6 text-primary text-2xl" />,
    Layers: <Layers className="mr-2 h-6 w-6 text-primary text-2xl" />,
    Key: <Key className="mr-2 h-6 w-6 text-primary text-2xl" />,
  };
  

  return (
    <BannerLayout >
    <BannerBtn iconMaps={iconMap} servicesData={servicesData}/>
    </BannerLayout>
  )
}

export default Banner