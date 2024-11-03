import BenefitCard from "../BannerCard/BanfitCard";
function BenefitsBanner({ servicesData }) {
  const { titleData, services } = servicesData;
  return (
    <div className="bg-black py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className=" text-white text-center text-4xl font-bold mb-8">{titleData}</h2>
        <BenefitCard services={services} />
      </div>
    </div>
  );
}

export default BenefitsBanner;
