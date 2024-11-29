interface InfoCardProps {
  title: string;
  description: string;
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="bg-[#143560] rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl mb-6 text-white" style={{ fontFamily: 'var(--font-jqkas-wild)' }}>
          {title}
        </h2>
        <p className="text-xl text-white/90 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
