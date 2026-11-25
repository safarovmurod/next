const infoItems = [
  {
    label: "Телефон",
    value: "+992 900 00 00 00",
    icon: "/icons/phone-dark.png",
  },
  {
    label: "Email",
    value: "info@projectforcars.tj",
    icon: "/icons/mail-dark.png",
  },
  {
    label: "Адрес",
    value: "Душанбе, пр. Рудаки 100",
    icon: "/icons/map-pin-dark.png",
  },
  {
    label: "Режим работы",
    value: "Ежедневно, 09:00 – 19:00",
    icon: "/icons/clock-dark.png",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="mt-[24px] grid grid-cols-2 md:grid-cols-4 gap-[16px]">
      {infoItems.map((item) => (
        <div
          key={item.label}
          className="bg-white rounded-[16px] p-[20px] border border-gray-200"
        >
          <div className="w-[40px] h-[40px] rounded-[12px] bg-amber-400 flex items-center justify-center mb-[12px]">
            <img src={item.icon} alt="" className="w-[20px] h-[20px]" />
          </div>
          <p className="text-[12px] text-gray-400">{item.label}</p>
          <p className="text-[14px] font-bold mt-[4px]">{item.value}</p>
        </div>
      ))}
    </section>
  );
}
