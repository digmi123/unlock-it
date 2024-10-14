import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

export default function BannerLayout({ children }) {
  return (
    <section
      className={cn(
        " px-0 py-12 grid grid-cols-[repeat(auto-fit,_minmax(20px,_1fr))] gap-6",
      
      )}
    >
      {children}
    </section>
  );
}

BannerLayout.propTypes = {
  children: PropTypes.node,
  backgroundImage: PropTypes.string,
};
