"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 64px)" }}>
      <div className="absolute inset-0">
        <img
          src="image-assets/landing-page-slideshow/kevin_champ.jpg"
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay — darker at bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center justify-end h-full text-white text-center pb-20 px-4"
        style={{ fontFamily: "var(--font-jqkas-wild)" }}
      >
        <h1 className="text-6xl md:text-8xl font-normal mb-3 drop-shadow-lg">
          GTO Illini
        </h1>
        <p
          className="text-lg md:text-2xl max-w-xl mb-8 drop-shadow"
          style={{ fontFamily: "var(--font-geist-sans)", fontWeight: 400, opacity: 0.9 }}
        >
          Poker at the University of Illinois
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/events"
            className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-200"
            style={{
              backgroundColor: "var(--primary)",
              fontFamily: "var(--font-geist-sans)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--primary-hover)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--primary)")}
          >
            View Events
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              fontFamily: "var(--font-geist-sans)",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.25)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)")}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
