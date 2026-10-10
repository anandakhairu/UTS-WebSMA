import SideMenu from "@/components/SideMenu";
import { menu } from "@/data/menu";

export default function PrestasiLayout({ children }) {
  const berita = menu.find((m) => m.label === "Berita");
  const items = berita.children.find((c) => c.label === "Prestasi").children;

  return (
    <div className="mx-auto grid max-w-[1500px] gap-8 px-6 py-10 lg:grid-cols-[280px_1fr] lg:gap-12 lg:px-10">
      <aside>
        <SideMenu title="Prestasi" items={items} />
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}