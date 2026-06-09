export default function Home() {
  return (
    <main>
      <div className="relative w-full h-screen">
        <div className="absolute inset-0">
          <img
            src="image-assets/landing-page-slideshow/kevin_champ.jpg"
            alt="Hero Image"
            className="object-cover absolute inset-0 w-full h-full"
            style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center"
          style={{ fontFamily: "var(--font-jqkas-wild)" }}
        >
          <h1 className="text-4xl md:text-9xl font-normal mb-4">GTO Illini</h1>
          <p className="text-xl md:text-4xl max-w-2xl px-4">Poker at the University of Illinois</p>
        </div>
      </div>

      <section className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#143560] rounded-xl p-8 shadow-lg">
          <h2 className="text-4xl mb-6 text-white" style={{ fontFamily: "var(--font-jqkas-wild)" }}>
            What is GTO Illini?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            GTO Illini is the premier poker organization at the University of Illinois, dedicated to fostering a community of strategic thinking and competitive gameplay. We focus on teaching Game Theory Optimal (GTO) poker strategies, organizing tournaments, and creating opportunities for students to develop their analytical and decision-making skills through the lens of poker.
          </p>
        </div>
      </section>
    </main>
  );
}
