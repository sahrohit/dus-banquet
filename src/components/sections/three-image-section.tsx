"use client";

import Image from "next/image";

import useContactModal from "../store/use-contact-modal";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const ThreeImageSection = () => {
  const { onOpen } = useContactModal();
  return (
    <section className="container py-8">
      <div className="lg:gap-22 flex flex-col items-center gap-8 lg:flex-row">
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <figure className="md:translate-x-12 [&_img]:size-full ">
            <Image
              className="max-h-96"
              src="/assets/collage-img-1.jpg"
              alt="Couple and dog"
              width="277"
              height="450"
              loading="lazy"
            />
          </figure>
          <div className="flex flex-col items-end">
            <figure>
              <Image
                className="size-full max-h-96"
                src="/assets/collage-img-2.jpg"
                alt="Woman and cat"
                width="218"
                height="234"
                loading="lazy"
              />
            </figure>
            <figure className="-md:translate-y-12 md:translate-x-12">
              <Image
                className="size-full max-h-96"
                src="/assets/collage-img-3.jpg"
                alt="Woman,child and dog"
                width="250"
                height="240"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
        <div className="flex w-full max-w-[560px] flex-col justify-center p-8 lg:w-1/2 [&_p]:mb-8">
          <h2 className="text-center text-3xl uppercase tracking-widest md:text-start">
            A COLLECTION OF HISTORIC WEDDING AND SPECIAL EVENT VENUES
          </h2>
          <Separator className="my-4 max-w-sm bg-slate-500" />
          <p>
            Fêtewell (‘fet-‘wel) translates to “celebrate fully.” That’s the
            spirit behind our portfolio of special event venues. Fêtewell venues
            are historic buildings that we have renovated with care to create
            authentic and unique wedding and special event venues for clients
            throughout the United States. With locations across the east coast,
            you’re sure to find the perfect space to celebrate any occasion with
            us at the Fêtewell family of venues.
          </p>
          <Button
            onClick={() => {
              onOpen();
            }}
            size="lg"
            className="self-start"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThreeImageSection;
