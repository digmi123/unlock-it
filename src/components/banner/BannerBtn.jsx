import React from "react";
import BtnCard from "../bannerBtn/BtnCard";
import FirstBanner from "../BannerItem/FirstBanner";



function BannerBtn({iconMaps,servicesData}) {
 

  return (
    <div className="bg-primary flex justify-center items-center p-10">
    <FirstBanner servicesData={servicesData} iconMaps={iconMaps}/>
    </div>
  );
}

export default BannerBtn;