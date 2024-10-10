import checkmark from "../assets/checkmark.svg";
import PropTypes from "prop-types";

const reasons = [
  "we arrive in 15 minutes",
  "we can handle any lock",
  "cheapest rate in Melbourne",
];

const cardsContent = [
  {
    topic: "24/7",
    description: "always available",
  },
  {
    topic: "15 Min",
    description: "fastest arrival",
  },
  {
    topic: "$29",
    description: "Callout Fee",
  },
];

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
      <h1 className="text-8xl font-bold p-2">locked out? we&apos;ve got you</h1>
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

      <button className="w-fit bg-primary py-4 px-12 text-3xl rounded-full">
        Call Now: (03) 6358 2037
      </button>

      <div className="flex gap-4">
        {cardsContent.map(({ topic, description }) => (
          <Card key={topic} topic={topic} description={description} />
        ))}
      </div>
    </div>
  );
}
