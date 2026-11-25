export default function ContactHero() {
  return (
    <section className="relative h-[256px] md:h-[288px] rounded-[24px] overflow-hidden bg-slate-900">
      <img
        src="/kia-sportage.jpg"
        alt="Контакты"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 p-[24px] md:p-[40px] flex flex-col justify-center">
        <h1 className="text-[32px] md:text-[44px] font-bold text-white">
          Контакты
        </h1>
        <p className="text-gray-200 text-[14px] md:text-[16px] mt-[8px]">
          Позвоните нам или оставьте заявку.
        </p>
      </div>
    </section>
  );
}
