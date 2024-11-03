import PropTypes from "prop-types";
import BannerCard from "../BannerCard";

export default function ServiceIncludesCard({ description, icon }) {
  return (
    <BannerCard className="min-w-80 transition-transform duration-300 hover:scale-105 ${className}">
      <div className="flex items-center gap-4">
        {icon}
        <h3 className="text-lg font-extrabold text-white">{description}</h3>
      </div>
    </BannerCard>
  );
}

ServiceIncludesCard.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
