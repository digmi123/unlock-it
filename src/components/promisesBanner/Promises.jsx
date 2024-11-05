import PromisesItem from "./PromisesItem";
import { forwardRef } from "react";
const Promises = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-primary py-10 px-5 mt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className=" text-white text-center text-4xl font-bold mb-8">Our service promises:</h2>
        <PromisesItem />
      </div>
    </div>
  );
});

export default Promises;
