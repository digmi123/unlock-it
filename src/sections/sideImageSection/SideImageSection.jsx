import SideImage from "@/components/SideImage";
import { Button } from "@/components/ui/button";
import door_lock from "@/assets/doorLock.jpg";

export default function SideImageSection() {
  return (
    <div className="flex flex-col gap-8 p-10">
      <SideImage image={door_lock}>
        <div className="flex flex-col items-center gap-4 w-2/4">
          <h1 className="text-titleClamp font-bold text-center text-primary">
            Australia most trusted lockmith company
          </h1>
          <p className="text-subtitleClamp text-primary text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            veniam nihil, nesciunt tempore amet fuga ea animi ducimus aut quas
            obcaecati voluptate quo nisi nam.
          </p>
          <Button variant="default" size="lg" className="px-12 uppercase">
            Contact Us Now
          </Button>
        </div>
      </SideImage>

      <SideImage image={door_lock} ltr={true}>
        <div className="flex flex-col items-center gap-4 w-2/4">
          <h1 className="text-titleClamp font-bold text-center text-primary">
            Australia most trusted lockmith company
          </h1>
          <p className="text-subtitleClamp text-primary text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            veniam nihil, nesciunt tempore amet fuga ea animi ducimus aut quas
            obcaecati voluptate quo nisi nam.
          </p>
          <Button variant="default" size="lg" className="px-12 uppercase">
            Contact Us Now
          </Button>
        </div>
      </SideImage>
    </div>
  );
}
