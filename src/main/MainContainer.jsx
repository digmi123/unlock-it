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
import Carousela from "@/sections/carousela/Carousela";
import { Footer } from "@/sections/footer";
import { Guarantee } from "@/sections/guarantee/garantee";
const MainContainer = () => {
  return (
    <>
      {/* <SideImageSection /> */}
      <UnlockSection />
      <ServiceIncludes />
      <Carousela />
      <ServicePromises />
      <Reasons />
      {/* <Guarantee /> */}
      {/* <WhyUs /> */}
      {/* <Help /> */}
      <FAQ />
      {/* <Service /> */}
      <Pricing />
      {/* <Pricing /> */}
      <Footer />
    </>
  );
};

export default MainContainer;
