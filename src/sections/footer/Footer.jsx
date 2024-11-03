import LocationDetails from "@/components/footer/LocationDetails";
import WorkingTime from "@/components/footer/WorkingTime";
import { CallUsButton } from "@/main/common";
import BusinessDetails from "@/components/footer/BusinessDetails";
import Location from "@/components/footer/Location";

export default function Footer() {
  return (
    <section className="bg-gray-900 flex flex-col py-4 px-10 md:px-6 md:py-1 md:text-">
      <div
        id="content-wrapper"
        className="text-white p-4 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6"
      >
        <BusinessDetails />
        <LocationDetails />
        <WorkingTime />
        {/* <Location /> */}
      </div>

      <div id="divider" className="w-full h-[1px] bg-slate-600 my-8 mx-auto" />

      <h4 className="text-center py-4 text-white font-medium text-2xl">
        Copyright © 2024. All rights reserved.
      </h4>
    </section>
  );
}
