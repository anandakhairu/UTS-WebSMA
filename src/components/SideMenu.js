"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideMenu({ title, items }) {
  const pathname = usePathname();

  return (
    <nav aria-label={title} className="lg:sticky lg:top-28">
      <h2 className="font-display text-xl font-bold leading-[1.5] text-ink">
        <span className="box-decoration-clone bg-accent px-2 py-0.5">{title}</span>
      </h2>
      <div className="mt-3 h-px bg-accent" />
      <ul className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:rounded-2xl lg:border lg:border-ink/10 lg:bg-white lg:p-3 lg:pb-3">
        {items.map((i) => {
          const active = pathname === i.href;
          return (
            <li key={i.href} className="shrink-0">
              <Link
                href={i.href}
                className={`block whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition lg:whitespace-normal ${
                  active
                    ? "bg-brand text-white"
                    : "bg-white text-ink hover:bg-mist hover:text-brand lg:bg-transparent"
                }`}
              >
                {i.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}