interface InfoCardProps {
  title: string;
  description: string;
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <div
        className="rounded-2xl p-8 md:p-10"
        style={{
          backgroundColor: "var(--primary)",
          boxShadow: "0 8px 32px rgba(20, 53, 96, 0.18)",
        }}
      >
        <div
          className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
          style={{
            backgroundColor: "rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.75)",
            fontFamily: "var(--font-geist-sans)",
          }}
        >
          About
        </div>
        <h2
          className="text-3xl md:text-4xl mb-5 text-white leading-tight"
          style={{ fontFamily: "var(--font-jqkas-wild)" }}
        >
          {title}
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-geist-sans)" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
