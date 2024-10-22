import commercial from "@/assets/commercial.webp";

export default function LockTypeCard() {
  return (
    <div className="flex flex-col items-center max-w-80">
      <img
        src={commercial}
        alt="commercial"
        className="brightness-[0.7] w-64 h-44 object-cover"
      />
      <h2 className="uppercase text-3xl text-center py-2">
        <span className="text-primary font-bold">Commercial</span>
        <br />
        Locksmith service
      </h2>
      <p className="text-center py-4 text-xl font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim suscipit
        animi neque earum incidunt, eum numquam expedita pariatur.
      </p>
    </div>
  );
}
