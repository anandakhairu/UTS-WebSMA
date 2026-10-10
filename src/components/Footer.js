import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { school } from "@/data/school";

export default function Footer() {
  const sosmed = school.sosmed.filter((s) => s.url);

  return (
    <footer className="mt-16 overflow-hidden text-white">
      <div className="h-1.5 bg-gradient-to-r from-accent via-brand to-logo-blue" />
      <div className="relative bg-gradient-to-br from-ink via-brand-dark to-brand">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1500px] gap-10 px-6 py-14 md:grid-cols-3 lg:gap-16 lg:px-10 lg:py-16">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/slides/logo.jpg"
                alt="Logo sekolah"
                width={56}
                height={56}
                unoptimized
                className="h-16 w-16 rounded-full object-contain"
              />
              <p className="font-display text-xl font-bold leading-tight sm:text-2xl">{school.nama}</p>
            </div>
            <p className="mt-5 max-w-sm text-sm font-semibold uppercase tracking-[0.16em] text-accent">{school.tagline}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
              Informasi, kegiatan, dan prestasi keluarga besar {school.singkat}.
            </p>

            {sosmed.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {sosmed.map((s) => (
                  <a
                    key={s.nama}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.nama}
                    title={s.nama}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 transition duration-200 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-ink"
                  >
                    <Icon name={s.nama.toLowerCase()} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="font-display text-xl font-bold">Hubungi Kami</h3>
            <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/85">
              <li className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                <Icon name="lokasi" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{school.alamat}</span>
              </li>
              {school.telepon && (
                <li className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                  <Icon name="telepon" className="h-5 w-5 shrink-0 text-accent" />
                  <span>{school.telepon}</span>
                </li>
              )}
              {school.email && (
                <li className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                  <Icon name="email" className="h-5 w-5 shrink-0 text-accent" />
                  <span>{school.email}</span>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold">Jelajahi</h3>
            <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
            <ul className="mt-5 space-y-2 text-sm text-white/85">
              {[
                ["/", "Home"],
                ["/about", "Profil Sekolah"],
                ["/berita", "Berita"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:translate-x-1 hover:border-accent/50 hover:bg-white/10 hover:text-accent">
                    <span>{label}</span>
                    <span aria-hidden="true" className="text-accent transition group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative border-t border-white/15 bg-black/10 px-6 py-5 text-center text-sm text-white/65">
          <p>© 2026 {school.nama}</p>
          <p className="mt-1 text-xs text-white/45">Membangun generasi unggul dan berkarakter.</p>
        </div>
      </div>
    </footer>
  );
}