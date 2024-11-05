import React from "react";
import { ChevronUp } from "lucide-react";
import useScrollToTop from "./hook/useScrollTop";
const ScrollToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop(300);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="md:hidden  fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-all"
      >
        <ChevronUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
