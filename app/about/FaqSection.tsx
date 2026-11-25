const faqs = [
  {
    question: "Можно ли осмотреть авто перед покупкой?",
    answer: "Да, все машины находятся в нашем салоне в Душанбе.",
    open: true,
  },
  {
    question: "Проводится ли техосмотр?",
    open: false,
  },
  {
    question: "Какие способы оплаты доступны?",
    open: false,
  },
  {
    question: "Кто оформляет документы?",
    open: false,
  },
];

export default function FaqSection() {
  return (
    <section className="mt-[40px] flex flex-col lg:flex-row gap-[24px]">
      <div className="lg:w-[33%]">
        <h2 className="text-[24px] font-bold">Частые вопросы</h2>
      </div>

      <div className="lg:w-[67%] bg-white rounded-[24px] p-[24px] border border-gray-200 space-y-[16px]">
        {faqs.map((item) => (
          <div
            key={item.question}
            className="pb-[16px] border-b border-gray-100 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center justify-between gap-[16px]">
              <span className="font-bold text-[14px] md:text-[16px]">
                {item.question}
              </span>
              <span
                className={`w-[32px] h-[32px] rounded-[50%] flex items-center justify-center font-bold ${
                  item.open ? "bg-amber-400" : "bg-gray-100 text-gray-600"
                }`}
              >
                {item.open ? "−" : "+"}
              </span>
            </div>

            {item.answer && (
              <p className="mt-[8px] text-[14px] text-gray-500">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
