// import Image from 'next/image';
// import hoodie from './hoodie.jpeg'
// import poker_cards from './playing_cards.jpeg'
// import pin_button from './pin_button.jpeg'
import styles from './Merch.module.css';


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
     <h1 className="text-4xl font-bold mb-6 flex justify-center">Merchandise</h1>
     <p className="text-xl mb-6 flex justify-center">GTO Illini merchandise purchase form will be available here soon.</p>
     <div className={"flex justify-center gap-24 mt-10"}>
     {merch.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className={styles.merchImage}
                  />
                  <p className="mt-2 text-center">{`${item.name}: ${item.price}`}</p>
                </div>
              ))}
     </div>
   </main>
 );
}