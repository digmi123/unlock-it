import { cn } from "@/lib/utils";

export default function SideImage({ children, image, className, ltr }) {
  return (
    <div
      className={cn("flex items-center gap-4 justify-center", {
        "flex-row-reverse": !ltr,
      })}
    >
      <img
        src={image}
        alt="side-image"
        className={cn(
          "brightness-[0.7] object-cover p-10 rounded-[50px] min-w-96",
          className,
          {
            "w-full": !className,
          }
        )}
      />
      {children}
    </div>
  );
}
