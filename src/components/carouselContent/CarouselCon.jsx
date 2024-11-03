import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel";
import { renderStars } from "./const";

function CarouselCon({dataCustom}) {
  return (
    <CarouselContent className=" ">
    {" "}
    {/* Adjust space between cards */}
    {dataCustom.map((item) => (
      <CarouselItem
        key={item.id}
        className="w-full xs-only:w-[100%] sm:w-[50%] md:w-[33.33%] lg:w-[40%] xl:w-[45%] 2xl:w-[30%] 3xl:w-[25%] 4xl:w-[20%] lg-only:w-[45%] p-2"
      >
        <div className="p-1">
          <Card className="flex flex-col h-full h-90">
            <CardHeader>
              {item.image && (
                <img
                  src={item.image}
                  alt={`${item.name}'s photo`}
                  className="h-24 w-24 rounded-full object-cover"
                />
              )}
              <span className="text-2xl font-semibold">{item.name}</span>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-3 space-y-5">
              <div className="text-yellow-500 text-2xl mt-2">
                {renderStars(item.rating)}
              </div>
              <p className="text-center">{item.feedback}</p>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  )
}

export default CarouselCon