import BannerLayout from "@/Layouts/BannerLayout";
import Includes from "@/components/serviceIncludesBanner/Includes";
import { forwardRef } from "react";
const ServiceIncludes = forwardRef((props, ref) => {
  return (
    <BannerLayout>
      <Includes ref={ref} />
    </BannerLayout>
  );
});

export default ServiceIncludes;
