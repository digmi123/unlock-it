import { Reasons, FAQ, Help, Pricing } from "@/sections";
import { UnlockSection } from "@/sections";
import { WhyUs } from "@/sections";
const MainContainer = () => {
  return (
    <>
      <UnlockSection />
      <WhyUs />
      <Reasons />
      <FAQ />
      <Help />
      <Pricing />
    </>
  );
};

export default MainContainer;
