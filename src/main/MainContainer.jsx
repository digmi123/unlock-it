import {
  Reasons,
  FAQ,
  Help,
  Pricing,
  ServiceIncludes,
  ServicePromises,
  Service,
} from "@/sections";
import { UnlockSection } from "@/sections";
import { WhyUs } from "@/sections";
import { Carousel } from "@/sections/Carousel";
import { Footer } from "@/sections/footer";
import { Guarantee } from "@/sections/guarantee/garantee";
const MainContainer = () => {
  return (
    <div className="mt-[100px]"> {/* Adjust this value based on your navbar's height */}
      <UnlockSection id="unlock" />
      <ServiceIncludes id="services" />
      <Carousel id="carousel" />
      <ServicePromises id="service-promises" />
      <Reasons id="contact" />
      <FAQ id="faq" />
      <Pricing id="pricing" />
      <Footer id="footer" />
    </div>
  );
};

export default MainContainer;