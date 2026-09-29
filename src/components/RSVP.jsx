"use client";

import { useState } from "react";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="relative overflow-hidden bg-[#fffaf4] px-6 py-28 text-[#49352e] md:px-[8%] md:py-40"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-44 -top-44 h-[420px] w-[420px] rounded-full bg-[#a66855]/[0.045] blur-[70px]" />

      <div className="pointer-events-none absolute -bottom-44 -right-44 h-[420px] w-[420px] rounded-full bg-[#a66855]/[0.045] blur-[70px]" />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-5 font-sans text-[8px] tracking-[5px] text-[#98776b]">
          WE WOULD LOVE TO HEAR FROM YOU
        </p>

        <h2 className="font-serif text-[58px] font-normal leading-[0.8] text-[#49342c] md:text-[100px]">
          Will you
          <span className="mt-4 block italic text-[#91594c]">
            join us?
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
          Please let us know if you will be celebrating
          with us. Your presence means the world to us.
        </p>
      </div>

      {/* RSVP CARD */}
      <div className="relative z-10 mx-auto mt-20 max-w-2xl md:mt-28">
        <div className="border border-[#895e4d]/20 bg-[#fdf6ef] p-3 md:p-5">
          <div className="border border-[#895e4d]/20 px-7 py-12 md:px-14 md:py-16">

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block font-sans text-[7px] tracking-[3px] text-[#a06f60]"
                  >
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full border-b border-[#895e4d]/25 bg-transparent px-0 py-3 font-serif text-[21px] text-[#49342e] outline-none placeholder:text-[#96786c]/50 focus:border-[#91594c]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block font-sans text-[7px] tracking-[3px] text-[#a06f60]"
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full border-b border-[#895e4d]/25 bg-transparent px-0 py-3 font-serif text-[21px] text-[#49342e] outline-none placeholder:text-[#96786c]/50 focus:border-[#91594c]"
                  />
                </div>

                {/* Attendance */}
                <div>
                  <p className="mb-4 font-sans text-[7px] tracking-[3px] text-[#a06f60]">
                    WILL YOU BE JOINING US?
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        required
                        className="peer sr-only"
                      />

                      <span className="flex items-center justify-center border border-[#895e4d]/25 px-4 py-4 font-sans text-[8px] tracking-[2px] text-[#80655b] transition-all duration-300 peer-checked:border-[#91594c] peer-checked:bg-[#91594c] peer-checked:text-[#fffaf4]">
                        JOYFULLY ACCEPT
                      </span>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="attendance"
                        value="no"
                        className="peer sr-only"
                      />

                      <span className="flex items-center justify-center border border-[#895e4d]/25 px-4 py-4 font-sans text-[8px] tracking-[2px] text-[#80655b] transition-all duration-300 peer-checked:border-[#91594c] peer-checked:bg-[#91594c] peer-checked:text-[#fffaf4]">
                        REGRETFULLY DECLINE
                      </span>
                    </label>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label
                    htmlFor="guests"
                    className="mb-3 block font-sans text-[7px] tracking-[3px] text-[#a06f60]"
                  >
                    NUMBER OF GUESTS
                  </label>

                  <select
                    id="guests"
                    name="guests"
                    defaultValue="1"
                    className="w-full border-b border-[#895e4d]/25 bg-transparent px-0 py-3 font-serif text-[21px] text-[#49342e] outline-none focus:border-[#91594c]"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block font-sans text-[7px] tracking-[3px] text-[#a06f60]"
                  >
                    A LITTLE MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Leave us a message..."
                    className="w-full resize-none border-b border-[#895e4d]/25 bg-transparent px-0 py-3 font-serif text-[19px] text-[#49342e] outline-none placeholder:text-[#96786c]/50 focus:border-[#91594c]"
                  />
                </div>

                {/* Submit */}
                <div className="pt-3 text-center">
                  <button
                    type="submit"
                    className="border border-[#895e4d]/30 bg-[#49342e] px-10 py-4 font-sans text-[7px] tracking-[3px] text-[#fffaf4] transition-all duration-500 hover:bg-[#91594c]"
                  >
                    SEND RSVP
                  </button>
                </div>
              </form>
            ) : (
              /* SUCCESS */
              <div className="py-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#895e4d]/25 font-serif text-2xl text-[#91594c]">
                  ♡
                </div>

                <p className="mt-8 font-sans text-[7px] tracking-[4px] text-[#a06f60]">
                  THANK YOU
                </p>

                <h3 className="mt-5 font-serif text-[48px] italic text-[#91594c]">
                  We will see you there
                </h3>

                <p className="mx-auto mt-6 max-w-sm font-sans text-[9px] leading-[2] text-[#80655b]">
                  Your response has been received.
                  We are so happy to celebrate this special
                  day with you.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom ornament */}
      <div className="relative z-10 mt-16 text-center">
        <p className="font-serif text-[22px] italic text-[#91594c]">
          With love, Groom &amp; Bride 
        </p>

        <div className="mt-5 text-[10px] text-[#a46c5d]">
          ✦
        </div>
      </div>
    </section>
  );
}