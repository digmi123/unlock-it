import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

export default function CarouselLayout({ children }) {
  return (
    <section
      className={cn(
        "px-12 py-12 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6",
        "overflow-hidden" // Optional if you want to prevent overflow
      )}
    >
      {children}
    </section>
  );
}

CarouselLayout.propTypes = {
  children: PropTypes.node.isRequired,
};