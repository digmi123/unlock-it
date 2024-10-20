import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
export default function ServiceEreaLayout({ children, backgroundImage }) {
    return (
      <section
        className={cn(
          "px-52 py-12 grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6",
          {
            "bg-[url('/src/assets/doorLock.jpg')] bg-no-repeat bg-cover bg-left":
              backgroundImage,
          }
        )}
      >
        {children}
        
      </section>
    );
  }
  
  ServiceEreaLayout.propTypes = {
    children: PropTypes.node,
    backgroundImage: PropTypes.string,
  };
  