"use client";

import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

export default function OpeningEnvelope({ onOpen }) {
  const [opened, setOpened] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [visible, setVisible] = useState(true);

  const timerRef = useRef(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (visible) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [visible]);

  const handleOpen = () => {
    if (opened || transitioning) return;

    setOpened(true);

    /*
      Timeline

      0.0s  - seal starts disappearing
      0.0s  - envelope flap starts opening
      0.3s  - paper begins rising
      2.8s  - burgundy transition begins
      4.7s  - opening screen disappears
    */

    timerRef.current = setTimeout(() => {
      setTransitioning(true);

      timerRef.current = setTimeout(() => {
        setVisible(false);

        requestAnimationFrame(() => {
          onOpen?.();
        });
      }, 1900);
    }, 2800);
  };

  if (!visible) {
    return null;
  }

  return (
    <section
      className={[
        "opening-envelope",
        opened ? "opening-envelope--opened" : "",
        transitioning ? "opening-envelope--transitioning" : "",
      ].join(" ")}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="opening-envelope__background" />

      <div className="opening-envelope__glow opening-envelope__glow--top" />
      <div className="opening-envelope__glow opening-envelope__glow--bottom" />

      {/* Corner decorations */}
      <div className="opening-envelope__corner opening-envelope__corner--tl" />
      <div className="opening-envelope__corner opening-envelope__corner--tr" />
      <div className="opening-envelope__corner opening-envelope__corner--bl" />
      <div className="opening-envelope__corner opening-envelope__corner--br" />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="opening-envelope__content">
        <div className="opening-envelope__eyebrow">
          <span />
          TOGETHER WITH THEIR FAMILIES
          <span />
        </div>

        <h1 className="opening-envelope__title">
          <span className="opening-envelope__title-small">
            We are
          </span>

          <span className="opening-envelope__title-main">
            getting married
          </span>
        </h1>

        <div className="opening-envelope__date">
          <span>12</span>
          <i />
          <span>12</span>
          <i />
          <span>2026</span>
        </div>

        {/* =================================================
            LARGE ENVELOPE
        ================================================= */}

        <div className="opening-envelope__wrapper">
          <div className="opening-envelope__ground-shadow" />

          <div className="opening-envelope__envelope">
            {/* Invitation paper */}
            <div className="opening-envelope__paper">
              <div className="opening-envelope__paper-top">
                THE WEDDING
              </div>

              <div className="opening-envelope__paper-ornament">
                <span />
                <b>✦</b>
                <span />
              </div>

              <h2>
                Groom
                <em>&amp;</em>
                Bride 
              </h2>

              <div className="opening-envelope__paper-date">
                12 • 12 • 2026
              </div>

              <div className="opening-envelope__paper-bottom">
                KERALA · INDIA
              </div>
            </div>

            {/* Envelope body */}
            <div className="opening-envelope__back" />

            {/* Left flap */}
            <div className="opening-envelope__flap opening-envelope__flap--left" />

            {/* Right flap */}
            <div className="opening-envelope__flap opening-envelope__flap--right" />

            {/* Bottom flap */}
            <div className="opening-envelope__flap opening-envelope__flap--bottom" />

            {/* Top flap */}
            <div className="opening-envelope__flap opening-envelope__flap--top">
              <div className="opening-envelope__flap-highlight" />
            </div>

            {/* Wax seal */}
            <button
              type="button"
              className={[
                "opening-envelope__seal",
                opened
                  ? "opening-envelope__seal--opened"
                  : "",
              ].join(" ")}
              onClick={handleOpen}
              disabled={opened}
              aria-label="Open wedding invitation"
            >
              <span className="opening-envelope__seal-ring">
                <Heart
                  size={25}
                  strokeWidth={1.4}
                  fill="currentColor"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Instruction */}
        <div
          className={[
            "opening-envelope__instruction",
            opened
              ? "opening-envelope__instruction--hidden"
              : "",
          ].join(" ")}
        >
          <span className="opening-envelope__instruction-line" />

          <span>CLICK THE SEAL TO OPEN</span>

          <span className="opening-envelope__instruction-line" />
        </div>
      </div>

      {/* =====================================================
          BOTTOM LABEL
      ===================================================== */}

      <div className="opening-envelope__bottom">
        YOUR INVITATION AWAITS
      </div>

      {/* =====================================================
          LONG TRANSITION
      ===================================================== */}

      <div className="opening-envelope__transition">
        <div className="opening-envelope__transition-content">
          <div className="opening-envelope__transition-line" />

          <span>
           Groom
            <i>&amp;</i>
            BRIDE 
          </span>

          <div className="opening-envelope__transition-line" />
        </div>
      </div>

      <style jsx>{`
        /* =====================================================
           ROOT
        ===================================================== */

        .opening-envelope {
          position: fixed;
          inset: 0;

          width: 100vw;
          height: 100dvh;

          z-index: 2147483647;

          overflow: hidden;
          isolation: isolate;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #4a1d28;

          font-family: "Montserrat", sans-serif;
        }

        /* =====================================================
           FULLY OPAQUE BACKGROUND
        ===================================================== */

        .opening-envelope__background {
          position: absolute;
          inset: 0;

          z-index: -20;

          background:
            radial-gradient(
              circle at 50% 38%,
              #fffefa 0%,
              #fbf4eb 43%,
              #f2e3d4 100%
            );
        }

        .opening-envelope__background::after {
          content: "";

          position: absolute;
          inset: 0;

          opacity: 0.2;

          background-image:
            radial-gradient(
              rgba(79, 48, 38, 0.15) 0.5px,
              transparent 0.5px
            );

          background-size: 5px 5px;

          pointer-events: none;
        }

        /* =====================================================
           GLOWS
        ===================================================== */

        .opening-envelope__glow {
          position: absolute;

          border-radius: 999px;

          pointer-events: none;

          filter: blur(90px);

          z-index: -10;
        }

        .opening-envelope__glow--top {
          width: 500px;
          height: 500px;

          top: -260px;
          left: 50%;

          transform: translateX(-50%);

          background: rgba(190, 145, 88, 0.13);
        }

        .opening-envelope__glow--bottom {
          width: 600px;
          height: 350px;

          bottom: -200px;
          left: 50%;

          transform: translateX(-50%);

          background: rgba(91, 30, 43, 0.08);
        }

        /* =====================================================
           CORNER DETAILS
        ===================================================== */

        .opening-envelope__corner {
          position: absolute;

          width: 55px;
          height: 55px;

          opacity: 0.45;

          pointer-events: none;
        }

        .opening-envelope__corner::before,
        .opening-envelope__corner::after {
          content: "";

          position: absolute;

          background: #a17b50;
        }

        .opening-envelope__corner::before {
          width: 1px;
          height: 55px;
        }

        .opening-envelope__corner::after {
          width: 55px;
          height: 1px;
        }

        .opening-envelope__corner--tl {
          top: 25px;
          left: 25px;
        }

        .opening-envelope__corner--tr {
          top: 25px;
          right: 25px;

          transform: rotate(90deg);
        }

        .opening-envelope__corner--bl {
          bottom: 25px;
          left: 25px;

          transform: rotate(-90deg);
        }

        .opening-envelope__corner--br {
          right: 25px;
          bottom: 25px;

          transform: rotate(180deg);
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .opening-envelope__content {
          position: relative;
          z-index: 10;

          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 25px 20px 80px;

          transition:
            opacity 1s ease,
            transform 1.2s
              cubic-bezier(0.22, 1, 0.36, 1);
        }

        .opening-envelope--transitioning
          .opening-envelope__content {
          opacity: 0;

          transform:
            translateY(-30px)
            scale(0.98);
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .opening-envelope__eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 11px;

          margin: 0 0 15px;

          font-size: 8px;
          font-weight: 500;

          letter-spacing: 0.34em;

          color: #967d70;

          text-transform: uppercase;

          white-space: nowrap;
        }

        .opening-envelope__eyebrow span {
          width: 20px;
          height: 1px;

          background: #b79a78;

          opacity: 0.7;
        }

        /* =====================================================
           TITLE
        ===================================================== */

        .opening-envelope__title {
          margin: 0;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-weight: 400;

          line-height: 0.84;

          color: #4a1d28;
        }

        .opening-envelope__title-small {
          font-size: clamp(46px, 5vw, 70px);

          letter-spacing: -0.025em;
        }

        .opening-envelope__title-main {
          margin-top: 10px;

          font-size: clamp(40px, 4.5vw, 60px);

          font-style: italic;

          color: #76513f;

          letter-spacing: -0.02em;
        }

        /* =====================================================
           DATE
        ===================================================== */

        .opening-envelope__date {
          display: flex;
          align-items: center;

          gap: 11px;

          margin-top: 19px;

          color: #8c705d;

          font-size: 9px;
          font-weight: 500;

          letter-spacing: 0.24em;
        }

        .opening-envelope__date i {
          width: 3px;
          height: 3px;

          border-radius: 50%;

          background: #b08b61;
        }

        /* =====================================================
           LARGE ENVELOPE WRAPPER
        ===================================================== */

        .opening-envelope__wrapper {
          position: relative;

          width: 520px;
          height: 365px;

          margin-top: 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          perspective: 1800px;
        }

        /* =====================================================
           GROUND SHADOW
        ===================================================== */

        .opening-envelope__ground-shadow {
          position: absolute;

          bottom: 25px;
          left: 50%;

          width: 430px;
          height: 38px;

          transform: translateX(-50%);

          border-radius: 50%;

          background: rgba(55, 25, 31, 0.2);

          filter: blur(22px);

          transition:
            transform 2s ease,
            opacity 2s ease;
        }

        .opening-envelope--opened
          .opening-envelope__ground-shadow {
          transform:
            translateX(-50%)
            scale(1.3);

          opacity: 0.05;
        }

        /* =====================================================
           ENVELOPE BODY
        ===================================================== */

        .opening-envelope__envelope {
          position: relative;

          width: 500px;
          height: 320px;

          transform-style: preserve-3d;

          filter:
            drop-shadow(
              0 28px 35px
              rgba(63, 25, 34, 0.17)
            );
        }

        /* =====================================================
           INVITATION PAPER
        ===================================================== */

        .opening-envelope__paper {
          position: absolute;

          top: 14px;
          left: 50%;

          width: 84%;
          height: 92%;

          transform:
            translateX(-50%)
            translateY(0);

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          padding: 30px;

          background:
            linear-gradient(
              180deg,
              #fffefa 0%,
              #f8eee2 100%
            );

          border:
            1px solid
            rgba(150, 117, 83, 0.18);

          box-shadow:
            0 10px 30px
            rgba(61, 28, 34, 0.1);

          z-index: 1;

          transition:
            transform 2.6s
              cubic-bezier(0.22, 1, 0.36, 1);
        }

        .opening-envelope--opened
          .opening-envelope__paper {
          transform:
            translateX(-50%)
            translateY(-225px);
        }

        .opening-envelope__paper-top {
          font-size: 8px;

          letter-spacing: 0.3em;

          color: #97775f;
        }

        .opening-envelope__paper-ornament {
          display: flex;
          align-items: center;

          gap: 8px;

          margin: 10px 0;
        }

        .opening-envelope__paper-ornament span {
          width: 28px;
          height: 1px;

          background: #b4946e;
        }

        .opening-envelope__paper-ornament b {
          font-size: 10px;

          font-weight: 400;

          color: #a17b50;
        }

        .opening-envelope__paper h2 {
          margin: 0;

          display: flex;
          align-items: center;

          gap: 9px;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 38px;

          font-weight: 400;

          color: #4a1d28;
        }

        .opening-envelope__paper h2 em {
          font-size: 25px;

          font-style: italic;

          color: #a17b50;
        }

        .opening-envelope__paper-date {
          margin-top: 10px;

          font-size: 8px;

          letter-spacing: 0.2em;

          color: #8c705d;
        }

        .opening-envelope__paper-bottom {
          margin-top: 15px;

          font-size: 7px;

          letter-spacing: 0.27em;

          color: #a18b7d;
        }

        /* =====================================================
           ENVELOPE BACK
        ===================================================== */

        .opening-envelope__back {
          position: absolute;
          inset: 0;

          border-radius: 3px;

          background:
            linear-gradient(
              145deg,
              #8f2c40 0%,
              #7a2034 50%,
              #601827 100%
            );

          z-index: 2;
        }

        /* =====================================================
           LEFT FLAP
        ===================================================== */

        .opening-envelope__flap--left {
          position: absolute;

          top: 0;
          left: 0;

          width: 0;
          height: 0;

          border-top:
            160px solid transparent;

          border-bottom:
            160px solid transparent;

          border-left:
            250px solid #792338;

          z-index: 4;
        }

        /* =====================================================
           RIGHT FLAP
        ===================================================== */

        .opening-envelope__flap--right {
          position: absolute;

          top: 0;
          right: 0;

          width: 0;
          height: 0;

          border-top:
            160px solid transparent;

          border-bottom:
            160px solid transparent;

          border-right:
            250px solid #792338;

          z-index: 4;
        }

        /* =====================================================
           BOTTOM FLAP
        ===================================================== */

        .opening-envelope__flap--bottom {
          position: absolute;

          left: 0;
          bottom: 0;

          width: 0;
          height: 0;

          border-left:
            250px solid transparent;

          border-right:
            250px solid transparent;

          border-bottom:
            185px solid #651b2c;

          z-index: 5;
        }

        /* =====================================================
           TOP FLAP
        ===================================================== */

        .opening-envelope__flap--top {
          position: absolute;

          top: 0;
          left: 0;

          width: 0;
          height: 0;

          border-left:
            250px solid transparent;

          border-right:
            250px solid transparent;

          border-top:
            185px solid #982c41;

          transform-origin: top center;

          transform-style: preserve-3d;

          z-index: 8;

          backface-visibility: hidden;

          transition:
            transform 2.4s
              cubic-bezier(0.22, 1, 0.36, 1);
        }

        .opening-envelope--opened
          .opening-envelope__flap--top {
          transform: rotateX(-178deg);
        }

        .opening-envelope__flap-highlight {
          position: absolute;

          left: -245px;
          top: -180px;

          width: 490px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(226, 190, 135, 0.5),
              transparent
            );
        }

        /* =====================================================
           WAX SEAL
        ===================================================== */

        .opening-envelope__seal {
          position: absolute;

          top: 50%;
          left: 50%;

          width: 76px;
          height: 76px;

          transform:
            translate(-50%, -50%)
            translateZ(35px);

          padding: 0;

          border: 0;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #f6d99e;

          background:
            radial-gradient(
              circle at 35% 28%,
              #b74b61 0%,
              #8f2e42 42%,
              #641827 100%
            );

          box-shadow:
            0 9px 22px
              rgba(60, 20, 30, 0.38),
            inset 0 1px 3px
              rgba(255, 255, 255, 0.22);

          cursor: pointer;

          z-index: 20;

          transition:
            transform 1.2s
              cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.9s ease;
        }

        .opening-envelope__seal::before {
          content: "";

          position: absolute;
          inset: 6px;

          border:
            1px solid
            rgba(245, 214, 163, 0.58);

          border-radius: 50%;
        }

        .opening-envelope__seal::after {
          content: "";

          position: absolute;
          inset: 11px;

          border:
            1px solid
            rgba(245, 214, 163, 0.2);

          border-radius: 50%;
        }

        .opening-envelope__seal-ring {
          position: relative;

          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .opening-envelope__seal:hover {
          transform:
            translate(-50%, -50%)
            translateZ(35px)
            scale(1.07);
        }

        .opening-envelope__seal--opened {
          transform:
            translate(-50%, -50%)
            translateZ(35px)
            scale(0)
            rotate(180deg);

          opacity: 0;

          pointer-events: none;
        }

        /* =====================================================
           INSTRUCTION
        ===================================================== */

        .opening-envelope__instruction {
          display: flex;
          align-items: center;

          gap: 12px;

          margin-top: 5px;

          font-size: 7px;
          font-weight: 500;

          letter-spacing: 0.3em;

          color: #9b8275;

          transition:
            opacity 0.8s ease,
            transform 0.9s ease;
        }

        .opening-envelope__instruction-line {
          width: 24px;
          height: 1px;

          background: #bba28f;

          opacity: 0.7;
        }

        .opening-envelope__instruction--hidden {
          opacity: 0;

          transform: translateY(10px);
        }

        /* =====================================================
           BOTTOM TEXT
        ===================================================== */

        .opening-envelope__bottom {
          position: absolute;

          left: 50%;
          bottom: 27px;

          transform: translateX(-50%);

          font-size: 6px;
          font-weight: 500;

          letter-spacing: 0.34em;

          color: #a58c7d;

          white-space: nowrap;

          z-index: 10;

          transition:
            opacity 0.8s ease,
            transform 0.9s ease;
        }

        .opening-envelope--transitioning
          .opening-envelope__bottom {
          opacity: 0;

          transform:
            translateX(-50%)
            translateY(12px);
        }

        /* =====================================================
           LONG BURGUNDY TRANSITION
        ===================================================== */

        .opening-envelope__transition {
          position: absolute;

          inset: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #3b1720;

          transform: translateY(100%);

          z-index: 100;

          pointer-events: none;

          transition:
            transform 1.9s
              cubic-bezier(
                0.77,
                0,
                0.175,
                1
              );
        }

        .opening-envelope--transitioning
          .opening-envelope__transition {
          transform: translateY(0);
        }

        .opening-envelope__transition-content {
          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 18px;

          opacity: 0;

          transform: translateY(20px);

          transition:
            opacity 0.8s ease 0.35s,
            transform 1s ease 0.35s;
        }

        .opening-envelope--transitioning
          .opening-envelope__transition-content {
          opacity: 1;

          transform: translateY(0);
        }

        .opening-envelope__transition-line {
          width: 70px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #caa56f,
              transparent
            );
        }

        .opening-envelope__transition-content span {
          display: flex;
          align-items: center;

          gap: 9px;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 19px;

          letter-spacing: 0.17em;

          color: #e8cfaa;
        }

        .opening-envelope__transition-content i {
          font-size: 14px;

          font-style: italic;

          color: #caa56f;
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .opening-envelope__corner {
            width: 38px;
            height: 38px;
          }

          .opening-envelope__corner::before {
            height: 38px;
          }

          .opening-envelope__corner::after {
            width: 38px;
          }

          .opening-envelope__corner--tl {
            top: 18px;
            left: 18px;
          }

          .opening-envelope__corner--tr {
            top: 18px;
            right: 18px;
          }

          .opening-envelope__corner--bl {
            bottom: 18px;
            left: 18px;
          }

          .opening-envelope__corner--br {
            right: 18px;
            bottom: 18px;
          }

          .opening-envelope__content {
            padding: 20px 15px 70px;
          }

          .opening-envelope__eyebrow {
            gap: 7px;

            margin-bottom: 13px;

            font-size: 6px;

            letter-spacing: 0.24em;
          }

          .opening-envelope__eyebrow span {
            width: 13px;
          }

          .opening-envelope__title-small {
            font-size: 43px;
          }

          .opening-envelope__title-main {
            margin-top: 8px;

            font-size: 37px;
          }

          .opening-envelope__date {
            margin-top: 16px;

            gap: 8px;

            font-size: 7px;
          }

          /* Smaller mobile wrapper */
          .opening-envelope__wrapper {
            width: 350px;
            height: 255px;

            margin-top: 16px;
          }

          .opening-envelope__envelope {
            width: 340px;
            height: 215px;
          }

          .opening-envelope__paper {
            padding: 20px;
          }

          .opening-envelope__paper h2 {
            font-size: 27px;
          }

          .opening-envelope__paper h2 em {
            font-size: 18px;
          }

          .opening-envelope__paper-top {
            font-size: 6px;
          }

          .opening-envelope__paper-date {
            font-size: 6px;
          }

          .opening-envelope__paper-bottom {
            font-size: 5px;
          }

          .opening-envelope__flap--left {
            border-top-width: 107px;
            border-bottom-width: 108px;
            border-left-width: 170px;
          }

          .opening-envelope__flap--right {
            border-top-width: 107px;
            border-bottom-width: 108px;
            border-right-width: 170px;
          }

          .opening-envelope__flap--bottom {
            border-left-width: 170px;
            border-right-width: 170px;
            border-bottom-width: 125px;
          }

          .opening-envelope__flap--top {
            border-left-width: 170px;
            border-right-width: 170px;
            border-top-width: 125px;
          }

          .opening-envelope__flap-highlight {
            left: -165px;
            top: -121px;
            width: 330px;
          }

          .opening-envelope__seal {
            width: 58px;
            height: 58px;
          }

          .opening-envelope__seal svg {
            width: 20px;
            height: 20px;
          }

          .opening-envelope--opened
            .opening-envelope__paper {
            transform:
              translateX(-50%)
              translateY(-155px);
          }

          .opening-envelope__instruction {
            gap: 8px;

            margin-top: 3px;

            font-size: 6px;

            letter-spacing: 0.22em;
          }

          .opening-envelope__instruction-line {
            width: 14px;
          }

          .opening-envelope__bottom {
            bottom: 20px;

            font-size: 5px;

            letter-spacing: 0.26em;
          }

          .opening-envelope__transition-content span {
            font-size: 15px;
          }
        }

        /* =====================================================
           SMALL PHONES
        ===================================================== */

        @media (max-width: 380px) {
          .opening-envelope__title-small {
            font-size: 38px;
          }

          .opening-envelope__title-main {
            font-size: 33px;
          }

          .opening-envelope__wrapper {
            transform: scale(0.88);

            margin-top: 5px;
          }

          .opening-envelope__instruction {
            margin-top: -5px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .opening-envelope,
          .opening-envelope *,
          .opening-envelope::before,
          .opening-envelope::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}