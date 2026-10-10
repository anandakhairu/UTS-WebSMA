import PageTitle from "@/components/PageTitle";
import BeritaCard from "@/components/BeritaCard";
import { beritaByKategori } from "@/data/kategori";

export const metadata = { title: "Kegiatan" };

export default function KegiatanPage() {
  const list = beritaByKategori("kegiatan");

  return (
    <div className="mx-auto max-w-[1500px] px-6 py-10 lg:px-10">
      <PageTitle sub="Dokumentasi kegiatan dan agenda sekolah.">Kegiatan Sekolah</PageTitle>
      {list.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-ink/20 bg-white p-8 text-center text-slate-600">
          Belum ada berita kegiatan.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b) => (
            <BeritaCard key={b.id} berita={b} />
          ))}
        </div>
      )}
    </div>
  );
}