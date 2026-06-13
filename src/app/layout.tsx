import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const jqkasWild = localFont({
  src: "./fonts/JqkasWild.ttf",
  variable: "--font-jqkas-wild",
});

const SITE_URL = "https://gtoillini.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GTO Illini — UIUC's Premier Poker Club",
    template: "%s | GTO Illini — UIUC's Premier Poker Club",
  },
  description:
    "GTO Illini is the poker club at the University of Illinois Urbana-Champaign (UIUC). 300+ members studying game theory optimal strategy, weekly tournaments, and competitive intercollegiate poker.",
  keywords: [
    "UIUC poker club",
    "University of Illinois poker club",
    "GTO Illini",
    "Illinois poker",
    "UIUC poker",
    "college poker",
    "game theory optimal",
    "poker tournaments Champaign Urbana",
    "intercollegiate poker",
  ],
  applicationName: "GTO Illini",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "GTO Illini — UIUC's Premier Poker Club",
    title: "GTO Illini — UIUC's Premier Poker Club",
    description:
      "The poker club at the University of Illinois Urbana-Champaign. Game theory optimal strategy, weekly tournaments, and competitive intercollegiate play.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTO Illini — UIUC's Premier Poker Club",
    description:
      "The poker club at the University of Illinois Urbana-Champaign. Game theory optimal strategy, weekly tournaments, and competitive intercollegiate play.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GTO Illini",
    alternateName: [
      "UIUC's Premier Poker Club",
      "UIUC Poker Club",
      "University of Illinois Poker Club",
    ],
    url: SITE_URL,
    description:
      "The poker club at the University of Illinois Urbana-Champaign (UIUC), teaching game theory optimal strategy and running competitive poker tournaments.",
    foundingDate: "2024",
    email: "gtoillini@gmail.com",
    sameAs: ["https://discord.com/invite/4ZZCqMRTwQ"],
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Champaign",
        addressRegion: "IL",
        addressCountry: "US",
      },
    },
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "University of Illinois Urbana-Champaign",
      url: "https://illinois.edu",
    },
  };

  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${jqkasWild.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
