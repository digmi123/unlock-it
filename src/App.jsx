import { useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import ScrollUp from "./components/scrollUp/ScrollUp";
import MainContainer from "./main/MainContainer";

function App() {
  const refs = {
    unlock: useRef(null),
    services: useRef(null),
    reviews: useRef(null),
    servicePromises: useRef(null),
    contact: useRef(null),
    faq: useRef(null),
    pricing: useRef(null),
    footer: useRef(null),
  };

  return (
    <>
      <Navbar refs={refs} />
      <MainContainer refs={refs} />
      <ScrollUp />
    </>
  );
}

export default App;
