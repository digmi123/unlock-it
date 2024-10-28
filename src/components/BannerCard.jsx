import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
export default function BannerCard({ children, className }) {
  return (
    <div
      className={cn(
        "bg-gray-900 text-white hover:bg-gray-800 py-4 px-6 rounded-md shadow-md text-2xl flex  items-center",
        className
      )}
    >
      {children}
    </div>
  );
}

BannerCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
