import promisesData from "../../dataJson/promisesData.json";
import { PromisesIcons } from "@/common/const";
import PromiseCard from "../BannerCard/PromiseCard";

export default function Promises() {
  return (
    <div className="bg-primary py-10 px-5 mt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className=" text-white text-center text-4xl font-bold mb-8">
          Our service promises:
        </h2>
        <div className="flex items-center justify-around gap-6 flex-wrap">
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
      </div>
    </div>
  );
}
