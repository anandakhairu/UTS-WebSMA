import SideMenu from "@/components/SideMenu";
import { menu } from "@/data/menu";

export default function PrestasiLayout({ children }) {
  const berita = menu.find((m) => m.label === "Berita");
  const items = berita.children.find((c) => c.label === "Prestasi").children;

  return (
    <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[280px_1fr] lg:gap-12 lg:px-10 lg:py-10">
      <aside className="min-w-0">
        <SideMenu title="Prestasi" items={items} />
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}