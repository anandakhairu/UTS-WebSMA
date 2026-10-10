"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { school } from "@/data/school";
import { menu } from "@/data/menu";

function flatten(children) {
  return children.flatMap((c) =>
    c.children
      ? [{ ...c, heading: true }, ...c.children.map((x) => ({ ...x, indent: true }))]
      : [c]
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sosmed = school.sosmed.filter((s) => s.url);

  const isActive = (item) => {
    if (item.match) return item.match.some((m) => pathname.startsWith(m));
    return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  };

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSub(null);
  };

  return (
    <header className="sticky top-0 z-50 shadow-xl">
      {/* Baris info (hilang saat halaman di-scroll) */}
      <div
        className={`hidden overflow-hidden bg-brand-dark text-xs text-white/85 transition-all duration-300 md:block ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-2 lg:px-10">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="flex items-center gap-1.5">
              <Icon name="lokasi" className="h-4 w-4 text-accent" />
              {school.alamat}
            </span>
            {school.telepon && (
              <span className="flex items-center gap-1.5">
                <Icon name="telepon" className="h-4 w-4 text-accent" />
                {school.telepon}
              </span>
            )}
            {school.email && (
              <span className="flex items-center gap-1.5">
                <Icon name="email" className="h-4 w-4 text-accent" />
                {school.email}
              </span>
            )}
          </div>
          {sosmed.length > 0 && (
            <div className="flex items-center gap-1">
              {sosmed.map((s) => (
                <a
                  key={s.nama}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.nama}
                  title={s.nama}
                  className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-accent hover:text-ink"
                >
                  <Icon name={s.nama.toLowerCase()} className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Baris utama */}
      <div className="bg-gradient-to-r from-ink via-ink to-brand-dark text-white">
        <nav className="mx-auto flex max-w-[1500px] items-stretch justify-between px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-3 py-2" onClick={closeAll}>
            <Image
              src="/slides/logo.jpg"
              alt="Logo sekolah"
              width={56}
              height={56}
              unoptimized
              className={`rounded-full bg-white object-contain transition-all duration-300 ${
                scrolled ? "h-11 w-11" : "h-14 w-14"
              }`}
            />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold md:text-xl">{school.nama}</span>
              <span className="hidden text-xs font-semibold tracking-wide text-accent sm:block">
                {school.tagline}
              </span>
            </span>
          </Link>

          <button
            className="my-3 rounded-lg border border-white/40 px-4 text-sm font-semibold hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Buka menu"
          >
            {mobileOpen ? "Tutup" : "Menu"}
          </button>

          {/* Menu desktop */}
          <ul className="hidden items-stretch gap-1 md:flex">
            {menu.map((item) => {
              const sub = item.children ? flatten(item.children) : null;
              const twoCols = sub && sub.length > 6;
              const open = openMenu === item.label;
              return (
                <li
                  key={item.label}
                  className="relative flex items-center"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className={`flex items-center gap-1.5 rounded-full px-5 py-2 font-semibold transition ${
                      isActive(item)
                        ? "bg-accent text-ink shadow-md"
                        : "text-white/90 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {sub && (
                      <span aria-hidden="true" className={`text-[9px] transition-transform ${open ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    )}
                  </Link>

                  {sub && open && (
                    <div className={`absolute right-0 top-full z-50 ${twoCols ? "w-[34rem]" : "w-64"}`}>
                      <div className="animate-dropdown overflow-hidden rounded-b-2xl bg-white text-ink shadow-2xl ring-1 ring-ink/10">
                        <div className="h-1 bg-gradient-to-r from-accent via-brand to-logo-blue" />
                        <ul className={`grid gap-x-3 p-3 ${twoCols ? "grid-cols-2" : ""}`}>
                          {sub.map((s) =>
                            s.heading ? (
                              <li key={s.label} className="px-3 pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-brand">
                                {s.label}
                              </li>
                            ) : (
                              <li key={s.href}>
                                <Link
                                  href={s.href}
                                  onClick={closeAll}
                                  className={`block rounded-lg border-l-4 border-transparent py-2 pr-3 text-sm font-semibold text-ink transition hover:border-accent hover:bg-mist hover:text-brand ${
                                    s.indent ? "pl-6" : "pl-3"
                                  }`}
                                >
                                  {s.label}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Menu HP */}
        {mobileOpen && (
          <ul className="flex flex-col gap-1 border-t border-white/15 px-6 py-3 md:hidden">
            {menu.map((item) => {
              const sub = item.children ? flatten(item.children) : null;
              return (
                <li key={item.label}>
                  {sub ? (
                    <>
                      <button
                        onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                        aria-expanded={mobileSub === item.label}
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-semibold hover:bg-white/10"
                      >
                        {item.label}
                        <span aria-hidden="true">{mobileSub === item.label ? "▲" : "▼"}</span>
                      </button>
                      {mobileSub === item.label && (
                        <ul className="mb-2 ml-4 border-l-2 border-accent/60 pl-2">
                          {sub.map((s) =>
                            s.heading ? (
                              <li key={s.label} className="px-3 pt-2 text-xs font-bold uppercase tracking-wider text-accent">
                                {s.label}
                              </li>
                            ) : (
                              <li key={s.href}>
                                <Link
                                  href={s.href}
                                  onClick={closeAll}
                                  className={`block rounded-lg py-2 pr-3 text-sm font-semibold hover:bg-white/10 ${
                                    s.indent ? "pl-6" : "pl-3"
                                  }`}
                                >
                                  {s.label}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className={`block rounded-lg px-4 py-3 font-semibold ${
                        isActive(item) ? "bg-accent text-ink" : "hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        )}
        <div className="h-[3px] bg-gradient-to-r from-accent via-brand to-logo-blue" />
      </div>
    </header>
  );
}