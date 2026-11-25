import Link from "next/link";

export default function RequestBanner() {
  return (
    <section className="mt-[40px] bg-amber-400 rounded-[24px] p-[32px] flex flex-col md:flex-row md:items-center justify-between gap-[16px]">
      <div>
        <h2 className="text-[24px] font-bold">Не нашли нужное авто?</h2>
        <p className="text-[14px] mt-[4px]">
          Оставьте заявку — подберём подходящий вариант.
        </p>
      </div>

      <Link
        href="/about"
        className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[14px] px-[24px] py-[12px] rounded-[12px] text-center"
      >
        Оставить заявку →
      </Link>
    </section>
  );
}
