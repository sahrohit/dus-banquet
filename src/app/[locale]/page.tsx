import Cuisine from "@/components/sections/about-cusine";
import CardSection from "@/components/sections/card-section";
import Contact from "@/components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";
import OurValuesSection from "@/components/sections/our-values-section";
import PricingCards from "@/components/sections/package-section";
import ThreeImageSection from "@/components/sections/three-image-section";

const Home = () => (
  <>
    <HeroSection />
    <OurValuesSection />
    <CardSection />
    <Cuisine />
    <ThreeImageSection />
    <PricingCards />
    <Contact />
  </>
);

export default Home;
