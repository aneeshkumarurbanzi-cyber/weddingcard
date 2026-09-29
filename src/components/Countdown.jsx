"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-12-12T00:00:00").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTime = () => {
      const now = Date.now();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    calculateTime();

    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="countdown"
      className="relative overflow-hidden bg-[#f6e9dd] px-6 py-28 text-[#49352e] md:px-[8%] md:py-36"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#a66855]/[0.05] blur-[60px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#a66855]/[0.05] blur-[60px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Eyebrow */}
        <p className="mb-5 font-sans text-[8px] tracking-[5px] text-[#98776b]">
          COUNTING THE MOMENTS
        </p>

        {/* Title */}
        <h2 className="font-serif text-[58px] font-normal leading-[0.8] text-[#49342c] md:text-[90px]">
          Until we say
          <span className="mt-4 block italic text-[#91594c]">
            I do
          </span>
        </h2>

        {/* Ornament */}
        <div className="my-10 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#895e4d]/30" />

          <span className="text-xs text-[#a46c5d]">
            ✦
          </span>

          <span className="h-px w-16 bg-[#895e4d]/30" />
        </div>

        {/* Countdown */}
        <div className="mx-auto grid max-w-3xl grid-cols-4">

          {/* DAYS */}
          <div className="border-r border-[#895e4d]/20 px-3 py-4">
            <strong className="block font-serif text-[42px] font-normal text-[#49342c] md:text-[64px]">
              {mounted
                ? String(time.days).padStart(2, "0")
                : "--"}
            </strong>

            <span className="mt-2 block font-sans text-[7px] tracking-[3px] text-[#96786c]">
              DAYS
            </span>
          </div>

          {/* HOURS */}
          <div className="border-r border-[#895e4d]/20 px-3 py-4">
            <strong className="block font-serif text-[42px] font-normal text-[#49342c] md:text-[64px]">
              {mounted
                ? String(time.hours).padStart(2, "0")
                : "--"}
            </strong>

            <span className="mt-2 block font-sans text-[7px] tracking-[3px] text-[#96786c]">
              HOURS
            </span>
          </div>

          {/* MINUTES */}
          <div className="border-r border-[#895e4d]/20 px-3 py-4">
            <strong className="block font-serif text-[42px] font-normal text-[#49342c] md:text-[64px]">
              {mounted
                ? String(time.minutes).padStart(2, "0")
                : "--"}
            </strong>

            <span className="mt-2 block font-sans text-[7px] tracking-[3px] text-[#96786c]">
              MINUTES
            </span>
          </div>

          {/* SECONDS */}
          <div className="px-3 py-4">
            <strong className="block font-serif text-[42px] font-normal text-[#49342c] md:text-[64px]">
              {mounted
                ? String(time.seconds).padStart(2, "0")
                : "--"}
            </strong>

            <span className="mt-2 block font-sans text-[7px] tracking-[3px] text-[#96786c]">
              SECONDS
            </span>
          </div>

        </div>

        {/* Date */}
        <p className="mt-12 font-sans text-[8px] tracking-[4px] text-[#98776b]">
          TWELFTH OF DECEMBER • 2026
        </p>

      </div>
    </section>
  );
}