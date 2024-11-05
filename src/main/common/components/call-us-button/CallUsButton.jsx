import { Button } from "@/components/ui/button";
import { PHONE_NUMBER } from "./consts";
import { cn } from "@/lib/utils";

const CallUsButton = ({ isDisplayText = false, className, isAutoWidth = false }) => {
  return (
    <a href={`tel:${PHONE_NUMBER}`} className={`w-auto ${isAutoWidth ? "md:auto" : "md:w-2/4"}`}>
      <Button
        className={cn(
          "w-full py-8 px-12 text-3xl rounded-full max-w-[520px]",
          "py-6 px-8 text-2xl",
          "md:py-4 md:px-6 md:text-xl md:max-w-full",
          className
        )}
      >
        {isDisplayText ? `Call Now ${PHONE_NUMBER}` : PHONE_NUMBER}
      </Button>
    </a>
  );
};

export default CallUsButton;
