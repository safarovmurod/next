const brands = [
  { name: "BMW", count: 1 },
  { name: "Honda", count: 1 },
  { name: "Hyundai", count: 2 },
  { name: "Kia", count: 2 },
  { name: "Toyota", count: 2 },
  { name: "Volkswagen", count: 1 },
];

const bodyTypes = ["Седан", "Кроссовер", "Хэтчбек"];

export default function FilterSidebar() {
  return (
    <aside className="hidden lg:block w-[260px] bg-white rounded-[16px] p-[20px] border border-gray-200">
      <h2 className="font-bold text-[16px] pb-[12px] border-b border-gray-100">
        Фильтры
      </h2>

      <div className="py-[16px] border-b border-gray-100">
        <h3 className="text-[12px] font-semibold text-gray-400 mb-[12px]">
          Марка
        </h3>
        <div className="space-y-[8px]">
          {brands.map((brand) => (
            <label
              key={brand.name}
              className="flex items-center justify-between text-[14px]"
            >
              <span className="flex items-center gap-[8px]">
                <input type="checkbox" className="w-[16px] h-[16px]" />
                <span>{brand.name}</span>
              </span>
              <span className="text-[12px] text-gray-400">{brand.count}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="py-[16px] border-b border-gray-100">
        <h3 className="text-[12px] font-semibold text-gray-400 mb-[12px]">
          Кузов
        </h3>
        <div className="flex flex-wrap gap-[8px]">
          {bodyTypes.map((type) => (
            <span
              key={type}
              className="px-[12px] py-[4px] rounded-[999px] text-[12px] border border-gray-200"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-[16px]">
        <h3 className="text-[12px] font-semibold text-gray-400 mb-[12px]">
          Цена, сомони
        </h3>
        <div className="grid grid-cols-2 gap-[8px]">
          <div>
            <span className="block text-[12px] text-gray-400 mb-[4px]">От</span>
            <input
              type="text"
              defaultValue="100 000"
              className="w-full border border-gray-200 rounded-[12px] px-[12px] py-[8px] text-[14px] outline-none"
            />
          </div>
          <div>
            <span className="block text-[12px] text-gray-400 mb-[4px]">До</span>
            <input
              type="text"
              defaultValue="300 000"
              className="w-full border border-gray-200 rounded-[12px] px-[12px] py-[8px] text-[14px] outline-none"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
