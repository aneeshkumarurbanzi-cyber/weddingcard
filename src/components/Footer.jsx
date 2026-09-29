"use client";

import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#3b1720] px-6 py-16 text-[#f8eee3] md:px-10 md:py-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c8a46b] to-transparent" />

      <div className="pointer-events-none absolute -left-24 top-20 h-48 w-48 rounded-full border border-[#c8a46b]/10" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full border border-[#c8a46b]/10" />

      <div className="relative mx-auto max-w-6xl">
        {/* Main invitation */}
        <div className="text-center">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.45em] text-[#c8a46b]">
            With love & gratitude
          </p>

          <h2 className="font-serif text-4xl font-light tracking-wide text-[#fff8ef] sm:text-5xl md:text-6xl">
            Groom
            <span className="mx-3 text-[#c8a46b]">&</span>
            Bride 
          </h2>

          <div className="mx-auto my-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#c8a46b]/50" />

            <Heart
              size={15}
              strokeWidth={1}
              className="fill-[#c8a46b] text-[#c8a46b]"
            />

            <span className="h-px w-12 bg-[#c8a46b]/50" />
          </div>

          <p className="text-xs uppercase tracking-[0.35em] text-[#ead9c3]">
            12 December 2026
          </p>

          <p className="mt-3 text-sm tracking-[0.2em] text-[#cbb8a5]">
            Kerala · India
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-14 flex flex-wrap justify-center gap-x-7 gap-y-4 border-y border-[#c8a46b]/15 py-7">
          <a
            href="#hero"
            className="text-[10px] uppercase tracking-[0.25em] text-[#d9c8b5] transition-colors duration-300 hover:text-[#c8a46b]"
          >
            Home
          </a>

          <a
            href="#countdown"
            className="text-[10px] uppercase tracking-[0.25em] text-[#d9c8b5] transition-colors duration-300 hover:text-[#c8a46b]"
          >
            Countdown
          </a>

          <a
            href="#story"
            className="text-[10px] uppercase tracking-[0.25em] text-[#d9c8b5] transition-colors duration-300 hover:text-[#c8a46b]"
          >
            Our Story
          </a>

          <a
            href="#events"
            className="text-[10px] uppercase tracking-[0.25em] text-[#d9c8b5] transition-colors duration-300 hover:text-[#c8a46b]"
          >
            Events
          </a>

          <a
            href="#gallery"
            className="text-[10px] uppercase tracking-[0.25em] text-[#d9c8b5] transition-colors duration-300 hover:text-[#c8a46b]"
          >
            Gallery
          </a>

          <a
            href="#rsvp"
            className="text-[10px] uppercase tracking-[0.25em] text-[#d9c8b5] transition-colors duration-300 hover:text-[#c8a46b]"
          >
            RSVP
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-center text-[10px] tracking-[0.15em] text-[#bda998] sm:text-left">
            A celebration of love, family & togetherness
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#d9c8b5] transition-colors duration-300 hover:text-[#c8a46b]"
          >
            Back to top

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8a46b]/30 transition-all duration-300 group-hover:border-[#c8a46b]">
              <ArrowUp
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </span>
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#8f7568]">
            Made with love for our special day
          </p>
        </div>
      </div>
    </footer>
  );
}