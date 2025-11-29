import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-2 bg-primary-blue shadow-md h-20 font-jqkas-wild">
      <div className="flex items-center flex-shrink-0">
        <Link href="/" className="flex items-center no-underline gap-4 whitespace-nowrap">
          <Image
            src="/image-assets/GTOIlliniLogoSuits.png"
            alt="GTO Illini Logo"
            width={70}
            height={70}
            className="object-contain h-[70px] w-auto flex-shrink-0"
            unoptimized={true}
          />
          <span className="text-4xl md:text-5xl lg:text-6xl font-normal text-white">GTO Illini</span>
        </Link>
      </div>
      <nav className="flex gap-2 md:gap-4 lg:gap-6 ml-4 md:ml-8 flex-nowrap overflow-x-auto">
        <Link href="/events" className="no-underline text-white font-normal text-2xl md:text-3xl lg:text-4xl px-4 py-2 border-2 border-transparent rounded-lg transition-all duration-200 ease-linear flex items-center whitespace-nowrap hover:bg-white/10 hover:border-white hover:shadow-lg active:bg-white/20 active:shadow-md">Events</Link>
        <Link href="/tools" className="no-underline text-white font-normal text-2xl md:text-3xl lg:text-4xl px-4 py-2 border-2 border-transparent rounded-lg transition-all duration-200 ease-linear flex items-center whitespace-nowrap hover:bg-white/10 hover:border-white hover:shadow-lg active:bg-white/20 active:shadow-md">Tools</Link>
        <Link href="/merch" className="no-underline text-white font-normal text-2xl md:text-3xl lg:text-4xl px-4 py-2 border-2 border-transparent rounded-lg transition-all duration-200 ease-linear flex items-center whitespace-nowrap hover:bg-white/10 hover:border-white hover:shadow-lg active:bg-white/20 active:shadow-md">Merch</Link>
        <Link href="/about" className="no-underline text-white font-normal text-2xl md:text-3xl lg:text-4xl px-4 py-2 border-2 border-transparent rounded-lg transition-all duration-200 ease-linear flex items-center whitespace-nowrap hover:bg-white/10 hover:border-white hover:shadow-lg active:bg-white/20 active:shadow-md">About</Link>
      </nav>
    </header>
  );
};

export default Header;
