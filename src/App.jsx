import { CarouselPlugin } from "./components/carousel/Carousel";
import CarouselCard from "./components/carousel/CarouselCard";
import Banner from "./sections/Banner";
import FAQ from "./sections/FAQ";
import Help from "./sections/Help";
import ReasonsSection from "./sections/ReasonsSection";
import SecondBanner from "./sections/SecendBanner";
import Service from "./sections/Service";
function App() {
  return (
    <>
      <ReasonsSection />
      <Banner/>
      <CarouselCard/>
      <SecondBanner/>
      <FAQ />
      <Help />
      <Service/>
    </>
  );
}

export default App;
