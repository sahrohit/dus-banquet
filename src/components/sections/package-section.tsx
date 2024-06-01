"use client";

import { LuCheck, LuX } from "react-icons/lu";

import PRICING_DATA from "@/config/package";
import { Button } from "@/components/ui/button";

import useContactModal from "../store/use-contact-modal";
import { Separator } from "../ui/separator";

const PricingCards = () => {
  const { onOpen } = useContactModal();
  return (
    <section className="container flex flex-col items-center py-16 text-center">
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className=" text-3xl uppercase leading-snug tracking-[6.5px]">
          Packages
        </h2>
        <Separator className="mx-auto my-4 max-w-sm bg-slate-500" />
        <p className="pb-4">Start at full speed !</p>
      </div>

      <div className="mx-auto grid max-w-screen-lg gap-5 bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">
        {PRICING_DATA.map((offer, index) => (
          <div
            className="relative flex flex-col overflow-hidden"
            key={offer.title}
          >
            <div className="min-h-[150px] items-start space-y-4 bg-card p-6">
              <p className="flex h-full items-center justify-center font-urban text-2xl font-bold uppercase tracking-wider text-muted-foreground">
                {offer.title}
              </p>
            </div>

            <div className="flex h-full flex-col justify-between gap-16 p-6">
              <ul className="space-y-2 text-left text-sm font-medium leading-normal">
                {offer.benefits.map((feature) => (
                  <li className="flex items-start" key={feature}>
                    <LuCheck className="mr-3 size-5 shrink-0" />
                    <p>{feature}</p>
                  </li>
                ))}

                {offer.limitations.length > 0 &&
                  offer.limitations.map((feature) => (
                    <li
                      className="flex items-start text-muted-foreground"
                      key={feature}
                    >
                      <LuX className="mr-3 size-5 shrink-0" />
                      <p>{feature}</p>
                    </li>
                  ))}
              </ul>

              {index === 1 && (
                <Button onClick={() => onOpen()} className="hidden md:flex">
                  Contact Us
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-balance text-center text-base text-muted-foreground">
        Email{" "}
        <a
          className="font-medium text-primary hover:underline"
          href="mailto:dusevents@gmail.com"
        >
          dusevents@gmail.com
        </a>{" "}
        for to contact our support team.
        <br />
      </p>
    </section>
  );
};

export default PricingCards;
