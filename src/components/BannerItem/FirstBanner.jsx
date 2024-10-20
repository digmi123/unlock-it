import React from 'react'
import BtnCard from '../bannerBtn/BtnCard'

function FirstBanner({iconMaps,servicesData}) {
    const { titleData, services } = servicesData; // Destructure the JSON data
  return (
    <div className="">
    <h3 className="mb-8 text-2xl font-extrabold leading-none tracking-tight text-white">
      {titleData}
    </h3>
    <BtnCard 
      service={services.map((service) => ({
        ...service,
        icon: iconMaps[service.icon], // Map the icon string to the actual component
      }))}
    />
  </div>
  )
}

export default FirstBanner