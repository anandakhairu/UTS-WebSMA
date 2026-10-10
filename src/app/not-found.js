import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-3 text-slate-600">Alamat yang kamu buka tidak ada atau sudah dipindahkan.</p>
      <div className="mt-6"><Button href="/berita">Kembali ke Berita</Button></div>
    </div>
  );
}
