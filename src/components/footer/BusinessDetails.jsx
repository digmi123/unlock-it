import reactLogo from "@/assets/react.svg";
import Icons from "./Icons";
import { CallUsButton } from "@/main/common";

export default function BusinessDetails() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-5 items-center">
        <h2 className="font-bold text-3xl">Unlock it</h2>
        <img src={reactLogo} alt="Logo" />
      </div>
      <p className="text-xl font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        debitis consectetur, necessitatibus blanditiis in tenetur.
      </p>
      <Icons />
      <CallUsButton className="py-6 px-8 text-xl self-center my-5" />
    </div>
  );
}
