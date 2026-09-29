"use client";

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#f6e9dd] px-6 py-28 text-[#49352e] md:px-[8%] md:py-40"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#a66855]/[0.05] blur-[70px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-[#a66855]/[0.05] blur-[70px]" />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-5 font-sans text-[8px] tracking-[5px] text-[#98776b]">
          FIND US
        </p>

        <h2 className="font-serif text-[58px] font-normal leading-[0.8] text-[#49342c] md:text-[100px]">
          The place
          <span className="mt-4 block italic text-[#91594c]">
            to celebrate
          </span>
        </h2>

        <div className="my-9 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#895e4d]/30" />

          <span className="text-xs text-[#a46c5d]">
            ✦
          </span>

          <span className="h-px w-16 bg-[#895e4d]/30" />
        </div>

        <p className="mx-auto max-w-lg font-sans text-[10px] leading-[2] tracking-wide text-[#80655b]">
          We would love to celebrate this beautiful day
          surrounded by the people who mean the most to us.
        </p>
      </div>

      {/* Location */}
      <div className="relative z-10 mx-auto mt-20 max-w-5xl md:mt-28">
        <div className="grid overflow-hidden border border-[#895e4d]/20 bg-[#fffaf4] md:grid-cols-2">

          {/* ============================== */}
          {/* REAL GOOGLE MAP */}
          {/* ============================== */}

          <div className="relative min-h-[380px] overflow-hidden md:min-h-[500px]">

            <iframe
              title="Wedding Venue Location"
              src="https://www.google.com/maps?q=Kerala,India&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Elegant map overlay frame */}
            <div className="pointer-events-none absolute inset-5 border border-white/60" />

          </div>

          {/* ============================== */}
          {/* VENUE DETAILS */}
          {/* ============================== */}

          <div className="flex items-center justify-center px-8 py-14 text-center md:px-14 md:py-20">
            <div className="max-w-sm">

              <p className="font-sans text-[7px] tracking-[4px] text-[#a06f60]">
                THE WEDDING VENUE
              </p>

              <h3 className="mt-6 font-serif text-[48px] font-normal leading-none text-[#49342c] md:text-[58px]">
                Our
                <span className="block italic text-[#91594c]">
                  Celebration
                </span>
              </h3>

              <div className="my-8 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#895e4d]/25" />

                <span className="text-[9px] text-[#a46c5d]">
                  ✦
                </span>

                <span className="h-px w-10 bg-[#895e4d]/25" />
              </div>

              {/* Venue */}
              <p className="font-serif text-[24px] text-[#49342e]">
                Wedding Celebration Hall
              </p>

              <p className="mt-4 font-sans text-[9px] leading-[2] text-[#80655b]">
                Kerala, India
                <br />
                The exact venue details will be shared here.
              </p>

              {/* Date */}
              <div className="mt-8 border-y border-[#895e4d]/15 py-5">
                <p className="font-sans text-[7px] tracking-[3px] text-[#a06f60]">
                  DATE
                </p>

                <p className="mt-2 font-serif text-[21px] text-[#91594c]">
                  12 December 2026
                </p>
              </div>

              {/* Directions */}
              <a
                href="https://www.google.com/maps?q=Kerala,India"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center border border-[#895e4d]/30 px-8 py-4 font-sans text-[7px] tracking-[3px] text-[#49342e] transition-all duration-500 hover:bg-[#49342e] hover:text-[#fffaf4]"
              >
                GET DIRECTIONS
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom message */}
      <div className="relative z-10 mt-16 text-center">
        <p className="font-serif text-[23px] italic text-[#91594c]">
          We cannot wait to celebrate with you
        </p>

        <div className="mt-5 text-[10px] text-[#a46c5d]">
          ♡
        </div>
      </div>
    </section>
  );
}