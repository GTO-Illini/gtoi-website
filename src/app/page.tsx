"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import InfoCard from "./components/InfoCard";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InfoCard 
        title="What is GTO Illini?"
        description="GTO Illini is the premier poker organization at the University of Illinois, dedicated to fostering a community of strategic thinking and competitive gameplay. We focus on teaching Game Theory Optimal (GTO) poker strategies, organizing tournaments, and creating opportunities for students to develop their analytical and decision-making skills through the lens of poker."
      />
    </main>
  );
}
