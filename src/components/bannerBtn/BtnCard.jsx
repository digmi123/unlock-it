import React from 'react'
import { Button } from "@/components/ui/button";


function BtnCard({service}) {
  return (
    <div className="flex  space-x-8 items-center ">
    {service.map((item, index) => (
      <div  
        key={index}
        className={item.class}
      >
        {item.icon}
        {item.text}
      </div>
    ))}
  </div>
  )
}

export default BtnCard