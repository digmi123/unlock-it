import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";

export default function whyUs() {
  return (
    <SectionWrapper className="bg-primary flex items-center justify-center">
      <div className="bg-white max-w-[800px] px-12 py-10 flex flex-col items-center justify-center gap-8 rounded-md">
        <h1 className="text-titleClamp font-bold text-center text-primary">
          Australia most trusted lockmith company
        </h1>
        <p className="text-subtitleClamp text-primary text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, veniam
          nihil, nesciunt tempore amet fuga ea animi ducimus aut quas obcaecati
          voluptate quo nisi nam.
        </p>

        <Button variant="default" size="lg" className="px-12 uppercase">
          Contact Us Now
        </Button>
      </div>
    </SectionWrapper>
  );
}
