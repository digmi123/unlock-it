import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

export default function SectionWrapper({ children, className, style, id }) {
  return (
    <section
      id={id}
      className={cn(
        "w-full min-h-[90vh] px-52 py-12 overflow-hidden",
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
}

SectionWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.string,
  id: PropTypes.string,
};
