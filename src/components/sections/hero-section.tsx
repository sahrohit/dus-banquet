/* eslint-disable @next/next/no-img-element */

import { CAROUSEL } from "@/config/hero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => (
  <Carousel
    opts={{
      align: "center",
    }}
    className="mx-auto w-[calc(100%)]"
  >
    <CarouselContent>
      {CAROUSEL.map(({ image }) => (
        <CarouselItem key={image} className="mx-auto md:basis-2/3">
          <figure className="h-[80vh] w-full px-16">
            <img src={image} alt="value-img-1" className="object-center" />
          </figure>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export default HeroSection;
