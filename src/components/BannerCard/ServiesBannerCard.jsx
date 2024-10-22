import React from 'react'
import { Button } from "@/components/ui/button";

function ServiecBannerCard({service}) {
  console.log(service,"soli")
  return (
    <div className="flex  space-x-8 items-center ">
    {service.map((item, index) => (
      <div  
        key={item.id}
        className={item.class}
      >
        {item.icon}
        {item.text}
      </div>
    ))}
  </div>
  )
}

export default ServiecBannerCard