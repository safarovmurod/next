import HeroSection from "./HeroSection";
import SearchBar from "./SearchBar";
import FeaturedCars from "./FeaturedCars";
import BodyTypes from "./BodyTypes";
import Features from "./Features";
import HowToBuy from "./HowToBuy";
import ContactBanner from "./ContactBanner";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <FeaturedCars />
      <BodyTypes />
      <Features />
      <HowToBuy />
      <ContactBanner />
    </div>
  );
}
