import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const jqkasWild = localFont({
  src: "./fonts/JqkasWild.ttf",
  variable: "--font-jqkas-wild",
});

export const metadata: Metadata = {
  title: "GTO Illini",
  description: "Game Theory Optimal at the University of Illinois"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${jqkasWild.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
