import Image from "next/image";
import temp_image from "./royalflushvsaaaa.jpg";
import Calendar from "../components/Calendar";
import EventInfo from "../components/EventInfo";

export default function Events() {
  return (
    <main className="min-h-screen">

      <div className="flex flex-col gap-4 p-4">

        <div className="flex flex-row h-screen gap-4 p-4">

          <div className="basis-2/3">
            <Calendar />
          </div>
          <div className="basis-1/3 bg-white p-4">
            <EventInfo />
          </div>

        </div>

      </div>

    </main>
  );
}
