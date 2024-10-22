import { cn } from "@/lib/utils";

export default function SideImage({ children, image, className }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={image}
        alt="side-image"
        className={cn("brightness-[0.7] h-44 object-cover w-2/4", className)}
      />
      {children}
    </div>
  );
}
