import Link from "next/link";

const styles = {
  primary: "bg-accent text-ink hover:bg-orange-400",
  secondary: "border border-white/70 text-white hover:bg-white/15",
  solid: "bg-brand text-white hover:bg-brand-dark",
};

export default function Button({ href, children, variant = "solid" }) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg px-5 py-2.5 font-semibold transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
