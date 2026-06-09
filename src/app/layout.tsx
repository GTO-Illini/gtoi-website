import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

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

export const metadata: Metadata = {
  title: "GTO Illini",
  description: "Game Theory Optimal at the University of Illinois",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${jqkasWild.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
