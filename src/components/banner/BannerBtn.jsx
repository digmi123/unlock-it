import FirstBanner from "../BannerCard/PromiseCard";

export default function BannerBtn({ iconMaps, servicesData }) {
  return (
    <div className="bg-primary flex justify-center items-center p-10">
      <FirstBanner servicesData={servicesData} iconMaps={iconMaps} />
    </div>
  );
}

