import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { beritaList, getBerita } from "@/data/berita";

export function generateStaticParams() {
  return beritaList.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const berita = getBerita(id);
  return { title: berita ? berita.judul : "Berita tidak ditemukan" };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const berita = getBerita(id);
  if (!berita) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <time className="font-semibold text-brand">{berita.tanggal}</time>
      <h1 className="mt-1 font-display text-3xl font-extrabold leading-tight md:text-4xl">{berita.judul}</h1>
      <Image
        src={berita.gambar}
        alt={berita.judul}
        width={900}
        height={500}
        unoptimized
        className="mt-6 w-full rounded-2xl border border-ink/10 object-cover"
      />
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
        {berita.isi.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <Link
        href="/berita"
        className="mt-8 inline-block rounded-lg border border-brand px-5 py-2.5 font-semibold text-brand transition hover:bg-brand hover:text-white"
      >
        Kembali ke Berita
      </Link>
    </article>
  );
}
