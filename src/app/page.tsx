"use client";

import OpeningEnvelope from "@/components/OpeningEnvelope";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Invitation from "@/components/Invitation";
import Location from "@/components/Location";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <OpeningEnvelope
        onOpen={() => {
          document.getElementById("hero")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      />

      <Hero />
      <Countdown />
      <Story />
      <Events />
      <Gallery />
      <Invitation />
      <Location />
      <RSVP />
      <Footer />
    </main>
  );
}