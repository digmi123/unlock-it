import {
  Reasons,
  FAQ,
  Pricing,
  ServiceIncludes,
  ServicePromises,
} from "@/sections";
import { UnlockSection } from "@/sections";
import { Carousel } from "@/sections/Carousel";
import { Footer } from "@/sections/footer";

const MainContainer = () => {
  return (
    <>
      <UnlockSection id="unlock" />
      <ServiceIncludes id="services" />
      <Carousel id="reviews" />
      <ServicePromises id="service-promises" />
      <Reasons id="contact" />
      <FAQ id="faq" />
      <Pricing id="pricing" />
      <Footer id="footer" />
    </>
  );
};

export default MainContainer;
