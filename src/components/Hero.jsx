"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const scrollToStory = () => {
    document.getElementById("countdown")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#fbf4eb]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0">
        {/* Main soft glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[550px]
            w-[550px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#c9a875]/10
            blur-[110px]
            motion-safe:animate-pulse
          "
        />

        {/* Left ambient glow */}
        <div
          className="
            absolute
            -left-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#8b3043]/[0.05]
            blur-[110px]
            motion-safe:animate-pulse
          "
        />

        {/* Right ambient glow */}
        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#b99567]/[0.07]
            blur-[110px]
            motion-safe:animate-pulse
          "
        />

        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(70,40,30,0.3) 0.5px, transparent 0.5px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* Soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#ead8c8]/20" />
      </div>

      {/* =====================================================
          CORNER DECORATION
      ===================================================== */}

      <div className="absolute left-6 top-6 h-10 w-10 border-l border-t border-[#b79a78]/50 sm:left-10 sm:top-10 sm:h-12 sm:w-12" />

      <div className="absolute right-6 top-6 h-10 w-10 rotate-90 border-l border-t border-[#b79a78]/50 sm:right-10 sm:top-10 sm:h-12 sm:w-12" />

      <div className="absolute bottom-6 left-6 h-10 w-10 -rotate-90 border-l border-t border-[#b79a78]/50 sm:bottom-10 sm:left-10 sm:h-12 sm:w-12" />

      <div className="absolute bottom-6 right-6 h-10 w-10 rotate-180 border-l border-t border-[#b79a78]/50 sm:bottom-10 sm:right-10 sm:h-12 sm:w-12" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className={`
          relative
          z-10
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          px-6
          py-24
          text-center
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }
        `}
      >
        {/* =================================================
            EYEBROW
        ================================================= */}

        <div
          className={`
            flex
            items-center
            gap-3
            text-[7px]
            font-medium
            uppercase
            tracking-[0.32em]
            text-[#91786d]
            transition-all
            duration-1000
            ease-out
            sm:text-[9px]
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0"
            }
          `}
        >
          <span className="h-px w-5 bg-[#b59a80] sm:w-7" />

          <span>TOGETHER WITH THEIR FAMILIES</span>

          <span className="h-px w-5 bg-[#b59a80] sm:w-7" />
        </div>

        {/* =================================================
            INTRO
        ================================================= */}

        <p
          className={`
            mt-6
            text-[8px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-[#9b8173]
            transition-all
            delay-150
            duration-1000
            ease-out
            sm:text-[10px]
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          REQUEST THE PLEASURE OF YOUR COMPANY
        </p>

        {/* =================================================
            NAMES
        ================================================= */}

        <h1
          className={`
            mt-6
            flex
            flex-col
            items-center
            font-serif
            font-normal
            leading-[0.8]
            text-[#4a1d28]
            transition-all
            delay-300
            duration-[1600ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              loaded
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-10 scale-[0.94] opacity-0"
            }
          `}
        >
          <span className="text-[68px] tracking-[-0.04em] sm:text-[88px] md:text-[105px]">
            Groom
          </span>

          <span className="my-3 text-[30px] italic leading-none text-[#a27b55] sm:text-[38px]">
            &amp;
          </span>

          <span className="text-[55px] tracking-[-0.035em] sm:text-[76px] md:text-[92px]">
            Bride 
          </span>
        </h1>

        {/* =================================================
            ORNAMENT
        ================================================= */}

        <div
          className={`
            mt-9
            flex
            items-center
            gap-3
            transition-all
            delay-500
            duration-[1200ms]
            ease-out
            sm:mt-11
            ${
              loaded
                ? "scale-x-100 opacity-100"
                : "scale-x-0 opacity-0"
            }
          `}
        >
          <span className="h-px w-14 bg-[#b89a78] sm:w-20" />

          <span className="text-[12px] text-[#a47d54] sm:text-[14px]">
            ✦
          </span>

          <span className="h-px w-14 bg-[#b89a78] sm:w-20" />
        </div>

        {/* =================================================
            DATE
        ================================================= */}

        <p
          className={`
            mt-7
            text-[9px]
            font-medium
            tracking-[0.35em]
            text-[#76594c]
            transition-all
            delay-[650ms]
            duration-1000
            ease-out
            sm:mt-8
            sm:text-[11px]
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          TWELFTH OF DECEMBER
        </p>

        {/* =================================================
            YEAR
        ================================================= */}

        <p
          className={`
            mt-1
            font-serif
            text-[32px]
            font-normal
            tracking-[0.08em]
            text-[#4a1d28]
            transition-all
            delay-[750ms]
            duration-1000
            ease-out
            sm:text-[38px]
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          2026
        </p>

        {/* =================================================
            LOCATION
        ================================================= */}

        <p
          className={`
            mt-2
            text-[7px]
            font-medium
            tracking-[0.35em]
            text-[#9b8173]
            transition-all
            delay-[850ms]
            duration-1000
            ease-out
            sm:text-[9px]
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          KERALA • INDIA
        </p>

        {/* =================================================
            EXPLORE BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={scrollToStory}
          className={`
            group
            mt-12
            flex
            flex-col
            items-center
            gap-3
            text-[7px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#76594c]
            transition-all
            delay-[1100ms]
            duration-1000
            ease-out
            hover:text-[#4a1d28]
            sm:mt-14
            sm:text-[8px]
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
        >
          <span className="transition-transform duration-500 group-hover:-translate-y-1">
            EXPLORE OUR STORY
          </span>

          <span
            className="
              text-[19px]
              font-normal
              opacity-70
              motion-safe:animate-bounce
            "
          >
            ↓
          </span>
        </button>
      </div>

      {/* =====================================================
          BOTTOM DECORATIVE TEXT
      ===================================================== */}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[6px] font-medium tracking-[0.35em] text-[#a58c7d] sm:bottom-8 sm:text-[7px]">
        12 · 12 · 2026
      </div>
    </section>
  );
}