import { merch } from "@/lib/data/merch";
import styles from "./Merch.module.css";

export default function Merch() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-10 flex justify-center">Merchandise</h1>
      <p className="text-xl mb-6 flex justify-center">GTO Illini merchandise purchase form will be available here soon.</p>
      <div className="flex justify-center gap-24 mt-10">
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
