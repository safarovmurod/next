import ContactHero from "./ContactHero";
import ContactInfoCards from "./ContactInfoCards";
import ContactFormSection from "./ContactFormSection";
import FaqSection from "./FaqSection";

export default function AboutPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-[16px] py-[24px] pb-[48px]">
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
      <FaqSection />
    </div>
  );
}
