import { Button } from "@/components/ui/button";
import { PHONE_NUMBER } from "./consts";

const CallUsButton = ({ isDisplayText = false }) => {
  return (
    <a href={`tel:${PHONE_NUMBER}`} className="w-full">
      <Button className="w-full py-8 px-12 text-3xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-full max-w-[520px]">
        {isDisplayText ? `Call Now ${PHONE_NUMBER}` : PHONE_NUMBER}
      </Button>
    </a>
  );
};

export default CallUsButton;
