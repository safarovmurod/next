import Link from "next/link";
import Pagination from "./Pagination";

const cars = [
  {
    name: "Volkswagen Golf",
    bodyType: "Хэтчбек",
    year: "2020",
    mileage: "65 000 км",
    price: "138 000 сомони",
    image: "/volkswagen-golf.jpg",
  },
  {
    name: "Hyundai i30",
    bodyType: "Хэтчбек",
    year: "2021",
    mileage: "54 000 км",
    price: "145 000 сомони",
    image: "/hyundai-i30.jpg",
  },
  {
    name: "Honda Civic",
    bodyType: "Седан",
    year: "2020",
    mileage: "68 000 км",
    price: "152 000 сомони",
    image: "/honda-civic.jpg",
  },
  {
    name: "Kia Ceed",
    bodyType: "Хэтчбек",
    year: "2022",
    mileage: "39 000 км",
    price: "164 000 сомони",
    image: "/kia-ceed.jpg",
  },
  {
    name: "Hyundai Tucson",
    bodyType: "Кроссовер",
    year: "2021",
    mileage: "58 000 км",
    price: "196 000 сомони",
    image: "/hyundai-tucson.jpg",
  },
  {
    name: "Toyota Camry",
    bodyType: "Седан",
    year: "2022",
    mileage: "47 000 км",
    price: "215 000 сомони",
    image: "/toyota-camry.jpg",
  },
  {
    name: "Kia Sportage",
    bodyType: "Кроссовер",
    year: "2023",
    mileage: "23 000 км",
    price: "239 000 сомони",
    image: "/kia-sportage.jpg",
  },
  {
    name: "BMW 330i",
    bodyType: "Седан",
    year: "2021",
    mileage: "42 000 км",
    price: "249 000 сомони",
    image: "/bmw-330i.jpg",
  },
  {
    name: "Toyota RAV4 Hybrid",
    bodyType: "Кроссовер",
    year: "2022",
    mileage: "36 000 км",
    price: "268 000 сомони",
    image: "/toyota-rav4-hybrid.jpg",
  },
];

export default function CarGrid() {
  return (
    <div className="flex-1">
      <div className="hidden md:flex items-center justify-between mb-[20px]">
        <span className="text-[14px] font-semibold">9 авто</span>

        <div className="flex items-center gap-[8px]">
          <span className="text-[12px] text-gray-500">Сортировка:</span>
          <select className="bg-white border border-gray-200 rounded-[12px] px-[12px] py-[8px] text-[12px] font-medium outline-none">
            <option>Сначала дешёвые</option>
            <option>Сначала дорогие</option>
            <option>Сначала новые</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {cars.map((car) => (
          <div
            key={car.name}
            className="bg-white rounded-[16px] overflow-hidden border border-gray-200"
          >
            <div className="relative h-[192px]">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-[12px] left-[12px] bg-white text-[12px] font-medium px-[12px] py-[4px] rounded-[999px]">
                {car.bodyType}
              </span>
            </div>

            <div className="p-[20px]">
              <h3 className="text-[18px] font-bold">{car.name}</h3>
              <div className="flex gap-[16px] text-[12px] text-gray-500 mt-[8px]">
                <span>{car.year}</span>
                <span>{car.mileage}</span>
              </div>

              <div className="mt-[16px] pt-[16px] border-t border-gray-100 flex items-center justify-between">
                <span className="text-[18px] font-bold">{car.price}</span>
                <Link
                  href="/about"
                  className="w-[36px] h-[36px] rounded-[50%] bg-gray-100 hover:bg-amber-400 flex items-center justify-center font-bold"
                >
                  →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination />
    </div>
  );
}
