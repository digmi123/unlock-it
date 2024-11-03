import React from 'react'
import PromiseCard from "../BannerCard/PromiseCard";
import promisesData from "../../dataJson/promisesData.json";
import { PromisesIcons } from "@/common/const";
function PromisesItem({}) {
  return (
    <div className="flex items-center justify-around gap-6 flex-wrap ">
    {promisesData.map((promise) => (
      <PromiseCard
        key={promise.id}
        title={promise.title}
        text={promise.text}
        description={promise.description}
        icon={PromisesIcons[promise.icon]}
      />
    ))}
  </div>
  )
}

export default PromisesItem