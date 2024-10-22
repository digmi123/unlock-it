import React from 'react'
import servicesData from "./../../dataJson/secendBanerData.json"; // Import the JSON file
import BaenfitsBanner from '@/components/benfitsBanner/BaenfitsBanner';
import BannerLayout from '@/Layouts/BannerLayout';
function BenefitBan() {

    return (
        <BannerLayout >
        <BaenfitsBanner  servicesData={servicesData}/>
        </BannerLayout>
      )
}

export default BenefitBan