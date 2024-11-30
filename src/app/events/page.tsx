import Image from "next/image";
import temp_image from './royalflushvsaaaa.jpg';

export default function Events() {
  return (
    <main className="min-h-screen p-8">

      <div className="flex flex-col gap-4 p-4">

        <div className="flex flex-row h-screen gap-4 p-4">

          <div className="basis-2/3 bg-blue-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-blue-800 mt-4">Events</h1>
            <p className="text-base text-blue-700 mt-2">Upcoming GTO Illini events will be listed here.</p>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&title=GTO%20Illini%20Calendar&src=Z3RvaWxsaW5pQGdtYWlsLmNvbQ&color=%23039BE5"
              className="mt-4 w-full h-3/4 border border-gray-300"
            ></iframe>
          </div>
          <div className="basis-1/3 bg-orange-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-orange-800 mt-4">Event Details</h1>
            <p className="text-base text-orange-700 mt-2">Details and stuff!</p>
          </div>

        </div>

        <div className="flex flex-col h-screen gap-4 p-4">

          <div className="bg-green-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Past Events</h1>
            <p className="text-base text-green-700 mt-2">Some fun things we did in the past!</p>
            <Image src={temp_image} alt="crazy hand" className="w-1/2 h-auto object-cover rounded-md shadow-xl" />
          </div>

        </div>

      </div>

    </main>
  );
}
