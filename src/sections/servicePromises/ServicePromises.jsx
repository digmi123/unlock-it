import Promises from "@/components/promisesBanner/Promises";
import BannerLayout from "@/Layouts/BannerLayout";
export default function ServicePromises({ref}) {
  return (
    <BannerLayout>
      <Promises ref={ref}/>
    </BannerLayout>
  );
}
