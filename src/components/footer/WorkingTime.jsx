import reactLogo from "@/assets/react.svg";

export default function WorkingTime() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="font-bold text-3xl">Working Hours</h2>
      <h3 className="text-4xl font-semibold">24/7</h3>
      {/* Clock Image */}
      <img src={reactLogo} alt="clock" className="w-[30px] h-[30px]" />
    </div>
  );
}
