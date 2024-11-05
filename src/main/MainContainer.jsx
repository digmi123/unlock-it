import React from "react";
import {
  Reasons,
  FAQ,
  Pricing,
  ServiceIncludes,
  ServicePromises,
  UnlockSection,
  Footer,
} from "@/sections";
import { Carousel } from "@/sections/Carousel";
const MainContainer = ({ refs }) => {
  return (
    <>
      <UnlockSection ref={refs.unlock} />
      <ServiceIncludes ref={refs.services} />
      <Carousel ref={refs.reviews} />
      <ServicePromises ref={refs.servicePromises} />
      <Reasons ref={refs.contact} />
      <FAQ ref={refs.faq} />
      <Pricing ref={refs.pricing} />
      <Footer />
    </>
  );
};

export default MainContainer;
