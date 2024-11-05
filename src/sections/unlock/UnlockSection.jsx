import { Button } from "@/components/ui/button";
import { forwardRef } from "react";
import LockTypeSection from "@/sections/lockType/LockTypeSection";

const UnlockSection = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="bg-[url('/src/assets/unlocking-door.jpeg')] bg-top bg-cover bg-no-repeat object-cover w-full flex flex-col justify-center items-center">
        <div id="backdrop" className="backdrop-brightness-50 w-full flex justify-center">
          <div className="max-w-[800px] px-12 py-10 flex flex-col items-center justify-center gap-8">
            <h1 className="text-titleClamp font-bold text-center text-white animate-fadeInDown delay-[600ms]">
              Australia’s Most Trusted Locksmith Company
            </h1>

            <p className="text-subtitleClamp text-white text-center animate-fadeInDown delay-[900ms]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, veniam nihil, nesciunt
              tempore amet fuga ea animi ducimus aut quas obcaecati voluptate quo nisi nam.
            </p>

            <Button
              variant="default"
              size="lg"
              className="px-12 uppercase animate-fadeInDown delay-[1200ms]"
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
      <LockTypeSection />
    </div>
  );
});

export default UnlockSection;
