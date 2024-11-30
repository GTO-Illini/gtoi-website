import Image from 'next/image';
import hoodie from './hoodie.png'
import poker_cards from './playing_cards.jpeg'
import pin_button from './pin_button.jpeg'
import styles from './Merch.module.css';


export default function Merch() {
 return (
   <main className="min-h-screen p-8">
     <h1 className="text-3xl font-bold mb-6">Merchandise</h1>
     <p>GTO Illini merchandise purchase form will be available here soon.</p>
     <div className={"flex justify-center gap-24 mt-10"}>
       <div className="flex flex-col items-center">
         <Image
           src={hoodie}
           alt="Hoodie With Logo"
           className={styles.merchImage}
         />
         <p className="mt-2 text-center">Hoodie With Logo: $30</p>
       </div>
       <div className="flex flex-col items-center">
         <Image
           src={poker_cards}
           alt="Playing Cards With Logo"
           className={styles.merchImage}
         />
         <p className="mt-2 text-center">Playing Cards With Logo: $13</p>
       </div>
       <div className="flex flex-col items-center">
         <Image
           src={pin_button}
           alt="Pin Button With Logo"
           className={styles.merchImage}
         />
         <p className="mt-2 text-center">Pin Button With Logo: $4</p>
       </div>
     </div>
   </main>
 );
}