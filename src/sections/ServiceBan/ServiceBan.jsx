import React from 'react'
import BannerLayout from "@/Layouts/BannerLayout";
import ServiceBanner from '@/components/serviceBanner/ServiceBanner';
import { Lock, Layers, Key } from "lucide-react";
import servicesData from "./../../dataJson/servicesData.json"; // Import the JSON file

function Banner() {
 
  
console.log(servicesData,"servis")
  return (
    <BannerLayout >
    <ServiceBanner  servicesData={servicesData}/>
    </BannerLayout>
  )
}

export default Banner