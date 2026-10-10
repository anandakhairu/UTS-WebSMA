import Image from "next/image";
import Link from "next/link";
import { kategoriDari, kategoriLabel } from "@/data/kategori";

export default function BeritaCard({ berita }) {
  const kat = kategoriDari(berita);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <Image
          src={berita.gambar}
          alt={berita.judul}
          width={600}
          height={340}
          unoptimized
          className="h-48 w-full object-cover object-top"
        />
        <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink shadow">
          {kategoriLabel[kat]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time className="text-sm font-semibold text-brand">{berita.tanggal}</time>
        <h3 className="mt-1 font-display text-xl font-bold leading-snug text-ink">{berita.judul}</h3>
        <p className="mt-2 flex-1 text-slate-600">{berita.ringkasan}</p>
        <Link
          href={`/berita/${berita.id}`}
          className="mt-4 inline-block self-start rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}