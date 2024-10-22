import { Button } from "@/components/ui/button";
import LockTypeSection from "@/sections/lockType/LockTypeSection";
export default function UnlockSection() {
  return (
    <div id="unlock-section">
      <div className="bg-[url('/src/assets/unlocking-door.jpeg')] bg-top bg-cover bg-no-repeat object-cover w-full flex flex-col justify-center items-center">
        <div
          id="backdrop"
          className="backdrop-brightness-50 w-full flex justify-center"
        >
          <div className="max-w-[800px] px-12 py-10 flex flex-col items-center justify-center gap-8">
            <h1 className="text-titleClamp font-bold text-center text-white">
              Australia most trusted lockmith company
            </h1>
            <p className="text-subtitleClamp text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              veniam nihil, nesciunt tempore amet fuga ea animi ducimus aut quas
              obcaecati voluptate quo nisi nam.
            </p>

            <Button variant="default" size="lg" className="px-12 uppercase">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
      <LockTypeSection />
    </div>
  );
}
