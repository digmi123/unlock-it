import BannerLayout from "@/Layouts/BannerLayout";
import Includes from "@/components/serviceIncludesBanner/Includes";

export default function ServiceIncludes({id}) {
  return (
    <BannerLayout>
      <Includes id={id}/>
    </BannerLayout>
  );
}
