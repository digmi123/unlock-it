import PropTypes from "prop-types";
import BannerCard from "../BannerCard";

export default function PromiseCard({ title, text, description, icon }) {
  return (
    <BannerCard className="p-4 min-w-80 transition-transform duration-300 hover:scale-105 ${className}">
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-bold">{title}</h4>
        <div className="flex items-center mb-3">
          {icon}
          <h3 className="text-xl font-semibold ml-2">{text}</h3>
        </div>
        <p className="text-lg">{description}</p>
      </div>
    </BannerCard>
  );
}

PromiseCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
