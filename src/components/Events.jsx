"use client";

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
        duration-[1300ms]
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

export default function Events() {
  const events = [
    {
      number: "01",
      title: "Mehndi",
      subtitle: "A joyful beginning",
      date: "11 DECEMBER 2026",
      time: "05:00 PM",
      venue: "Our Family Home",
      description:
        "An evening filled with laughter, music, beautiful colours and cherished family traditions.",
    },
    {
      number: "02",
      title: "Wedding",
      subtitle: "The sacred promise",
      date: "12 DECEMBER 2026",
      time: "10:00 AM",
      venue: "Wedding Ceremony",
      description:
        "Join us as we exchange our vows and begin this beautiful journey together, surrounded by those we love.",
    },
    {
      number: "03",
      title: "Reception",
      subtitle: "An evening to remember",
      date: "12 DECEMBER 2026",
      time: "07:00 PM",
      venue: "Celebration Hall",
      description:
        "An elegant evening of dinner, music, dancing and celebration as we begin our life together.",
    },
  ];

  return (
    <section
      id="events"
      className="
        relative
        overflow-hidden
        bg-[#fffaf4]
        px-6
        py-28
        text-[#49352e]
        md:px-[8%]
        md:py-40
      "
    >
      {/* ===================================================== */}
      {/* BACKGROUND DECORATION                                 */}
      {/* ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[400px]
          w-[400px]
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
          -left-40
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#a66855]/[0.05]
          blur-[60px]
          motion-safe:animate-pulse
        "
      />

      {/* ===================================================== */}
      {/* INTRO                                                 */}
      {/* ===================================================== */}

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
        <p
          className="
            mb-5
            font-sans
            text-[8px]
            tracking-[5px]
            text-[#98776b]
          "
        >
          JOIN US
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
          Our special

          <span
            className="
              mt-4
              block
              italic
              text-[#91594c]
            "
          >
            moments
          </span>
        </h2>

        {/* Ornament */}

        <div
          className="
            my-9
            flex
            items-center
            justify-center
            gap-4
          "
        >
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
          Three beautiful moments, one unforgettable celebration.
          We would be honoured to have you with us.
        </p>
      </RevealItem>

      {/* ===================================================== */}
      {/* EVENTS                                                */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-24
          max-w-6xl
          md:mt-32
        "
      >
        <div
          className="
            grid
            gap-8
            md:grid-cols-3
            md:gap-6
          "
        >
          {events.map((event, index) => {
            const direction =
              index === 0
                ? "left"
                : index === 1
                ? "up"
                : "right";

            const delay =
              index === 0
                ? 150
                : index === 1
                ? 300
                : 450;

            return (
              <RevealItem
                key={event.number}
                direction={direction}
                delay={delay}
                className="h-full"
              >
                <article
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    border
                    border-[#895e4d]/20
                    bg-[#fdf6ef]
                    px-7
                    py-10
                    text-center
                    transition-all
                    duration-700
                    hover:-translate-y-2
                    hover:border-[#895e4d]/40
                    md:px-8
                    md:py-12
                  "
                >
                  {/* ========================================= */}
                  {/* TOP ORNAMENT                               */}
                  {/* ========================================= */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#895e4d]/40
                      to-transparent
                    "
                  />

                  {/* ========================================= */}
                  {/* NUMBER                                    */}
                  {/* ========================================= */}

                  <div
                    className="
                      mx-auto
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#895e4d]/25
                      font-serif
                      text-[17px]
                      text-[#91594c]
                      transition-all
                      duration-700
                      group-hover:scale-110
                      group-hover:border-[#91594c]/50
                    "
                  >
                    {event.number}
                  </div>

                  {/* ========================================= */}
                  {/* SUBTITLE                                  */}
                  {/* ========================================= */}

                  <p
                    className="
                      mt-8
                      font-sans
                      text-[7px]
                      tracking-[4px]
                      text-[#a06f60]
                    "
                  >
                    {event.subtitle}
                  </p>

                  {/* ========================================= */}
                  {/* TITLE                                     */}
                  {/* ========================================= */}

                  <h3
                    className="
                      mt-5
                      font-serif
                      text-[48px]
                      font-normal
                      leading-none
                      text-[#49342c]
                      transition-transform
                      duration-700
                      group-hover:-translate-y-1
                    "
                  >
                    {event.title}
                  </h3>

                  {/* ========================================= */}
                  {/* ORNAMENT                                  */}
                  {/* ========================================= */}

                  <div
                    className="
                      my-7
                      flex
                      items-center
                      justify-center
                      gap-3
                    "
                  >
                    <span className="h-px w-8 bg-[#895e4d]/25" />

                    <span className="text-[9px] text-[#a46c5d]">
                      ✦
                    </span>

                    <span className="h-px w-8 bg-[#895e4d]/25" />
                  </div>

                  {/* ========================================= */}
                  {/* DATE                                      */}
                  {/* ========================================= */}

                  <p
                    className="
                      font-sans
                      text-[8px]
                      tracking-[3px]
                      text-[#96786c]
                    "
                  >
                    {event.date}
                  </p>

                  {/* ========================================= */}
                  {/* TIME                                      */}
                  {/* ========================================= */}

                  <p
                    className="
                      mt-3
                      font-serif
                      text-[22px]
                      text-[#91594c]
                    "
                  >
                    {event.time}
                  </p>

                  {/* ========================================= */}
                  {/* VENUE                                     */}
                  {/* ========================================= */}

                  <div
                    className="
                      mt-6
                      border-y
                      border-[#895e4d]/15
                      py-5
                    "
                  >
                    <p
                      className="
                        font-sans
                        text-[7px]
                        tracking-[3px]
                        text-[#a06f60]
                      "
                    >
                      VENUE
                    </p>

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[19px]
                        text-[#49342e]
                      "
                    >
                      {event.venue}
                    </p>
                  </div>

                  {/* ========================================= */}
                  {/* DESCRIPTION                               */}
                  {/* ========================================= */}

                  <p
                    className="
                      mx-auto
                      mt-6
                      max-w-[250px]
                      font-sans
                      text-[9px]
                      leading-[2]
                      text-[#80655b]
                    "
                  >
                    {event.description}
                  </p>

                  {/* ========================================= */}
                  {/* HEART                                    */}
                  {/* ========================================= */}

                  <div
                    className="
                      mt-8
                      text-[11px]
                      text-[#a46c5d]/70
                      transition-all
                      duration-700
                      group-hover:scale-125
                    "
                  >
                    ♡
                  </div>

                  {/* ========================================= */}
                  {/* HOVER GLOW                                */}
                  {/* ========================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-x-8
                        top-0
                        h-20
                        bg-gradient-to-b
                        from-[#a66855]/[0.05]
                        to-transparent
                      "
                    />
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </div>
      </div>

      {/* ===================================================== */}
      {/* BOTTOM MESSAGE                                        */}
      {/* ===================================================== */}

      <RevealItem
        direction="up"
        delay={250}
        className="
          relative
          z-10
          mx-auto
          mt-20
          max-w-xl
          text-center
          md:mt-24
        "
      >
        <p
          className="
            font-serif
            text-[24px]
            italic
            text-[#91594c]
          "
        >
          Your presence is our greatest gift
        </p>

        <div
          className="
            mt-5
            text-[10px]
            text-[#a46c5d]
          "
        >
          ✦
        </div>
      </RevealItem>
    </section>
  );
}