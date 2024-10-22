import checkmark from "../../assets/checkmark.svg";
import PropTypes from "prop-types";
import { CallUsButton } from "@/main/common";
import { reasons, cardsContent } from "./consts";

const Card = ({ topic, description }) => {
  return (
    <div className="bg-primary rounded-2xl p-4 w-40 flex flex-col items-center">
      <p className="text-4xl font-bold text-foreground">{topic}</p>
      <p className="">{description}</p>
    </div>
  );
};

Card.propTypes = {
  topic: PropTypes.string,
  description: PropTypes.string,
};

export default function LockedOut() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-titleClamp font-bold p-2">
        locked out? we&apos;ve got you
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

      <CallUsButton isDisplayText />

      <div className="flex gap-4">
        {cardsContent.map(({ topic, description }) => (
          <Card key={topic} topic={topic} description={description} />
        ))}
      </div>
    </div>
  );
}
