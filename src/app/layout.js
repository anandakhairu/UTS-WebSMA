import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { school } from "@/data/school";

const display = Fraunces({ subsets: ["latin"], variable: "--f-display" });
const body = Public_Sans({ subsets: ["latin"], variable: "--f-body" });

export const metadata = {
  title: { default: school.nama, template: `%s | ${school.singkat}` },
  description: `Website resmi ${school.nama}. ${school.tagline}.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${body.variable} flex min-h-screen flex-col bg-mist font-body text-ink`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
