import Link from "next/link";

export default function SearchBar() {
  return (
    <section className="max-w-[1200px] mx-auto px-[16px] py-[20px]">
      <div className="bg-white rounded-[16px] p-[16px] border border-gray-200 flex flex-col md:flex-row gap-[12px] items-center">
        <div className="w-full md:flex-1 flex items-center gap-[8px] bg-gray-100 rounded-[12px] px-[12px] py-[10px]">
          <img src="/icons/search.png" alt="" className="w-[16px] h-[16px]" />
          <input
            type="text"
            placeholder="Марка или модель"
            className="w-full bg-transparent text-[14px] outline-none"
          />
        </div>

        <div className="hidden md:block w-[190px] bg-gray-100 rounded-[12px] px-[12px] py-[6px]">
          <span className="block text-[12px] text-gray-400">Кузов</span>
          <select className="w-full bg-transparent text-[14px] font-medium outline-none">
            <option>Все</option>
            <option>Седан</option>
            <option>Кроссовер</option>
            <option>Хэтчбек</option>
          </select>
        </div>

        <div className="hidden md:block w-[180px] bg-gray-100 rounded-[12px] px-[12px] py-[6px]">
          <span className="block text-[12px] text-gray-400">Цена до</span>
          <select className="w-full bg-transparent text-[14px] font-medium outline-none">
            <option>300 000 сомони</option>
            <option>250 000 сомони</option>
            <option>200 000 сомони</option>
          </select>
        </div>

        <Link
          href="/katalog"
          className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[14px] px-[24px] py-[12px] rounded-[12px] text-center"
        >
          Поиск
        </Link>
      </div>
    </section>
  );
}
