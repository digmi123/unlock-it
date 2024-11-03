import location from "@/assets/react.svg";

export default function LocationDetails() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="font-bold text-3xl">Our Location</h2>
      {[1, 2, 3].map((i) => {
        return (
          <div className="flex items-center gap-4" key={i}>
            <img src={location} alt="location" className="w-[20px] h-[20px]" />
            <h3 className="text-xl font-medium">test@gmail.com</h3>
          </div>
        );
      })}
    </div>
  );
}
