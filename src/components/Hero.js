"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { slides } from "@/data/slides";
import { school } from "@/data/school";
import Button from "./Button";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const total = slides.length;

  const go = (step) => setIndex((i) => (i + step + total) % total);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(timer);
  }, [paused, total]);

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(diff) > 50) go(diff < 0 ? 1 : -1);
    touchStart.current = null;
  };

  const current = slides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Banner sekolah"
      className="relative isolate overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={s.gambar} aria-hidden={i !== index} className="relative h-[540px] w-full shrink-0 sm:h-[600px] lg:h-[min(720px,calc(100svh-5.5rem))]">
            <Image src={s.gambar} alt={s.alt} fill priority={i === 0} unoptimized className="object-cover object-center"/>
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/10" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="pointer-events-auto mx-auto w-full max-w-[1500px] px-6 pb-10 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-white/90">
              <span className="h-1 w-10 rounded-full bg-accent" />
              {current.label}
            </p>
            <h1 className={`font-display font-extrabold leading-tight text-white drop-shadow-sm ${
              index === 0
                ? "max-w-3xl text-4xl sm:text-5xl lg:text-6xl"
                : "max-w-xl text-2xl sm:text-3xl lg:text-3xl"
            }`}>
              {current.judul}
            </h1>
            {index === 0 && (
              <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-white/85 sm:text-lg">
                {school.tagline}
                <span className="mx-2 text-accent">·</span>
                Manggar, Belitung Timur
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {index === 0 ? (
                <>
                  <Button href="/about/profil" variant="primary">Tentang Sekolah</Button>
                  <Button href="/berita" variant="secondary">Lihat Berita</Button>
                </>
              ) : (
                <Button href={current.href || "/berita"} variant="primary">
                  {current.tombol || "Baca selengkapnya"}
                </Button>
              )}
            </div>
            {index === 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/25 pt-5 text-sm text-white/75">
                <span><strong className="text-white">{school.akreditasi}</strong> Terakreditasi</span>
                <span><strong className="text-white">{school.berdiri}</strong> Berdiri</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Slide sebelumnya"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-ink/35 text-2xl text-white backdrop-blur-sm transition hover:bg-ink/75 sm:left-6"
      >
        ‹
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Slide berikutnya"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-ink/35 text-2xl text-white backdrop-blur-sm transition hover:bg-ink/75 sm:right-6"
      >
        ›
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/20 bg-ink/40 px-3 py-2 backdrop-blur-sm">
        {slides.map((s, i) => (
          <button
            key={s.gambar}
            onClick={() => setIndex(i)}
            aria-label={`Ke slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-accent" : "w-2.5 bg-white/60 hover:bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}
