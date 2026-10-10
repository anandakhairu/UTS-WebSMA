import SideMenu from "@/components/SideMenu";
import { menu } from "@/data/menu";
import { school } from "@/data/school";

export default function AboutLayout({ children }) {
  const items = menu.find((m) => m.label === "About").children;

  return (
    <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[280px_1fr] lg:gap-12 lg:px-10 lg:py-10">
      <aside className="min-w-0">
        <SideMenu title={`Tentang ${school.singkat}`} items={items} />
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}