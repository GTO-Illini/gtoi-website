export default function Tools() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        {/* Poker Solver teaser */}
        <div
          className="rounded-xl p-6"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--surface)",
          }}
        >
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-geist-sans)" }}
          >
            Poker Solver
          </h2>
          <p
            className="text-sm"
            style={{ color: "var(--muted)", fontFamily: "var(--font-geist-sans)" }}
          >
            Stay tuned — a GTO solver is in development.
          </p>
        </div>

        {/* Lecture videos */}
        <div>
          <h2
            className="text-xl font-semibold mb-1"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-geist-sans)" }}
          >
            Poker Lecture Videos
          </h2>
          <p
            className="text-sm mb-4"
            style={{ color: "var(--muted)", fontFamily: "var(--font-geist-sans)" }}
          >
            Our lecture library is coming soon. In the meantime, enjoy Game of Gold!
          </p>
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid var(--border)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            }}
          >
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/videoseries?si=h3vtVULrP-6NGfPi&amp;list=PL0WnRS5vmGNqcdyUBBpEbMDFOstSSxoaV"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
