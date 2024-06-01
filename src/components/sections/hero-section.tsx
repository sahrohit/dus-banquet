"use client";

/* eslint-disable @next/next/no-img-element */
import Autoplay from "embla-carousel-autoplay";

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
      loop: true,
    }}
    plugins={[
      Autoplay({
        delay: 4000,
      }),
    ]}
    className="mx-auto max-w-[90vw]"
  >
    <CarouselContent>
      {CAROUSEL.map(({ image }) => (
        <CarouselItem key={image} className="mx-auto md:basis-2/3">
          <figure className=" px-16">
            <img
              src={image}
              alt="value-img-1"
              className="object-cover object-center"
            />
          </figure>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export default HeroSection;
