import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project for Cars",
  description: "Проверенные авто в Душанбе",
};

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-[16px] h-[64px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-[8px]">
          <span className="w-[36px] h-[36px] rounded-[12px] bg-slate-900 flex items-center justify-center">
            <img
              src="/icons/car-amber.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
          </span>
          <span className="font-bold text-slate-900 text-[16px]">
            Project for Cars
          </span>
        </Link>

        <nav className="hidden md:flex gap-[32px] text-[14px] font-medium text-gray-600">
          <Link href="/" className="hover:text-slate-900">
            Главная
          </Link>
          <Link href="/katalog" className="hover:text-slate-900">
            Каталог
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            Контакты
          </Link>
        </nav>

        <a
          href="tel:+992900000000"
          className="hidden md:flex items-center gap-[8px] text-[14px] font-semibold"
        >
          <span className="w-[32px] h-[32px] rounded-[50%] bg-gray-100 flex items-center justify-center">
            <img
              src="/icons/phone-dark.png"
              alt=""
              className="w-[16px] h-[16px]"
            />
          </span>
          +992 900 00 00 00
        </a>

        <Link
          href="/katalog"
          className="md:hidden w-[36px] h-[36px] rounded-[8px] bg-gray-100 flex items-center justify-center"
        >
          <img
            src="/icons/menu.png"
            alt="Меню"
            className="w-[20px] h-[20px]"
          />
        </Link>
      </div>

      <div className="md:hidden border-t border-gray-100 px-[16px] py-[8px] flex gap-[8px]">
        <Link
          href="/"
          className="flex-1 text-center py-[8px] rounded-[12px] text-[14px] font-medium text-gray-700"
        >
          Главная
        </Link>
        <Link
          href="/katalog"
          className="flex-1 text-center py-[8px] rounded-[12px] text-[14px] font-medium text-gray-700"
        >
          Каталог
        </Link>
        <Link
          href="/about"
          className="flex-1 text-center py-[8px] rounded-[12px] text-[14px] font-medium text-gray-700"
        >
          Контакты
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-auto">
      <div className="max-w-[1200px] mx-auto px-[16px] py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] pb-[32px] border-b border-slate-800">
          <div>
            <Link href="/" className="flex items-center gap-[8px] mb-[12px]">
              <span className="w-[36px] h-[36px] rounded-[12px] bg-amber-400 flex items-center justify-center">
                <img
                  src="/icons/car-dark.png"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
              </span>
              <span className="font-bold text-white text-[16px]">
                Project for Cars
              </span>
            </Link>
            <p className="text-[14px] text-gray-400">
              Проверенные авто в Душанбе
            </p>
          </div>

          <div className="flex md:flex-col gap-[20px] md:gap-[8px] text-[14px] font-medium text-white">
            <Link href="/">Главная</Link>
            <Link href="/katalog">Каталог</Link>
            <Link href="/about">Контакты</Link>
          </div>

          <div className="space-y-[8px] text-[14px]">
            <div className="flex items-center gap-[8px]">
              <img
                src="/icons/phone-amber.png"
                alt=""
                className="w-[16px] h-[16px]"
              />
              <span>+992 900 00 00 00</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <img
                src="/icons/mail-amber.png"
                alt=""
                className="w-[16px] h-[16px]"
              />
              <span>info@projectforcars.tj</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <img
                src="/icons/map-pin-amber.png"
                alt=""
                className="w-[16px] h-[16px]"
              />
              <span>Душанбе, пр. Рудаки 100</span>
            </div>
          </div>
        </div>

        <p className="pt-[24px] text-[12px] text-gray-500">
          © 2026 Project for Cars
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-gray-100 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
