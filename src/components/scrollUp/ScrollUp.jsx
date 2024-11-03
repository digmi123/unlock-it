import React from "react";
import { ChevronUp } from 'lucide-react';
const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    const navbar = document.getElementById("navbar"); // Ensure your navbar has this id
    if (navbar) {
      navbar.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-all"
    >
      <ChevronUp />
    </button>
  );
};

export default ScrollToTopButton;