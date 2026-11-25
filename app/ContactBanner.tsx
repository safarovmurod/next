import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="max-w-[1200px] mx-auto px-[16px] pt-[16px] pb-[48px]">
      <div className="bg-slate-900 rounded-[24px] overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-[50%] p-[32px] flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-[24px] font-bold text-white">
            Посмотрите авто вживую
          </h2>
          <p className="text-gray-300 text-[14px] mt-[12px]">
            Все машины доступны к осмотру в Душанбе.
          </p>
          <div className="mt-[24px] flex gap-[12px]">
            <Link
              href="/about"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-[14px] px-[24px] py-[12px] rounded-[12px]"
            >
              Связаться
            </Link>
            <a
              href="tel:+992900000000"
              className="hidden sm:block border border-slate-700 text-white text-[14px] px-[20px] py-[12px] rounded-[12px]"
            >
              +992 900 00 00 00
            </a>
          </div>
        </div>

        <div className="md:w-[50%] h-[224px] md:h-auto order-1 md:order-2">
          <img
            src="/hyundai-tucson.jpg"
            alt="Hyundai Tucson"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
