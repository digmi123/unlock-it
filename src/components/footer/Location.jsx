import AreaService from "@/sections/service/Service";

export default function Location() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <AreaService style={{ width: "300px", height: "150px" }} />
    </div>
  );
}
