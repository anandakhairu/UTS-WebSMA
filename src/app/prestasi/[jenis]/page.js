import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import BeritaCard from "@/components/BeritaCard";
import { beritaByKategori } from "@/data/kategori";

const data = {
  siswa: { judul: "Prestasi Siswa", kategori: "prestasi-siswa" },
  guru: { judul: "Prestasi Guru", kategori: "prestasi-guru" },
};

export function generateStaticParams() {
  return Object.keys(data).map((jenis) => ({ jenis }));
}

export async function generateMetadata({ params }) {
  const { jenis } = await params;
  return { title: data[jenis]?.judul ?? "Prestasi" };
}

export default async function PrestasiJenisPage({ params }) {
  const { jenis } = await params;
  const d = data[jenis];
  if (!d) notFound();

  const list = beritaByKategori(d.kategori);

  return (
    <div>
      <PageTitle>{d.judul}</PageTitle>
      {list.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-ink/20 bg-white p-8 text-center text-slate-600">
          Belum ada berita di kategori ini.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((b) => (
            <BeritaCard key={b.id} berita={b} />
          ))}
        </div>
      )}
    </div>
  );
}