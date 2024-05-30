import Cuisine from "@/components/sections/about-cusine";
import CardSection from "@/components/sections/card-section";
import OurValuesSection from "@/components/sections/our-values-section";
import ThreeImageSection from "@/components/sections/three-image-section";
import HeroSection from "@/components/sections/hero-section";


const Home = () => (
  <>
    <HeroSection />
    <OurValuesSection />
    <CardSection />
    <Cuisine />
    <ThreeImageSection />
  </>
);

export default Home;
