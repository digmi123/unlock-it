export default function Icon({ icon }) {
  return (
    <div className="flex items-center text-center justify-center rounded-full bg-primary p-2">
      <img src={icon} alt="Icon" className="w-[20px] h-[20px]" />
    </div>
  );
}
