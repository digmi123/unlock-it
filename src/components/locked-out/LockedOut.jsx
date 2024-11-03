import checkmark from "../../assets/checkmark.svg";
import PropTypes from "prop-types";
import { CallUsButton } from "@/main/common";
import { reasons, cardsContent } from "./consts";

const Card = ({ topic, description }) => {
  return (
    <div className="bg-primary rounded-2xl p-4 w-full flex flex-col items-center text-center gap-2">
      <p className="text-4xl md:text-2xl font-bold text-white">{topic}</p>
      <p className="font-bold text-xl text-white">{description}</p>
    </div>
  );
};

Card.propTypes = {
  topic: PropTypes.string,
  description: PropTypes.string,
};

export default function LockedOut({id}) {
  return (
    <div id={id} className="flex flex-col gap-8">
      <h1 className="text-titleClamp font-bold p-2">
        Locked out? We&apos;ve got you
      </h1>

      <ul className="flex flex-col gap-2">
        {reasons.map((reason) => (
          <li key={reason} className="flex items-center gap-4">
            <span>
              <img src={checkmark} alt="checkmark" className="w-8 h-8" />
            </span>
            <p className="text-4xl font-medium">{reason}</p>
          </li>
        ))}
      </ul>

      {/* <CallUsButton isDisplayText /> */}

      <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
        {cardsContent.map(({ topic, description }) => (
          <Card key={topic} topic={topic} description={description} />
        ))}
      </div>
    </div>
  );
}
