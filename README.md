# Website Profil SMA (Next.js)

## Menjalankan
```bash
npm install
npm run dev     # buka http://localhost:3000
```

## Menyesuaikan dengan SMA kamu
1. Edit `src/data/school.js` (nama, tagline, visi, misi, alamat, dll).
2. Edit `src/data/berita.js` (minimal 6 berita; `id` jadi URL `/berita/[id]`).
3. Ganti foto di `public/slides/` (banner beranda, atur di `src/data/slides.js`) dan `public/berita1..6`. Kalau memakai .jpg/.png, ubah nama file di data .
4. Ubah warna di `src/app/globals.css` (blok `@theme`).

## Deploy ke Vercel
1. Upload project ke GitHub.
2. Masuk ke vercel.com, pilih Add New > Project, import repo, lalu Deploy.
3. Salin alamat website ke file `alamat-website.md`.
