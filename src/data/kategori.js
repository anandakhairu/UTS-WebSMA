import { beritaTerbaru } from "./berita";

export const kategoriLabel = {
  kegiatan: "Kegiatan",
  "prestasi-siswa": "Prestasi Siswa",
  "prestasi-guru": "Prestasi Guru",
};

// Berita yang tidak punya baris "kategori" otomatis dianggap Kegiatan
export const kategoriDari = (b) => b.kategori ?? "kegiatan";

export const beritaByKategori = (k) => beritaTerbaru.filter((b) => kategoriDari(b) === k);