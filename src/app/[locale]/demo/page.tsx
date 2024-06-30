"use client";

import Image from "next/image";

import { ALBUM } from "@/config/cards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AlbumCard from "@/components/cards/album-card";
import useContactModal from "@/components/store/use-contact-modal";

const HomePage = () => {
  const { onOpen } = useContactModal();
  return (
    <div>
      {/* Banner section */}
      <section className="bg-no-repeats relative z-[2] bg-[url('/assets/demo/hero-bg.jpg')] bg-cover bg-center before:absolute before:inset-0 before:z-[-1] before:bg-black/40">
        <div className="container">
          <h1 className="mx-auto max-w-[900px] py-56 text-center uppercase leading-relaxed text-white">
            WE ARE AN AWARD WINNING, CREATIVE <br />
            <span className="block text-primary">WEDDING DECOR COMPANY</span>
            SUCCESSFULLY DESIGNING WEDDINGS <br />
            IN NEPAL FOR NEARLY A DECADE.
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-10 pt-20">
        <div className="container relative">
          <div className="mx-auto max-w-[730px] text-center">
            <p className="font-bold uppercase leading-tight tracking-[2px] text-primary">
              Your Marriage. Our Magic.
            </p>
            <h2 className="pb-10 uppercase leading-relaxed">
              IMPECCABLE STYLING & EXECUTION OF LUXURY WEDDINGS{" "}
            </h2>
            <p className="pb-10">
              With nearly ten years of experience in the floral décor & styling
              and wedding planning industry, we can confidently bask in the
              warmth of thousands of weddings well planned and most beautifully
              executed. In the long haul of our journey so far, the one goal
              that has remained constant throughout for us, is to ensure our
              couples experience the most memorable, breathtakingly beautiful
              weddings which leave a pleasant feeling long after it is over.
            </p>
            <Button
              onClick={() => {
                onOpen();
              }}
              size="xl"
              className="self-start"
            >
              Contact Us
            </Button>
          </div>
          <figure className="absolute right-1/2 top-0 z-[-1] translate-x-1/2 opacity-40">
            <Image
              src="/assets/demo/taarini-dark-icon.png"
              alt=""
              width={350}
              height={350}
              className="size-full"
            />
          </figure>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="mx-auto max-w-[700px] text-center">
            <h3 className="pb-10 uppercase leading-relaxed">
              Beliefs determine Behaviors which influence Relationships which in
              turn affect Results.
            </h3>
            <p className="font-bold uppercase leading-tight tracking-[2px] text-primary">
              TOM CRANE
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="flex">
            <div className="w-1/2">
              <p className="font-bold uppercase leading-tight tracking-[2px] text-primary">
                Our values
              </p>
              <h2 className="pb-10 uppercase leading-relaxed">
                Creating Great & memorable Experiences
              </h2>
              <p className="max-w-[550px] pb-10">
                Taarini is for everybody. It is available to anyone who plans a
                wedding and envisions something epic for the Big Day. We make
                dream weddings a reality for everyone, regardless of their
                budget or needs. People are our ultimate heroes. Taarini helps
                people to celebrate love and harmony, have a cherished wedding
                and in turn support the brand by aligning their personal goals
                and growth with our business model.{" "}
              </p>
              <Accordion type="single" collapsible className="max-w-[550px]">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="h4 mb-0 !no-underline">
                    Human
                  </AccordionTrigger>
                  <AccordionContent asChild>
                    <p className="text-base">
                      Weddings are an intimate and emotional affair and gaining
                      the trust of people is greater than everything. To help
                      people relax and enjoy our services, we make them a part
                      of our family and reassure them that we’ll make it the
                      best day of their lives. We lead with empathy and interest
                      in our brand communication, value their emotions and help
                      them connect organically with Taarini.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="h4 mb-0 !no-underline">
                    Original
                  </AccordionTrigger>
                  <AccordionContent asChild>
                    <p className="text-base">
                      A wedding is more than just a shining memory. It is a once
                      in a lifetime moment celebrated with loved ones and we
                      focus all our energies into creating an unforgettable
                      experience for the people who vest their trust in us. We
                      build their wedding, their way- as they enjoy their
                      special day. Taarini curates 100% tailor-made experiences
                      and works closely with all the couples/families.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="h4 mb-0 !no-underline">
                    Friendly
                  </AccordionTrigger>
                  <AccordionContent asChild>
                    <p className="text-base">
                      Planning a wedding is a tedious task and can get extremely
                      overwhelming for the couples and their families. To help
                      them relax and especially enjoy their day; we listen to
                      their ideas and then take the torch from them. We vest the
                      same trust in them, that they show in us and make them a
                      part of our process. We communicate with care and
                      understanding, empower them and treat them with love.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="h4 mb-0 !no-underline">
                    Kind
                  </AccordionTrigger>
                  <AccordionContent asChild>
                    <p className="text-base">
                      People form the heart of our organisation. We constantly
                      work towards giving them their perfect wedding and
                      transforming all their ideas into action and dreams into
                      reality. We support the people, hear them, reassure them
                      and put in all our efforts towards designing and managing
                      the best life event for them.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="w-1/2">
              <figure>
                <Image
                  src="/assets/demo/our-values-demo.jpg"
                  alt=""
                  width={768}
                  height={512}
                  className="size-full"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="mx-auto max-w-[700px] text-center">
            <figure>
              <Image
                src="/assets/demo/couples-choice-awards.png"
                alt=""
                width={768}
                height={512}
                className="size-full"
              />
            </figure>
            <p className="max-w-[800px] py-10">
              Taarini is for everybody. It is available to anyone who plans a
              wedding and envisions something epic for the Big Day. We make
              dream weddings a reality for everyone, regardless of their budget
              or needs. People are our ultimate heroes. Taarini helps people to
              celebrate love and harmony, have a cherished wedding and in turn
              support the brand by aligning their personal goals and growth with
              our business model.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container pb-20">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="pb-5 uppercase leading-relaxed text-primary">
              TEAM TAARINI
            </h2>
            <p>
              We come from different backgrounds, places and age groups but are
              bound together by our desire to create beautiful, memorable
              weddings. Our team consists of passionate and skilled
              professionals who share a common value system.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-row">
          <figure className="w-1/3 border-r-8 border-white">
            <Image
              src="/assets/demo/team-1.jpg"
              alt=""
              width={768}
              height={512}
              className="size-full"
            />
          </figure>
          <figure className="w-2/3">
            <Image
              src="/assets/demo/team-2.jpg"
              alt=""
              width={768}
              height={512}
              className="size-full"
            />
          </figure>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="flex flex-row justify-center gap-40">
            <div className="w-1/2 max-w-[420px] text-center">
              <Avatar className="mx-auto mb-10 size-80">
                <AvatarImage src="/assets/demo/founder-1.png" />
                <AvatarFallback>SR</AvatarFallback>
              </Avatar>
              <h2 className="pb-5 text-3xl uppercase leading-relaxed text-primary">
                SOUMYA RAGHU
              </h2>
              <p className="pb-10 uppercase italic">follow@instagram</p>
              <p className="text-justify">
                Empathetic, rational and practical. She is enterprising and a
                stickler for perfection and nothing misses her vigilant eyes as
                she plans every event meticulously. Her empathy and connect with
                people along with her straight forwardness has made it possible
                to build long lasting relationship with clients and employees
                alike. Her statistics background and invaluable work experience
                at Ernst & Young ensures that each wedding is dealt with, in a
                calm and systematic manner.{" "}
              </p>
            </div>
            <div className="w-1/2 max-w-[420px] text-center">
              <Avatar className="mx-auto mb-10 size-80">
                <AvatarImage src="/assets/demo/founder-2.jpg" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <h2 className="pb-5 text-3xl uppercase leading-relaxed text-primary">
                abhilash
              </h2>
              <p className="pb-10 uppercase italic">follow@instagram</p>
              <p className="text-justify">
                Super motivated and energetic, Abhilash is the backbone of
                Taarini. He is always brimming with ideas and has a solution to
                literally anything and everything. He started his career in the
                Hotel industry and went on to pursue and Event Management from
                EMDI. He has gained a vast experience training under various
                film art directors and world renowned Wedding Planner, Ms. Tania
                Tapel. His humility and down to earth approach has gained him
                friends among his clients, employees and peers across the
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="text-center">
            <div className="mx-auto max-w-[700px]">
              <p className="font-bold uppercase leading-tight tracking-[2px] text-primary">
                featured weddings
              </p>
              <h2 className="pb-5 uppercase leading-relaxed">
                Each couple & their own style
              </h2>
              <p className="pb-20">
                Taarini is a one-stop solution for crafting customised,
                one-of-a-kind weddings. We make the couple the centre of
                attention, and our skilled team works tirelessly to ensure they
                receive the attention they deserve, whilst keeping everything
                else in place, right from the planning phase till the Wedding
                Day.
              </p>
            </div>
            <div className="flex w-full flex-row flex-wrap justify-center gap-10 pb-10">
              {ALBUM.map(({ image, heading, subHeading, alt }) => (
                <AlbumCard
                  image={image}
                  heading={heading}
                  subHeading={subHeading}
                  alt={alt}
                />
              ))}
            </div>
            <Button
              onClick={() => {
                onOpen();
              }}
              size="xl"
              className="self-start uppercase"
            >
              View All Albums
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-no-repeats relative z-[2] bg-[url('/assets/demo/testimonial-bg.jpg')] bg-cover bg-center py-10 before:absolute before:inset-0 before:z-[-1] before:bg-black/40">
        <div className="container py-20">
          <div className="mx-auto text-center text-white">
            <h2 className="mx-auto max-w-[700px] pb-5 uppercase leading-relaxed">
              Kind words from our happy couples
            </h2>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="w-full border-transparent bg-transparent">
                      <CardContent className="flex items-center justify-center p-6 text-xl text-white">
                        <div>
                          <p>
                            May the fourth be with you! The team is so full of
                            talent and passion. They pay attention to the
                            smallest detail. Craftsmanship is brilliant. Once
                            you are done with planning, you can quite literally
                            forget about it, as the team will look after your
                            event as their own. Abhi and his team are super
                            friendly. We were really happy and pleased with
                            their work, not just once but all the four times we
                            went to them (hence the title). Wishing them the
                            very best for the future.
                          </p>
                          <div className="flex flex-row items-center justify-center gap-5 pt-10">
                            <Avatar className="size-24">
                              <AvatarImage src="/assets/demo/founder-1.png" />
                              <AvatarFallback>SR</AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                              <p className="uppercase">Roshan Balaram</p>
                              <p className="italic">
                                For Professionalism, Quality, Responsiveness,
                                Value
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="w-full border-transparent bg-transparent">
                      <CardContent className="flex items-center justify-center p-6 text-xl text-white">
                        <div>
                          <p>
                            Zeroed in on Taarini after vetting and discussing my
                            requirements and budgets with multiple vendors.
                            Taarini were the only ones who could inspire
                            confidence in me that they will execute what I
                            wanted and at justifiable costs. They were very warm
                            and accommodating throughout the process and even
                            though the covid related last-minute changes.
                            Finally, on d-day, I was pleasantly surprised to see
                            the decor so well done, not a flower out of place,
                            and delivered on time for each event without
                            requiring me or my family to monitor anything or
                            address any issues. I want to commend the
                            exceptional professionalism of both the Taarini crew
                            and their vendors who were very present, aware, and
                            responsive to any and all issues related to the
                            wedding. My family and guests were very impressed
                            with the tasteful, beautiful decor that augmented
                            the beauty of the venue and made the event so
                            special for all of us.
                          </p>
                          <div className="flex flex-row items-center justify-center gap-5 pt-10">
                            <Avatar className="size-24">
                              <AvatarImage src="/assets/demo/founder-1.png" />
                              <AvatarFallback>SR</AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                              <p className="uppercase">Chaitra Sagar</p>
                              <p className="italic">
                                For Professionalism, Quality, Responsiveness,
                                Value
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="w-full border-transparent bg-transparent">
                      <CardContent className="flex items-center justify-center p-6 text-xl text-white">
                        <div>
                          <p>
                            Going to Taarini, to plan my sangeet day (the most
                            important of the wedding events, for me) was a
                            no-brainer. I had heard of them from many folks and
                            Google search results for best wedding planners
                            could only agree. The whole process..planning up
                            until the execution stage was meticulous,
                            methodical, extremely collaborative, and FUN!!
                            Abhilash and Soumya were nothing less than my good
                            friends. Aparna was almost a family member whom I
                            could trust with anything regarding the wedding! I
                            got contacts of several amazing vendors from her.
                            She, time and again, made sure that I had the
                            absolute best in terms of all things big or small,
                            also helped me manage my stress a great deal! The D
                            Day was unbelievably good, super dreamy. Couldn`t
                            have asked for anything more! Thank you so very much
                            for being there, through and through, team! You
                            folks are outstanding!{" "}
                          </p>
                          <div className="flex flex-row items-center justify-center gap-5 pt-10">
                            <Avatar className="size-24">
                              <AvatarImage src="/assets/demo/founder-1.png" />
                              <AvatarFallback>SR</AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                              <p className="uppercase">SOMU RAGHU</p>
                              <p className="italic">
                                For Professionalism, Quality, Responsiveness
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="w-full border-transparent bg-transparent">
                      <CardContent className="flex items-center justify-center p-6 text-xl text-white">
                        <div>
                          <p>
                            Going to Taarini, to plan my sangeet day (the most
                            important of the wedding events, for me) was a
                            no-brainer. I had heard of them from many folks and
                            Google search results for best wedding planners
                            could only agree. The whole process..planning up
                            until the execution stage was meticulous,
                            methodical, extremely collaborative, and FUN!!
                            Abhilash and Soumya were nothing less than my good
                            friends. Aparna was almost a family member whom I
                            could trust with anything regarding the wedding! I
                            got contacts of several amazing vendors from her.
                            She, time and again, made sure that I had the
                            absolute best in terms of all things big or small,
                            also helped me manage my stress a great deal! The D
                            Day was unbelievably good, super dreamy. Couldn`t
                            have asked for anything more! Thank you so very much
                            for being there, through and through, team! You
                            folks are outstanding!{" "}
                          </p>
                          <div className="flex flex-row items-center justify-center gap-5 pt-10">
                            <Avatar className="size-24">
                              <AvatarImage src="/assets/demo/founder-1.png" />
                              <AvatarFallback>SR</AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                              <p className="uppercase">SOMU RAGHU</p>
                              <p className="italic">
                                For Professionalism, Quality, Responsiveness
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="w-full border-transparent bg-transparent">
                      <CardContent className="flex items-center justify-center p-6 text-xl text-white">
                        <div>
                          <p>
                            Going to Taarini, to plan my sangeet day (the most
                            important of the wedding events, for me) was a
                            no-brainer. I had heard of them from many folks and
                            Google search results for best wedding planners
                            could only agree. The whole process..planning up
                            until the execution stage was meticulous,
                            methodical, extremely collaborative, and FUN!!
                            Abhilash and Soumya were nothing less than my good
                            friends. Aparna was almost a family member whom I
                            could trust with anything regarding the wedding! I
                            got contacts of several amazing vendors from her.
                            She, time and again, made sure that I had the
                            absolute best in terms of all things big or small,
                            also helped me manage my stress a great deal! The D
                            Day was unbelievably good, super dreamy. Couldn`t
                            have asked for anything more! Thank you so very much
                            for being there, through and through, team! You
                            folks are outstanding!{" "}
                          </p>
                          <div className="flex flex-row items-center justify-center gap-5 pt-10">
                            <Avatar className="size-24">
                              <AvatarImage src="/assets/demo/founder-1.png" />
                              <AvatarFallback>SR</AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                              <p className="uppercase">SOMU RAGHU</p>
                              <p className="italic">
                                For Professionalism, Quality, Responsiveness
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
