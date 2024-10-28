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
import { Guarantee } from "@/sections/guarantee/garantee";
const MainContainer = () => {
  return (
    <>
      {/* <SideImageSection /> */}
      <UnlockSection />
      <ServiceIncludes />
      <Carousela />
      <Reasons />
      <ServicePromises />
      <Guarantee />
      <WhyUs />
      <Help />
      <FAQ />
      {/* <Service /> */}
      {/* <Pricing /> */}
    </>
  );
};

export default MainContainer;
