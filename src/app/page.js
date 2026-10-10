import Link from "next/link";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import BeritaCard from "@/components/BeritaCard";
import { school } from "@/data/school";
import { beritaTerbaru } from "@/data/berita";

const aksesCepat = [
  ["Profil Sekolah", "Video dan sejarah singkat", "/about/profil", "border-accent"],
  ["Ekstrakurikuler", "Kenali kegiatan siswa", "/about/ekstrakurikuler", "border-brand"],
  ["Prestasi", "Siswa dan guru berprestasi", "/prestasi/siswa", "border-logo-blue"],
  ["Kegiatan", "Agenda dan dokumentasi", "/kegiatan", "border-accent"],
];

export default function Home() {
  const terbaru = beritaTerbaru.slice(0, 3);

  return (
    <>
      <Hero />

      <section aria-label="Jelajahi sekolah" className="relative z-10 mx-auto -mt-10 grid max-w-6xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {aksesCepat.map(([judul, ket, href, warna], index) => (
          <Link
            key={href}
            href={href}
            className={`group rounded-2xl border border-ink/10 border-t-4 ${warna} bg-white p-5 shadow-lg shadow-ink/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-bold tracking-widest text-brand/60">0{index + 1}</span>
              <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-mist text-brand transition group-hover:bg-accent group-hover:text-ink">→</span>
            </div>
            <p className="mt-4 font-display text-lg font-bold text-ink">{judul}</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{ket}</p>
          </Link>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="grid gap-10 rounded-3xl border border-ink/10 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10 lg:gap-14">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand">Tentang sekolah</p>
            <SectionTitle>Tumbuh, belajar, berprestasi.</SectionTitle>
            <p className="leading-relaxed text-slate-700">{school.profil}</p>
            <dl className="mt-7 grid grid-cols-3 gap-3 text-center">
              {[
                ["Berdiri", school.berdiri],
                ["Akreditasi", school.akreditasi],
                ["Siswa", school.siswa],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-mist p-3">
                  <dd className="font-display text-lg font-bold text-brand sm:text-xl">{v}</dd>
                  <dt className="mt-1 text-xs text-slate-500 sm:text-sm">{k}</dt>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <Button href="/about/profil">Baca profil sekolah</Button>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-ink/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-14">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand">Dari kepala sekolah</p>
            <SectionTitle>Sambutan</SectionTitle>
            <p className="leading-relaxed text-slate-700">{school.sambutan}</p>
            <p className="mt-6 font-display text-lg font-bold text-ink">{school.kepsek}</p>
            <p className="text-sm text-slate-500">Kepala Sekolah</p>
            <div className="mt-5">
              <Button href="/about/kepala-sekolah">Profil kepala sekolah</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-white/60 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand">Cerita dari sekolah</p>
              <SectionTitle sub="Kabar terbaru dari kegiatan dan prestasi sekolah.">Berita Terbaru</SectionTitle>
            </div>
            <div className="mb-6">
              <Button href="/berita" variant="solid">Semua berita</Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {terbaru.map((b) => (
              <BeritaCard key={b.id} berita={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}