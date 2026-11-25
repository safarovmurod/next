import Link from "next/link";

const bodyTypes = [
  {
    title: "Седаны",
    count: "3 авто",
    image: "/toyota-camry.jpg",
  },
  {
    title: "Кроссоверы",
    count: "3 авто",
    image: "/toyota-rav4-hybrid.jpg",
  },
  {
    title: "Хэтчбеки",
    count: "3 авто",
    image: "/kia-ceed.jpg",
  },
];

export default function BodyTypes() {
  return (
    <section className="max-w-[1200px] mx-auto px-[16px] py-[32px]">
      <h2 className="text-[24px] font-bold mb-[24px]">Тип кузова</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {bodyTypes.map((item) => (
          <Link
            key={item.title}
            href="/katalog"
            className="relative h-[208px] rounded-[16px] overflow-hidden block"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[16px] left-[16px] right-[16px] flex items-center justify-between">
              <div className="bg-black/60 text-white px-[12px] py-[6px] rounded-[12px]">
                <h3 className="text-[18px] font-bold">{item.title}</h3>
                <p className="text-[12px] text-gray-200">{item.count}</p>
              </div>
              <span className="w-[36px] h-[36px] rounded-[50%] bg-amber-400 text-slate-900 flex items-center justify-center font-bold">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
