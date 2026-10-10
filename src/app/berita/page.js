import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";
import PageTitle from "@/components/PageTitle";
import { beritaTerbaru } from "@/data/berita";

export const metadata = { title: "Berita" };

const kategori = [
  ["Kegiatan", "/kegiatan"],
  ["Prestasi Siswa", "/prestasi/siswa"],
  ["Prestasi Guru", "/prestasi/guru"],
];

export default function BeritaPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-6 py-10 lg:px-10">
      <PageTitle sub="Kegiatan dan prestasi sekolah dalam satu tempat.">Semua Berita</PageTitle>

      <div className="mb-8 flex flex-wrap gap-2">
        <span className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white">Semua</span>
        {kategori.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="rounded-full border border-brand/30 bg-white px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {beritaTerbaru.map((b) => (
          <BeritaCard key={b.id} berita={b} />
        ))}
      </div>
    </div>
  );
}