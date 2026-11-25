import Link from "next/link";

const carOptions = [
  "BMW 330i, 2021",
  "Toyota Camry, 2022",
  "Kia Sportage, 2023",
  "Toyota RAV4 Hybrid, 2022",
  "Hyundai Tucson, 2021",
  "Kia Ceed, 2022",
  "Volkswagen Golf, 2020",
  "Hyundai i30, 2021",
  "Honda Civic, 2020",
];

export default function ContactFormSection() {
  return (
    <section className="mt-[32px] flex flex-col lg:flex-row gap-[24px]">
      <div className="flex-1 bg-white rounded-[24px] p-[24px] md:p-[32px] border border-gray-200">
        <h2 className="text-[24px] font-bold mb-[24px]">Оставить заявку</h2>

        <form className="space-y-[16px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <div>
              <label className="block text-[12px] font-semibold mb-[4px]">
                Имя
              </label>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full border border-gray-200 rounded-[12px] px-[16px] py-[12px] text-[14px] outline-none"
              />
            </div>

            <div>
              <label className="block text-[12px] font-semibold mb-[4px]">
                Телефон
              </label>
              <input
                type="tel"
                placeholder="+992"
                className="w-full border border-gray-200 rounded-[12px] px-[16px] py-[12px] text-[14px] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-semibold mb-[4px]">
              Автомобиль
            </label>
            <select className="w-full border border-gray-200 rounded-[12px] px-[16px] py-[12px] text-[14px] bg-white outline-none">
              {carOptions.map((car) => (
                <option key={car}>{car}</option>
              ))}
            </select>
          </div>

          <div className="hidden sm:block">
            <label className="block text-[12px] font-semibold mb-[4px]">
              Сообщение
            </label>
            <textarea
              rows={4}
              placeholder="Когда удобно посмотреть авто?"
              className="w-full border border-gray-200 rounded-[12px] px-[16px] py-[12px] text-[14px] outline-none"
            />
          </div>

          <button
            type="button"
            className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-[14px] px-[28px] py-[12px] rounded-[12px]"
          >
            Отправить
          </button>
        </form>
      </div>

      <div className="hidden lg:flex w-[380px] bg-slate-900 text-white rounded-[24px] overflow-hidden flex-col">
        <img
          src="/hyundai-i30.jpg"
          alt="Автосалон"
          className="w-full h-[224px] object-cover"
        />
        <div className="p-[24px] flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-[20px] font-bold">Автосалон</h3>
            <p className="text-[14px] text-gray-300 mt-[12px]">
              Душанбе, пр. Рудаки 100
            </p>
            <p className="text-[14px] text-gray-300 mt-[4px]">
              Ежедневно, 09:00 – 19:00
            </p>
          </div>

          <Link
            href="/katalog"
            className="mt-[24px] w-full text-center border border-slate-700 text-[14px] font-medium py-[12px] rounded-[12px]"
          >
            Смотреть каталог →
          </Link>
        </div>
      </div>
    </section>
  );
}
