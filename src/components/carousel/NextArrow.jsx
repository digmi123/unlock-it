import arrowRight from "../../assets/arrowRight.svg";
import { Button } from "../ui/button";
export const NextArrow = ({ onClick }) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className="absolute top-1/2 right-[-30px] transform text-xl -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
  >
    <img src={arrowRight} alt="Right Arrow" />
  </Button>
);
