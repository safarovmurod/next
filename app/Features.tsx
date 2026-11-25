const features = [
  {
    title: "Техосмотр",
    description: "Полная проверка перед продажей.",
    icon: "/icons/shield-check-amber.png",
  },
  {
    title: "Чистые документы",
    description: "Прозрачная история и документы.",
    icon: "/icons/file-text-amber.png",
  },
  {
    title: "Тест-драйв",
    description: "Осмотр и тест-драйв в Душанбе.",
    icon: "/icons/key-round-amber.png",
  },
];

export default function Features() {
  return (
    <section className="max-w-[1200px] mx-auto px-[16px] py-[24px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-[16px] p-[24px] border border-gray-200 flex md:flex-col gap-[16px]"
          >
            <div className="w-[44px] h-[44px] rounded-[12px] bg-slate-900 flex items-center justify-center">
              <img src={item.icon} alt="" className="w-[20px] h-[20px]" />
            </div>
            <div>
              <h3 className="font-bold text-[16px]">{item.title}</h3>
              <p className="text-[14px] text-gray-500 mt-[4px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
