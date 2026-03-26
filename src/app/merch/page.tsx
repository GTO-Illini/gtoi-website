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
    <main className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      {/* Page header */}
      <div className="px-6 py-10 text-center" style={{ backgroundColor: "var(--primary)" }}>
        <h1
          className="text-5xl md:text-6xl font-normal text-white mb-2"
          style={{ fontFamily: "var(--font-jqkas-wild)" }}
        >
          Merchandise
        </h1>
        <p
          className="text-base"
          style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-geist-sans)" }}
        >
          GTO Illini merchandise purchase form will be available here soon.
        </p>
      </div>

      {/* Product grid */}
      <div className="max-w-4xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {merch.map((item) => (
            <div
              key={item.name}
              className="rounded-xl overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface-elevated)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className={styles.merchImage}
              />
              <div className="px-4 py-3 flex items-center justify-between">
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--foreground)", fontFamily: "var(--font-geist-sans)" }}
                >
                  {item.name}
                </p>
                <span
                  className="text-sm font-bold px-2 py-0.5 rounded-md"
                  style={{
                    backgroundColor: "var(--primary-light)",
                    color: "var(--primary)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
