"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function RevealItem({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenPosition = {
    left: "-translate-x-24",
    right: "translate-x-24",
    up: "translate-y-12",
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-all
        duration-[1200ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-x-0 translate-y-0 opacity-100"
            : `${hiddenPosition[direction]} opacity-0`
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default function Gallery() {
  const photos = [
    {
      src: "/images/gallery-1.jpg",
      alt: "A beautiful wedding moment",
      size: "large",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Wedding memories",
      size: "small",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Couple celebration",
      size: "small",
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "A cherished moment",
      size: "medium",
    },
    {
      src: "/images/gallery-5.jpg",
      alt: "Together forever",
      size: "medium",
    },
  ];

  return (
    <section
      id="gallery"
      className="
        relative
        overflow-hidden
        bg-[#f6e9dd]
        px-6
        py-28
        text-[#49352e]
        md:px-[8%]
        md:py-40
      "
    >
      {/* Decorative background */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#a66855]/[0.05]
          blur-[60px]
          motion-safe:animate-pulse
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          right-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#a66855]/[0.05]
          blur-[60px]
          motion-safe:animate-pulse
        "
      />

      {/* INTRO */}
      <RevealItem
        direction="up"
        className="
          relative
          z-10
          mx-auto
          max-w-2xl
          text-center
        "
      >
        <p className="mb-5 font-sans text-[8px] tracking-[5px] text-[#98776b]">
          OUR MEMORIES
        </p>

        <h2
          className="
            font-serif
            text-[58px]
            font-normal
            leading-[0.8]
            text-[#49342c]
            md:text-[100px]
          "
        >
          Moments we
          <span className="mt-4 block italic text-[#91594c]">
            treasure
          </span>
        </h2>

        <div className="my-9 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#895e4d]/30" />

          <span className="text-xs text-[#a46c5d]">
            ✦
          </span>

          <span className="h-px w-16 bg-[#895e4d]/30" />
        </div>

        <p
          className="
            mx-auto
            max-w-lg
            font-sans
            text-[10px]
            leading-[2]
            tracking-wide
            text-[#80655b]
          "
        >
          A collection of little moments, beautiful memories
          and the people who make our story complete.
        </p>
      </RevealItem>

      {/* GALLERY */}
      <div className="relative z-10 mx-auto mt-20 max-w-6xl md:mt-28">

        {/* Desktop gallery */}
        <div className="hidden grid-cols-12 grid-rows-[260px_260px_220px] gap-4 md:grid">

          {/* Photo 1 — LEFT */}
          <RevealItem
            direction="left"
            delay={100}
            className="col-span-7 row-span-2 h-full"
          >
            <div
              className="
                group
                relative
                h-full
                overflow-hidden
                border
                border-[#895e4d]/20
              "
            >
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                sizes="60vw"
                className="
                  object-cover
                  transition
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-4 border border-white/40" />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#49342e]/20
                  via-transparent
                  to-transparent
                  opacity-60
                "
              />
            </div>
          </RevealItem>

          {/* Photo 2 — RIGHT */}
          <RevealItem
            direction="right"
            delay={250}
            className="col-span-5 h-full"
          >
            <div
              className="
                group
                relative
                h-full
                overflow-hidden
                border
                border-[#895e4d]/20
              "
            >
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                sizes="40vw"
                className="
                  object-cover
                  transition
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-3 border border-white/40" />
            </div>
          </RevealItem>

          {/* Photo 3 — LEFT */}
          <RevealItem
            direction="left"
            delay={400}
            className="col-span-5 h-full"
          >
            <div
              className="
                group
                relative
                h-full
                overflow-hidden
                border
                border-[#895e4d]/20
              "
            >
              <Image
                src={photos[2].src}
                alt={photos[2].alt}
                fill
                sizes="40vw"
                className="
                  object-cover
                  transition
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-3 border border-white/40" />
            </div>
          </RevealItem>

          {/* Photo 4 — RIGHT */}
          <RevealItem
            direction="right"
            delay={550}
            className="col-span-6 h-full"
          >
            <div
              className="
                group
                relative
                h-full
                overflow-hidden
                border
                border-[#895e4d]/20
              "
            >
              <Image
                src={photos[3].src}
                alt={photos[3].alt}
                fill
                sizes="50vw"
                className="
                  object-cover
                  transition
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-3 border border-white/40" />
            </div>
          </RevealItem>

          {/* Photo 5 — LEFT */}
          <RevealItem
            direction="left"
            delay={700}
            className="col-span-6 h-full"
          >
            <div
              className="
                group
                relative
                h-full
                overflow-hidden
                border
                border-[#895e4d]/20
              "
            >
              <Image
                src={photos[4].src}
                alt={photos[4].alt}
                fill
                sizes="50vw"
                className="
                  object-cover
                  transition
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-3 border border-white/40" />
            </div>
          </RevealItem>
        </div>

        {/* Mobile gallery */}
        <div className="grid gap-4 md:hidden">

          {/* Photo 1 */}
          <RevealItem
            direction="left"
            delay={100}
          >
            <div className="group relative h-[430px] overflow-hidden border border-[#895e4d]/20">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                sizes="90vw"
                className="
                  object-cover
                  transition
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-3 border border-white/40" />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#49342e]/20
                  via-transparent
                  to-transparent
                  opacity-60
                "
              />
            </div>
          </RevealItem>

          {/* Photo 2 */}
          <RevealItem
            direction="right"
            delay={250}
          >
            <div className="group relative h-[300px] overflow-hidden border border-[#895e4d]/20">
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                sizes="90vw"
                className="
                  object-cover
                  transition
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-3 border border-white/40" />
            </div>
          </RevealItem>

          {/* Photo 3 */}
          <RevealItem
            direction="left"
            delay={400}
          >
            <div className="group relative h-[300px] overflow-hidden border border-[#895e4d]/20">
              <Image
                src={photos[2].src}
                alt={photos[2].alt}
                fill
                sizes="90vw"
                className="
                  object-cover
                  transition
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-3 border border-white/40" />
            </div>
          </RevealItem>

          {/* Photo 4 */}
          <RevealItem
            direction="right"
            delay={550}
          >
            <div className="group relative h-[300px] overflow-hidden border border-[#895e4d]/20">
              <Image
                src={photos[3].src}
                alt={photos[3].alt}
                fill
                sizes="90vw"
                className="
                  object-cover
                  transition
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-3 border border-white/40" />
            </div>
          </RevealItem>

          {/* Photo 5 */}
          <RevealItem
            direction="left"
            delay={700}
          >
            <div className="group relative h-[300px] overflow-hidden border border-[#895e4d]/20">
              <Image
                src={photos[4].src}
                alt={photos[4].alt}
                fill
                sizes="90vw"
                className="
                  object-cover
                  transition
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-3 border border-white/40" />
            </div>
          </RevealItem>
        </div>
      </div>

      {/* Bottom message */}
      <RevealItem
        direction="up"
        delay={250}
        className="
          relative
          z-10
          mt-20
          text-center
          md:mt-24
        "
      >
        <p className="font-serif text-[24px] italic text-[#91594c]">
          A lifetime of memories awaits
        </p>

        <div className="mt-5 text-[10px] text-[#a46c5d]">
          ✦
        </div>
      </RevealItem>
    </section>
  );
}