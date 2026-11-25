import Link from "next/link";

const featuredCars = [
  {
    brand: "BMW",
    model: "330i",
    bodyType: "Седан",
    year: "2021",
    mileage: "42 000 км",
    price: "249 000 сомони",
    image: "/bmw-330i.jpg",
  },
  {
    brand: "TOYOTA",
    model: "Camry",
    bodyType: "Седан",
    year: "2022",
    mileage: "47 000 км",
    price: "215 000 сомони",
    image: "/toyota-camry.jpg",
  },
  {
    brand: "KIA",
    model: "Sportage",
    bodyType: "Кроссовер",
    year: "2023",
    mileage: "23 000 км",
    price: "239 000 сомони",
    image: "/kia-sportage.jpg",
  },
  {
    brand: "TOYOTA",
    model: "RAV4 Hybrid",
    bodyType: "Кроссовер",
    year: "2022",
    mileage: "36 000 км",
    price: "268 000 сомони",
    image: "/toyota-rav4-hybrid.jpg",
  },
  {
    brand: "HYUNDAI",
    model: "Tucson",
    bodyType: "Кроссовер",
    year: "2021",
    mileage: "58 000 км",
    price: "196 000 сомони",
    image: "/hyundai-tucson.jpg",
  },
  {
    brand: "KIA",
    model: "Ceed",
    bodyType: "Хэтчбек",
    year: "2022",
    mileage: "39 000 км",
    price: "164 000 сомони",
    image: "/kia-ceed.jpg",
  },
];

export default function FeaturedCars() {
  return (
    <section className="max-w-[1200px] mx-auto px-[16px] py-[32px]">
      <div className="flex items-center justify-between mb-[24px]">
        <h2 className="text-[24px] font-bold">Избранные авто</h2>
        <Link href="/katalog" className="hidden sm:block text-[14px] font-medium">
          Все авто →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {featuredCars.map((car) => (
          <div
            key={`${car.brand}-${car.model}`}
            className="bg-white rounded-[16px] overflow-hidden border border-gray-200"
          >
            <div className="relative h-[192px]">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-[12px] left-[12px] bg-white text-[12px] font-medium px-[12px] py-[4px] rounded-[999px]">
                {car.bodyType}
              </span>
            </div>

            <div className="p-[20px]">
              <p className="text-[12px] text-gray-400">{car.brand}</p>
              <h3 className="text-[18px] font-bold">{car.model}</h3>

              <div className="flex gap-[16px] text-[12px] text-gray-500 mt-[8px]">
                <span>{car.year}</span>
                <span>{car.mileage}</span>
              </div>

              <div className="mt-[16px] pt-[16px] border-t border-gray-100 flex items-center justify-between">
                <span className="text-[18px] font-bold">{car.price}</span>
                <Link
                  href="/about"
                  className="w-[36px] h-[36px] rounded-[50%] bg-amber-400 flex items-center justify-center font-bold"
                >
                  →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[20px] sm:hidden">
        <Link
          href="/katalog"
          className="block w-full text-center border border-gray-300 bg-white font-semibold text-[14px] py-[12px] rounded-[12px]"
        >
          Все авто →
        </Link>
      </div>
    </section>
  );
}
