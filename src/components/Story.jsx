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
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
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

export default function Story() {
  return (
    <section
      id="story"
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#fffaf4]
        to-[#f6e9dd]
        px-[6%]
        py-[120px]
        text-[#49352e]
        sm:py-[150px]
        lg:px-[3%]
        lg:py-[170px]
      "
    >
      {/* ===================================================== */}
      {/* BACKGROUND GLOW                                       */}
      {/* ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[200px]
          -top-[180px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#a66855]/[0.06]
          blur-[80px]
          motion-safe:animate-pulse
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[180px]
          -right-[180px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#a66855]/[0.06]
          blur-[80px]
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
          max-w-[700px]
          text-center
        "
      >
        <p
          className="
            mb-5
            text-[8px]
            tracking-[5px]
            text-[#98776b]
          "
        >
          OUR JOURNEY
        </p>

        <h2
          className="
            font-serif
            text-[58px]
            font-normal
            leading-[0.8]
            text-[#49342c]
            sm:text-[75px]
            md:text-[90px]
            lg:text-[100px]
          "
        >
          Every love story

          <span
            className="
              mt-4
              block
              italic
              text-[#91594c]
            "
          >
            has a beginning
          </span>
        </h2>

        {/* Ornament */}

        <div
          className="
            my-8
            flex
            items-center
            justify-center
            gap-[15px]
            sm:my-9
          "
        >
          <span
            className="
              h-px
              w-[55px]
              bg-[#895e4d]/30
              sm:w-[65px]
            "
          />

          <span
            className="
              text-[12px]
              text-[#a46c5d]
            "
          >
            ✦
          </span>

          <span
            className="
              h-px
              w-[55px]
              bg-[#895e4d]/30
              sm:w-[65px]
            "
          />
        </div>

        <p
          className="
            mx-auto
            max-w-[500px]
            text-[9px]
            leading-[1.9]
            tracking-[0.5px]
            text-[#80655b]
            sm:text-[10px]
            sm:leading-[2]
          "
        >
          From a simple hello to a lifetime of memories,
          these are a few moments that brought us here.
        </p>
      </RevealItem>

      {/* ===================================================== */}
      {/* TIMELINE                                              */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-[90px]
          max-w-[1050px]
          sm:mt-[120px]
        "
      >
        {/* ================================================= */}
        {/* CENTER / MOBILE TIMELINE LINE                    */}
        {/* ================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-[24px]
            top-0
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#895e4d]/30
            to-transparent
            sm:left-1/2
            sm:-translate-x-1/2
          "
        />

        {/* ================================================= */}
        {/* STORY 01                                           */}
        {/* ================================================= */}

        <article
          className="
            relative
            mb-[100px]
            grid
            grid-cols-1
            sm:grid-cols-2
          "
        >
          {/* Number */}

          <RevealItem
            delay={0}
            direction="up"
            className="
              absolute
              left-[24px]
              top-0
              z-20
              -translate-x-1/2
              sm:left-1/2
            "
          >
            <div
              className="
                flex
                h-[46px]
                w-[46px]
                items-center
                justify-center
                rounded-full
                border
                border-[#895e4d]/25
                bg-[#fffaf4]
                font-serif
                text-[17px]
                text-[#91594c]
                shadow-[0_8px_30px_rgba(80,40,30,0.05)]
                transition-transform
                duration-700
                hover:scale-110
              "
            >
              01
            </div>
          </RevealItem>

          {/* Text - FROM LEFT */}

          <RevealItem
            delay={150}
            direction="left"
            className="
              order-2
              ml-[65px]
              pt-[70px]
              text-left
              sm:order-1
              sm:ml-0
              sm:w-[75%]
              sm:justify-self-end
              sm:pr-[90px]
              sm:pt-[55px]
              sm:text-right
            "
          >
            <p
              className="
                mb-[18px]
                text-[7px]
                tracking-[4px]
                text-[#a06f60]
              "
            >
              THE BEGINNING
            </p>

            <h3
              className="
                font-serif
                text-[44px]
                font-normal
                leading-[0.8]
                text-[#49342c]
                sm:text-[52px]
              "
            >
              A beautiful

              <span
                className="
                  mt-[10px]
                  block
                  italic
                  text-[#91594c]
                "
              >
                first hello
              </span>
            </h3>

            <div
              className="
                mt-[22px]
                text-[8px]
                tracking-[4px]
                text-[#96786c]
              "
            >
              2022
            </div>

            <p
              className="
                mt-[25px]
                max-w-[300px]
                text-[9px]
                leading-[2]
                text-[#80655b]
                sm:ml-auto
              "
            >
              Sometimes the most beautiful chapters begin
              with the simplest of moments. One conversation,
              one smile, and a feeling neither of us expected.
            </p>
          </RevealItem>

          {/* Image - FROM RIGHT */}

          <RevealItem
            delay={300}
            direction="right"
            className="
              order-1
              ml-[65px]
              mt-[65px]
              sm:order-2
              sm:ml-0
              sm:mt-0
              sm:self-center
            "
          >
            <div
              className="
                group
                relative
                h-[300px]
                w-full
                overflow-hidden
                border
                border-[#895e4d]/20
                sm:h-[320px]
                sm:w-[75%]
              "
            >
              <img
                src="/images/story-1.jpg"
                alt="The beginning of our story"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  ease-out
                  group-hover:scale-105
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[12px]
                  border
                  border-white/45
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#3b1720]/10
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />
            </div>
          </RevealItem>
        </article>

        {/* ================================================= */}
        {/* STORY 02                                           */}
        {/* ================================================= */}

        <article
          className="
            relative
            mb-[100px]
            grid
            grid-cols-1
            sm:grid-cols-2
          "
        >
          {/* Number */}

          <RevealItem
            delay={0}
            direction="up"
            className="
              absolute
              left-[24px]
              top-0
              z-20
              -translate-x-1/2
              sm:left-1/2
            "
          >
            <div
              className="
                flex
                h-[46px]
                w-[46px]
                items-center
                justify-center
                rounded-full
                border
                border-[#895e4d]/25
                bg-[#fffaf4]
                font-serif
                text-[17px]
                text-[#91594c]
                shadow-[0_8px_30px_rgba(80,40,30,0.05)]
                transition-transform
                duration-700
                hover:scale-110
              "
            >
              02
            </div>
          </RevealItem>

          {/* Image - FROM LEFT */}

          <RevealItem
            delay={150}
            direction="left"
            className="
              ml-[65px]
              mt-[65px]
              sm:ml-0
              sm:mt-0
              sm:self-center
            "
          >
            <div
              className="
                group
                relative
                h-[300px]
                w-full
                overflow-hidden
                border
                border-[#895e4d]/20
                sm:ml-auto
                sm:h-[320px]
                sm:w-[75%]
              "
            >
              <img
                src="/images/story-2.jpg"
                alt="Our journey together"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  ease-out
                  group-hover:scale-105
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[12px]
                  border
                  border-white/45
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#3b1720]/10
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />
            </div>
          </RevealItem>

          {/* Text - FROM RIGHT */}

          <RevealItem
            delay={300}
            direction="right"
            className="
              ml-[65px]
              pt-[40px]
              text-left
              sm:w-[75%]
              sm:pl-[90px]
              sm:pt-[55px]
            "
          >
            <p
              className="
                mb-[18px]
                text-[7px]
                tracking-[4px]
                text-[#a06f60]
              "
            >
              THE JOURNEY
            </p>

            <h3
              className="
                font-serif
                text-[44px]
                font-normal
                leading-[0.8]
                text-[#49342c]
                sm:text-[52px]
              "
            >
              Growing

              <span
                className="
                  mt-[10px]
                  block
                  italic
                  text-[#91594c]
                "
              >
                together
              </span>
            </h3>

            <div
              className="
                mt-[22px]
                text-[8px]
                tracking-[4px]
                text-[#96786c]
              "
            >
              2023 — 2025
            </div>

            <p
              className="
                mt-[25px]
                max-w-[300px]
                text-[9px]
                leading-[2]
                text-[#80655b]
              "
            >
              Through adventures, celebrations, quiet evenings
              and countless memories, our two paths slowly
              became one.
            </p>
          </RevealItem>
        </article>

        {/* ================================================= */}
        {/* STORY 03                                           */}
        {/* ================================================= */}

        <article
          className="
            relative
            grid
            grid-cols-1
            sm:grid-cols-2
          "
        >
          {/* Number */}

          <RevealItem
            delay={0}
            direction="up"
            className="
              absolute
              left-[24px]
              top-0
              z-20
              -translate-x-1/2
              sm:left-1/2
            "
          >
            <div
              className="
                flex
                h-[46px]
                w-[46px]
                items-center
                justify-center
                rounded-full
                border
                border-[#895e4d]/25
                bg-[#fffaf4]
                font-serif
                text-[17px]
                text-[#91594c]
                shadow-[0_8px_30px_rgba(80,40,30,0.05)]
                transition-transform
                duration-700
                hover:scale-110
              "
            >
              03
            </div>
          </RevealItem>

          {/* Text - FROM LEFT */}

          <RevealItem
            delay={150}
            direction="left"
            className="
              order-2
              ml-[65px]
              pt-[70px]
              text-left
              sm:order-1
              sm:ml-0
              sm:w-[75%]
              sm:justify-self-end
              sm:pr-[90px]
              sm:pt-[55px]
              sm:text-right
            "
          >
            <p
              className="
                mb-[18px]
                text-[7px]
                tracking-[4px]
                text-[#a06f60]
              "
            >
              THE PROMISE
            </p>

            <h3
              className="
                font-serif
                text-[44px]
                font-normal
                leading-[0.8]
                text-[#49342c]
                sm:text-[52px]
              "
            >
              Forever

              <span
                className="
                  mt-[10px]
                  block
                  italic
                  text-[#91594c]
                "
              >
                starts here
              </span>
            </h3>

            <div
              className="
                mt-[22px]
                text-[8px]
                tracking-[4px]
                text-[#96786c]
              "
            >
              2026
            </div>

            <p
              className="
                mt-[25px]
                max-w-[300px]
                text-[9px]
                leading-[2]
                text-[#80655b]
                sm:ml-auto
              "
            >
              And now, surrounded by the people we love most,
              we begin the next chapter of our story —
              together, forever.
            </p>
          </RevealItem>

          {/* Image - FROM RIGHT */}

          <RevealItem
            delay={300}
            direction="right"
            className="
              order-1
              ml-[65px]
              mt-[65px]
              sm:order-2
              sm:ml-0
              sm:mt-0
              sm:self-center
            "
          >
            <div
              className="
                group
                relative
                h-[300px]
                w-full
                overflow-hidden
                border
                border-[#895e4d]/20
                sm:h-[320px]
                sm:w-[75%]
              "
            >
              <img
                src="/images/story-3.jpg"
                alt="Our forever begins"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  ease-out
                  group-hover:scale-105
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[12px]
                  border
                  border-white/45
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#3b1720]/10
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />
            </div>
          </RevealItem>
        </article>
      </div>

      {/* ===================================================== */}
      {/* BOTTOM ORNAMENT                                      */}
      {/* ===================================================== */}

      <RevealItem
        direction="up"
        delay={200}
        className="
          relative
          z-10
          mt-24
          flex
          items-center
          justify-center
          gap-3
          opacity-60
          sm:mt-28
        "
      >
        <span className="h-px w-12 bg-[#895e4d]/30" />

        <span className="font-serif text-[14px] text-[#a46c5d]">
          ✦
        </span>

        <span className="h-px w-12 bg-[#895e4d]/30" />
      </RevealItem>
    </section>
  );
}