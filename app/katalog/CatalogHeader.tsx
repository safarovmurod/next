export default function CatalogHeader() {
  return (
    <div className="mb-[24px]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-[16px]">
        <h1 className="text-[30px] font-bold">Каталог авто</h1>

        <div className="w-full md:w-[320px] flex items-center gap-[8px] bg-white border border-gray-200 rounded-[12px] px-[12px] py-[10px]">
          <img src="/icons/search.png" alt="" className="w-[16px] h-[16px]" />
          <input
            type="text"
            placeholder="Марка или модель"
            className="w-full text-[14px] outline-none"
          />
        </div>
      </div>

      <div className="mt-[16px] flex md:hidden gap-[12px]">
        <div className="flex-1 bg-slate-900 text-white text-[14px] font-medium py-[10px] rounded-[12px] text-center">
          Фильтры
        </div>
        <select className="flex-1 bg-white border border-gray-200 rounded-[12px] px-[12px] py-[10px] text-[14px] outline-none">
          <option>Сначала дешёвые</option>
          <option>Сначала дорогие</option>
          <option>Сначала новые</option>
        </select>
      </div>

      <p className="mt-[16px] md:hidden text-[14px] font-semibold">9 авто</p>
    </div>
  );
}
