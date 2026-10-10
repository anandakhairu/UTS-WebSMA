export const menu = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Profil Sekolah", href: "/about/profil" },
      { label: "Visi & Misi", href: "/about/visi-misi" },
      { label: "Profil Kepala Sekolah", href: "/about/kepala-sekolah" },
      { label: "Fasilitas", href: "/about/fasilitas" },
      { label: "Ekstrakurikuler", href: "/about/ekstrakurikuler" },
      { label: "Alamat", href: "/about/alamat" },
    ],
  },
  {
    label: "Berita",
    href: "/berita",
    match: ["/berita", "/kegiatan", "/prestasi"],
    children: [
      { label: "Semua Berita", href: "/berita" },
      { label: "Kegiatan", href: "/kegiatan" },
      {
        label: "Prestasi",
        children: [
          { label: "Prestasi Siswa", href: "/prestasi/siswa" },
          { label: "Prestasi Guru", href: "/prestasi/guru" },
        ],
      },
    ],
  },
];