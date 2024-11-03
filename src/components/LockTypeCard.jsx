import { Card } from "@/components/ui/card"; // Import shadcn Card component
import commercial from "@/assets/commercial.webp";

export default function LockTypeCard() {
  return (
    <Card className="flex flex-col items-center max-w-md p-4 shadow-lg">
      <img
        src={commercial}
        alt="commercial"
        className="brightness-[0.7] w-full h-44 object-cover rounded-t-lg"
      />
      <div className="p-4 text-center">
        <div className="mb-4">
          <h2 className="uppercase text-3xl">
            <span className="text-primary font-bold">Commercial</span>
          </h2>
          <h3 className="font-bold text-xl">Locksmith service</h3>
        </div>
        <div>
          <p className="text-xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim suscipit animi neque
            earum incidunt, eum numquam expedita pariatur.
          </p>
        </div>
      </div>
    </Card>
  );
}
