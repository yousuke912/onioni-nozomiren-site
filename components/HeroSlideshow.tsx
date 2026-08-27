"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/hero-flag.jpg",
    alt: "大旗を掲げて踊る鬼々よろしく魁望蓮の踊り子たち",
    position: "flag",
  },
  {
    src: "/images/hero-red-dance.jpg",
    alt: "赤と白の衣装で力強く演舞する鬼々よろしく魁望蓮の踊り子",
    position: "red",
  },
  {
    src: "/images/hero-lantern.jpg",
    alt: "提灯を手に笑顔で演舞する鬼々よろしく魁望蓮の踊り子",
    position: "lantern",
  },
  {
    src: "/images/hero-smile-wide.png",
    alt: "笑顔で演舞する鬼々よろしく魁望蓮の踊り子",
    position: "smile",
  },
];

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (isPaused || isInteracting || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isInteracting, isPaused]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div
      className="hero-slider"
      role="region"
      aria-roledescription="カルーセル"
      aria-label="鬼々よろしく魁望蓮の演舞写真"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={() => setIsInteracting(false)}
    >
      <div className="hero-slider__viewport">
        {slides.map((slide, index) => (
          <div
            className={`hero-slider__slide hero-slider__slide--${slide.position}${index === activeIndex ? " is-active" : ""}`}
            role="group"
            aria-roledescription="スライド"
            aria-label={`${index + 1} / ${slides.length}`}
            aria-hidden={index !== activeIndex}
            key={slide.src}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              loading="eager"
              fetchPriority={index === 0 ? "high" : "auto"}
              sizes="(max-width: 820px) 100vw, 54vw"
            />
          </div>
        ))}
      </div>

      <div className="hero-slider__controls">
        <p className="hero-slider__count" aria-live="polite">
          <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
          <span>/ {String(slides.length).padStart(2, "0")}</span>
        </p>

        <div className="hero-slider__dots" aria-label="表示する写真を選ぶ">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              aria-label={`${index + 1}枚目の写真を表示`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              key={slide.src}
            >
              <span />
            </button>
          ))}
        </div>

        <div className="hero-slider__buttons">
          <button
            type="button"
            aria-label={isPaused ? "スライドショーを再生" : "スライドショーを一時停止"}
            aria-pressed={isPaused}
            onClick={() => setIsPaused((current) => !current)}
          >
            {isPaused ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 6 9 6-9 6Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 6v12M15 6v12" />
              </svg>
            )}
          </button>
          <button type="button" aria-label="前の写真" onClick={showPrevious}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 5-7 7 7 7" />
            </svg>
          </button>
          <button type="button" aria-label="次の写真" onClick={showNext}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
