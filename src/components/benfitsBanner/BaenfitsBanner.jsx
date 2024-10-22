import BanfitCard from "../BannerCard/BanfitCard";

function BenefitsBanner({ servicesData }) {
    const { titleData, services } = servicesData; // Destructure data from JSON
  
    return (
      <div className="bg-black py-10 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className=" text-white text-center text-4xl font-bold mb-8">{titleData}</h2>
          <BanfitCard services={services} />
        </div>
      </div>
    );
  }
  
  export default BenefitsBanner;