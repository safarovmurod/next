const steps = [
  {
    number: "1",
    title: "Выберите авто",
    description: "Найдите модель в каталоге.",
    image: "/volkswagen-golf.jpg",
  },
  {
    number: "2",
    title: "Оставьте заявку",
    description: "Укажите имя и номер телефона.",
    image: "/salon.jpg",
  },
  {
    number: "3",
    title: "Осмотр и покупка",
    description: "Оформите сделку в автосалоне.",
    image: "/toyota-rav4-hybrid.jpg",
  },
];

export default function HowToBuy() {
  return (
    <section className="max-w-[1200px] mx-auto px-[16px] py-[32px]">
      <div className="flex flex-col md:flex-row gap-[24px]">
        <div className="md:w-[30%]">
          <h2 className="text-[24px] font-bold">Как купить авто</h2>
        </div>

        <div className="md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-[16px] overflow-hidden border border-gray-200"
            >
              <img
                src={step.image}
                alt={step.title}
                className="hidden md:block w-full h-[144px] object-cover"
              />
              <div className="p-[20px] flex md:block gap-[12px]">
                <span className="w-[32px] h-[32px] rounded-[50%] bg-amber-400 font-bold text-[14px] flex items-center justify-center">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-bold text-[16px] md:mt-[12px]">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 mt-[4px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
