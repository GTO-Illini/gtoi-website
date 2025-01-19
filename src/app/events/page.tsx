import Image from "next/image";
import temp_image from "./royalflushvsaaaa.jpg";
import Calendar from "../components/Calendar";
import EventInfo from "../components/EventInfo";

export default function Events() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  return (
    <main className="min-h-screen pl-16 pr-16">
      <h1 className="p-4 text-4xl md:text-5xl lg:text-6xl text-white" style={{ fontFamily: "var(--font-jqkas-wild), sans-serif" }}>Our Events</h1>
      <h3 className="pl-4 text-xl md:text-2xl lg:text-3xl text-white">{currentMonth} {currentYear}</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 p-4">
          <Calendar />
        </div>
        <div className="col-span-1 p-4">
          <EventInfo />
        </div>
      </div>
    </main>
  );
}
