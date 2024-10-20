import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

export default function CarouselLayout({ children, backgroundImage }) {
  return (
    <section
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
      className={cn(
        "px-0 py-12 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6",
        "overflow-hidden" // Optional if you want to prevent overflow
      )}
    >
      {children}
    </section>
  );
}

CarouselLayout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string,
};