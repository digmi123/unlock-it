import LockTypeCard from "@/components/LockTypeCard";

export default function LockTypeSection() {
  return (
    <div className="w-full px-32 py-12 sm:px-8 sm:py-8" id="lock-type-section">
      <div className="flex flex-wrap items-center justify-around gap-5">
        <LockTypeCard />
        <LockTypeCard />
        <LockTypeCard />
      </div>
    </div>
  );
}
