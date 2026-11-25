export default function Pagination() {
  return (
    <div className="hidden md:flex mt-[32px] justify-center gap-[8px]">
      <span className="w-[40px] h-[40px] rounded-[12px] bg-white border border-gray-200 flex items-center justify-center text-gray-400">
        ←
      </span>
      <span className="w-[40px] h-[40px] rounded-[12px] bg-slate-900 text-white text-[14px] font-semibold flex items-center justify-center">
        1
      </span>
      <span className="w-[40px] h-[40px] rounded-[12px] bg-white border border-gray-200 text-[14px] font-semibold flex items-center justify-center">
        2
      </span>
      <span className="w-[40px] h-[40px] rounded-[12px] bg-white border border-gray-200 text-[14px] font-semibold flex items-center justify-center">
        3
      </span>
      <span className="w-[40px] h-[40px] rounded-[12px] bg-white border border-gray-200 flex items-center justify-center">
        →
      </span>
    </div>
  );
}
