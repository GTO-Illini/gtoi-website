import Image from 'next/image';

export default function Merch() {
  const merch = [
    {
      name: "Hoodie With Logo",
      price: "$30",
      image: "/image-assets/merch_photos/hoodie.jpeg",
    },
    {
      name: "Pin Button With Logo",
      price: "$4",
      image: "/image-assets/merch_photos/pin_button.jpeg",
    },
    {
      name: "Playing Cards With Logo",
      price: "$10",
      image: "/image-assets/merch_photos/playing_cards.jpeg",
    },
  ];
 return (
   <main className="min-h-screen p-8">
     <h1 className="text-4xl font-bold mb-10 flex justify-center">Merchandise</h1>
     <p className="text-xl mb-6 flex justify-center">GTO Illini merchandise purchase form will be available here soon.</p>
     <div className={"flex justify-center gap-24 mt-10"}>
     {merch.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    unoptimized={true}
                    className="object-contain h-auto max-h-72 w-auto flex-shrink-0 border-2 border-black box-border"
                  />
                  <p className="mt-2 text-center">{`${item.name}: ${item.price}`}</p>
                </div>
              ))}
     </div>
   </main>
 );
}