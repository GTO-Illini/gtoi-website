import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src="/image-assets/landing-page-slideshow/kevin_champ.jpg"
          alt="Hero Image"
          className="object-cover"
          fill
          priority
          unoptimized={true}
        />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center font-jqkas-wild">
        <h1 className="text-4xl md:text-9xl font-normal mb-4">
          GTO Illini
        </h1>
        <p className="text-xl md:text-4xl max-w-2xl px-4">
          Poker at the University of Illinois
        </p>
      </div>
    </div>
  );
}
