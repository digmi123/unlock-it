import arrowLeft from "../../assets/arrowLeft.svg";
import { Button } from "../ui/button";

export const PrevArrow = ({ onClick }) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className="absolute top-1/2 left-0 transform text-xl -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
  >
    <img src={arrowLeft} alt="left Arrow" />
  </Button>
);
