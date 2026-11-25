import CatalogHeader from "./CatalogHeader";
import FilterSidebar from "./FilterSidebar";
import CarGrid from "./CarGrid";
import RequestBanner from "./RequestBanner";

export default function KatalogPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-[16px] py-[32px] pb-[48px]">
      <CatalogHeader />
      <div className="flex gap-[24px] items-start">
        <FilterSidebar />
        <CarGrid />
      </div>
      <RequestBanner />
    </div>
  );
}
