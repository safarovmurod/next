import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-[16px] pt-[24px]">
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="md:w-[42%] bg-slate-900 text-white rounded-[24px] p-[32px] flex flex-col justify-center">
          <h1 className="text-[36px] font-bold">
            Найдите свой
            <br />
            автомобиль
          </h1>
          <p className="text-gray-300 mt-[16px] text-[14px]">
            Поиск по модели, кузову и цене
          </p>
          <div className="mt-[24px]">
            <Link
              href="/katalog"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-[14px] px-[24px] py-[12px] rounded-[12px]"
            >
              Смотреть каталог →
            </Link>
          </div>
        </div>

        <div className="md:w-[58%] relative rounded-[24px] overflow-hidden h-[320px] md:h-[384px]">
          <img
            src="/bmw-330i.jpg"
            alt="BMW 330i, 2021"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[16px] left-[16px] right-[16px] flex items-center justify-between">
            <span className="bg-black/60 text-white font-semibold px-[12px] py-[6px] rounded-[8px]">
              BMW 330i, 2021
            </span>
            <Link
              href="/about"
              className="hidden sm:block bg-white text-slate-900 text-[12px] font-semibold px-[16px] py-[8px] rounded-[999px]"
            >
              249 000 сомони →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
