import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import Foto from "@/components/Foto";
import Icon from "@/components/Icon";
import { school } from "@/data/school";
import { profil, logo, kepsek, fasilitas, ekskul, peta } from "@/data/about";

function KartuFoto({ items, kategori, pengantar }) {
  const warnaVisual = [
    "bg-orange-50 text-orange-700",
    "bg-blue-50 text-blue-700",
    "bg-violet-50 text-violet-700",
  ];

  return (
    <>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-2xl leading-relaxed text-slate-600">{pengantar}</p>
        <span className="rounded-full bg-brand/10 px-4 py-2 text-sm font-bold text-brand">
          {items.length} {kategori}
        </span>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((it, index) => (
          <article
            key={it.nama}
            className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
          >
            {it.gambar ? (
              <div className="overflow-hidden">
                <Foto
                  src={it.gambar}
                  alt={it.nama}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className={`relative flex aspect-[16/10] items-end justify-between overflow-hidden p-5 ${warnaVisual[index % warnaVisual.length]}`}>
                <span aria-hidden="true" className="absolute -right-5 -top-12 h-40 w-40 rounded-full border-[24px] border-current/10" />
                <span className="relative text-xs font-bold uppercase tracking-[0.18em] opacity-75">{kategori}</span>
                <span className="relative font-display text-6xl font-extrabold leading-none opacity-20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            )}
            <div className="border-t-2 border-accent p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1 w-6 rounded-full bg-brand transition-all group-hover:w-10" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand/70">{kategori}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-ink">{it.nama}</h3>
              <p className="mt-2 text-left leading-relaxed text-slate-600">{it.deskripsi}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

const halaman = {
  profil: {
    judul: "Profil Sekolah",
    isi: () => (
      <>
        <section className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-ink/10 px-5 py-4 sm:px-7">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand">Mengenal {school.singkat}</p>
          </div>
          <div className="aspect-video overflow-hidden bg-ink">
            {profil.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${profil.youtubeId}`}
                title={`Video profil ${school.nama}`}
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full items-center justify-center p-6 text-center text-white/80">
                Video profil belum diisi. Isi youtubeId di src/data/about.js
              </div>
            )}
          </div>
          <div className="p-5 sm:p-7">
            <h2 className="font-display text-2xl font-bold text-ink">Sekolah untuk tumbuh dan berprestasi</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
              {profil.teks.map((t, i) => <p key={i} className="text-left">{t}</p>)}
            </div>
          </div>
        </section>

        <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            ["Berdiri", school.berdiri, "bg-orange-50 text-orange-700"],
            ["Akreditasi", school.akreditasi, "bg-violet-50 text-violet-700"],
            ["Jumlah Siswa", school.siswa, "bg-blue-50 text-blue-700"],
          ].map(([k, v, warna]) => (
            <div key={k} className={`rounded-2xl border border-ink/5 p-5 ${warna}`}>
              <dt className="text-sm font-semibold opacity-80">{k}</dt>
              <dd className="mt-1 font-display text-2xl font-extrabold">{v}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-14">
          <div className="mb-6">
            <SectionTitle>Sejarah Singkat</SectionTitle>
            <p className="-mt-3 text-slate-600">Perjalanan {school.singkat} dalam mendampingi pendidikan di Belitung Timur.</p>
          </div>
          <ol className="relative space-y-4 border-l-2 border-brand/20 pl-6">
            {school.sejarah.map((t, i) => (
              <li key={i} className="relative rounded-xl border border-ink/10 bg-white p-4 sm:p-5">
                <span aria-hidden="true" className="absolute -left-[33px] top-5 h-4 w-4 rounded-full border-4 border-mist bg-accent" />
                <span className="mb-2 inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                  Bagian {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-left leading-relaxed text-slate-700">{t}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <SectionTitle>Logo Smansa</SectionTitle>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm md:grid md:grid-cols-[240px_1fr]">
            <div className="flex items-center justify-center bg-mist p-8">
              <Foto src={logo.gambar} alt="Logo sekolah" className="h-40 w-40 object-contain sm:h-48 sm:w-48" />
            </div>
            <div className="p-5 sm:p-7">
              <p className="text-left leading-relaxed text-slate-700">{logo.intro}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {logo.makna.map((m) => (
                  <li key={m.bagian} className="rounded-xl border-l-4 border-brand bg-mist p-4">
                    <p className="font-bold text-ink">{m.bagian}</p>
                    <p className="mt-1 text-left text-sm leading-relaxed text-slate-600">{m.arti}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    ),
  },

  "visi-misi": {
    judul: "Visi & Misi",
    isi: () => (
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink to-brand p-7 text-white shadow-lg sm:p-9">
          <span aria-hidden="true" className="absolute -right-12 -top-16 h-48 w-48 rounded-full border-[28px] border-white/10" />
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Arah dan tujuan sekolah</p>
            <h2 className="mt-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-white/70">Visi</h2>
            <p className="mt-3 max-w-3xl font-display text-2xl font-bold leading-snug sm:text-3xl">{school.visi}</p>
          </div>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="font-display text-2xl font-bold text-ink">Misi</h2>
            <p className="mt-1 text-slate-600">Langkah nyata untuk mewujudkan visi sekolah.</p>
            <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {school.misi.map((m, i) => (
              <li key={i} className="group flex gap-4 rounded-xl border border-ink/10 bg-white p-4 transition hover:border-brand/30 hover:shadow-md sm:p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mist font-display font-bold text-brand transition group-hover:bg-accent group-hover:text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-left leading-relaxed text-slate-700">{m}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    ),
  },

  "kepala-sekolah": {
    judul: "Profil Kepala Sekolah",
    isi: () => (
      <div className="space-y-8">
        <section className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
          <div className="grid md:grid-cols-[240px_1fr]">
            <div className="relative min-h-72 overflow-hidden bg-gradient-to-br from-brand to-ink md:min-h-full">
              <Foto
                src={kepsek.foto}
                alt={kepsek.nama}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand">Pimpinan Sekolah</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-ink sm:text-3xl">{kepsek.nama}</h2>
              <p className="mt-2 inline-flex w-fit rounded-full bg-accent/15 px-4 py-1.5 text-sm font-bold text-brand">
                {kepsek.jabatan}
              </p>
              <div className="mt-6 h-1 w-12 rounded-full bg-accent" />
              <p className="mt-5 text-left leading-relaxed text-slate-700">{kepsek.sambutan}</p>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="font-display text-2xl font-bold text-ink">Riwayat</h2>
            <p className="mt-1 text-slate-600">Perjalanan pendidikan dan pengabdian.</p>
            <div className="mt-3 h-1 w-12 rounded-full bg-accent" />
          </div>
          <ol className="relative space-y-4 border-l-2 border-brand/20 pl-6">
            {kepsek.riwayat.map((r) => (
              <li key={r.teks} className="relative rounded-xl border border-ink/10 bg-white p-4 transition hover:border-brand/30 hover:shadow-md sm:p-5">
                <span aria-hidden="true" className="absolute -left-[33px] top-5 h-4 w-4 rounded-full border-4 border-mist bg-accent" />
                <p className="text-sm font-bold uppercase tracking-wider text-brand">{r.tahun}</p>
                <p className="mt-1 text-left leading-relaxed text-slate-700">{r.teks}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    ),
  },

  fasilitas: {
    judul: "Fasilitas",
    isi: () => (
      <KartuFoto
        items={fasilitas}
        kategori="fasilitas"
        pengantar={`Ruang dan sarana yang mendukung kegiatan belajar seluruh warga ${school.singkat}.`}
      />
    ),
  },
  ekstrakurikuler: {
    judul: "Ekstrakurikuler",
    isi: () => (
      <KartuFoto
        items={ekskul}
        kategori="ekstrakurikuler"
        pengantar="Temukan minat, kembangkan bakat, dan belajar berkolaborasi bersama teman."
      />
    ),
  },

  alamat: {
    judul: "Alamat",
    isi: () => (
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
        <div className="bg-gradient-to-br from-ink to-brand px-6 py-7 text-white sm:px-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-ink">
              <Icon name="lokasi" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">Kunjungi Kami</p>
              <h2 className="mt-1 font-display text-xl font-bold sm:text-2xl">{school.nama}</h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-white/85">{school.alamat}</p>
            </div>
          </div>
        </div>

        {(school.telepon || school.email) && (
          <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6">
            {school.telepon && (
              <a
                href={`tel:${school.telepon.replace(/[^\d+]/g, "")}`}
                className="flex min-w-0 items-center gap-3 rounded-xl border border-ink/10 bg-mist p-4 transition hover:border-brand/40 hover:bg-brand/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-sm">
                  <Icon name="telepon" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Telepon</span>
                  <span className="mt-0.5 block break-words font-semibold text-ink">{school.telepon}</span>
                </span>
              </a>
            )}
            {school.email && (
              <a
                href={`mailto:${school.email}`}
                className="flex min-w-0 items-center gap-3 rounded-xl border border-ink/10 bg-mist p-4 transition hover:border-brand/40 hover:bg-brand/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-sm">
                  <Icon name="email" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Email</span>
                  <span className="mt-0.5 block break-all font-semibold text-ink">{school.email}</span>
                </span>
              </a>
            )}
          </div>
        )}

        {peta.embed && (
          <iframe
            src={peta.embed}
            title="Peta lokasi sekolah"
            loading="lazy"
            className="h-80 w-full border-0"
          />
        )}
      </div>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(halaman).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: halaman[slug]?.judul ?? "About" };
}

export default async function AboutSubPage({ params }) {
  const { slug } = await params;
  const h = halaman[slug];
  if (!h) notFound();

  return (
    <div>
      <PageTitle>{h.judul}</PageTitle>
      {h.isi()}
    </div>
  );
}