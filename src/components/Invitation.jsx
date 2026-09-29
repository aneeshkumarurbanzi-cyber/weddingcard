"use client";

export default function Invitation() {
  return (
    <section
      id="invitation"
      className="relative overflow-hidden bg-[#fffaf4] px-6 py-28 text-[#49352e] md:px-[8%] md:py-40"
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#a66855]/[0.045] blur-[70px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-[380px] w-[380px] rounded-full bg-[#a66855]/[0.045] blur-[70px]" />

      {/* Invitation Card */}
      <div className="relative z-10 mx-auto max-w-4xl border border-[#895e4d]/20 p-3 md:p-5">
        <div className="relative overflow-hidden border border-[#895e4d]/25 px-7 py-20 text-center md:px-20 md:py-28">

          {/* Inner decorative corners */}
          <div className="pointer-events-none absolute left-5 top-5 h-16 w-16 border-l border-t border-[#895e4d]/30 md:left-8 md:top-8" />

          <div className="pointer-events-none absolute right-5 top-5 h-16 w-16 border-r border-t border-[#895e4d]/30 md:right-8 md:top-8" />

          <div className="pointer-events-none absolute bottom-5 left-5 h-16 w-16 border-b border-l border-[#895e4d]/30 md:bottom-8 md:left-8" />

          <div className="pointer-events-none absolute bottom-5 right-5 h-16 w-16 border-b border-r border-[#895e4d]/30 md:bottom-8 md:right-8" />

          {/* Top */}
          <p className="font-sans text-[8px] tracking-[5px] text-[#98776b]">
            TOGETHER WITH THEIR FAMILIES
          </p>

          <div className="my-8 text-[13px] text-[#a46c5d]">
            ✦
          </div>

          {/* Main invitation */}
          <p className="font-serif text-[25px] italic text-[#80655b] md:text-[30px]">
            Request the pleasure of your company
          </p>

          <p className="mt-4 font-sans text-[8px] tracking-[3px] text-[#98776b]">
            AS WE CELEBRATE THE BEGINNING OF
          </p>

          {/* Names */}
          <h2 className="mt-10 font-serif text-[64px] font-normal leading-[0.8] text-[#49342c] md:text-[100px]">
            Groom
            <span className="my-5 block text-[35px] italic text-[#a46c5d] md:text-[45px]">
              &
            </span>
            <span className="block text-[#91594c]">
              Bride 
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

          {/* Date */}
          <p className="font-sans text-[8px] tracking-[4px] text-[#96786c]">
            TWELFTH OF DECEMBER
          </p>

          <p className="mt-3 font-serif text-[32px] text-[#91594c] md:text-[38px]">
            2026
          </p>

          {/* Location */}
          <p className="mt-7 font-sans text-[8px] tracking-[3px] text-[#80655b]">
            KERALA • INDIA
          </p>

          {/* Bottom ornament */}
          <div className="mt-12 text-[12px] text-[#a46c5d]">
            ♡
          </div>

          <p className="mx-auto mt-7 max-w-md font-serif text-[20px] italic leading-[1.5] text-[#80655b]">
            Your presence will make our celebration
            even more meaningful.
          </p>
        </div>
      </div>

      {/* Bottom text */}
      <div className="relative z-10 mt-16 text-center">
        <p className="font-sans text-[7px] tracking-[4px] text-[#98776b]">
          WITH LOVE & GRATITUDE
        </p>
      </div>
    </section>
  );
}