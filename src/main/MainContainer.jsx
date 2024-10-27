import {
  Reasons,
  FAQ,
  Help,
  Pricing,
  ServiceBan,
  BenefitBan,
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
      <ServiceBan />
      <Carousela />
      <WhyUs />
      <BenefitBan />
      <Reasons />
      <FAQ />
      <Guarantee />
      <Help />
      <Service />
      <Pricing />
    </>
  );
};

export default MainContainer;
