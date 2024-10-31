import guaranteeImage from "../../assets/Gur.png";
import { CallUsButton } from "@/main/common";
function GuaranteeBanner() {
  return (
    <div className="py-10 px-5 flex justify-around items-center flex-wrap">
      <div className="mb-4 md:mb-0">
        <img
          className="h-80"
          src={guaranteeImage}
          alt="Guarantee Illustration"
        />
      </div>

      <div className="text-primary w-1/2 md:w-full text-start md:text-center p-6">
        <p className="text-2xl font-semibold pb-6">Our Guarantee</p>
        <h2 className="text-5xl font-bold pb-6">
          Top Quality Service & Cheapest Rate
        </h2>
        <CallUsButton />
      </div>
    </div>
  );
}

export default GuaranteeBanner;
