import React from 'react'

function Secenditem({servicesData} ,{iconMaps}) {
  const { titleData, services } = servicesData; 
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      
          {services.map((service, index) => (
            <div key={index} className="p-4 bg-gray-900 text-white rounded-lg  pr-20">
              <h4 className="font-bold text-2xl">{service.title}</h4>
              <div className="flex  mb-3 items-center">
                {iconMaps[service.icon]} 
              <h3 className="text-3xl font-semibold ">{service.text}</h3>
              </div>
              
              <p className="text-2xl">{service.description}</p>
            </div>
          ))}
          
        </div>
  )
}

export default Secenditem