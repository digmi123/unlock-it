import { Button } from "./ui/button";

function WeCanHelp() {
  return (
    <div className="flex flex-col justify-around gap-4 h-full">
      <h1 className="text-6xl font-bold">
        our team of experts can surely help
      </h1>
      <Button
        variant="default"
        className="w-fit rounded-full px-12 py-8 text-2xl"
      >
        Call Now: (03) 6358 2037
      </Button>
    </div>
  );
}

export default WeCanHelp;
