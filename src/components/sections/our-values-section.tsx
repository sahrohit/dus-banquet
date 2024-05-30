import Image from "next/image";

const OurValuesSection = () => (
  <section className="bg-[#edebe5] py-20 text-black">
    <div className="container flex flex-row flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-24">
      <div className="flex max-w-[245px] flex-col items-center gap-5 text-center [&_h2]:text-6xl [&_h2]:font-normal [&_h2]:leading-none [&_h2]:tracking-[-2.6px] [&_h3]:text-sm [&_h3]:uppercase [&_h3]:leading-normal [&_h3]:tracking-[2.65px] [&p]:w-full [&p]:leading-normal">
        <h2>Our Values</h2>
        <figure className="max-h-[325px]">
          <Image
            src="/assets/value-img-1.jpeg"
            alt="value-img-1"
            className="size-full object-cover"
            width={768}
            height={512}
          />
        </figure>
        <h3>OPEN VENDOR POLICY</h3>
        <p>
          We welcome all licensed and insured caterers because we believe in
          having the freedom to choose the perfect menu for your celebration
        </p>
      </div>
      <div className="flex max-w-[415px] flex-col items-center gap-5 text-center [&_h3]:text-sm [&_h3]:uppercase [&_h3]:leading-normal [&_h3]:tracking-[2.65px] [&p]:w-full [&p]:leading-normal">
        <figure className="max-h-[625px]">
          <Image
            src="/assets/value-img-2.jpeg"
            alt="value-img-2"
            className="size-full object-cover"
            width={415}
            height={635}
          />
        </figure>
        <h3>16 hour rental windows</h3>
        <p>
          We believe time is more precious than ever on the day of your
          celebration. That`s why our standard 8am-midnight rental window is
          included with all full day rentals. That`s double the industry
          standard.
        </p>
      </div>
      <div className="flex max-w-[345px] flex-col gap-12">
        <div className="flex flex-col items-center gap-5 text-center [&_h3]:text-sm [&_h3]:uppercase [&_h3]:leading-normal [&_h3]:tracking-[2.65px] [&p]:w-full [&p]:leading-normal">
          <figure>
            <Image
              src="/assets/value-img-6.jpeg"
              alt="value-img-6"
              className="size-full object-cover"
              width={768}
              height={512}
            />
          </figure>
          <h3>WE WELCOME ALL</h3>
          <p>We enthusiastically welcome all couples.</p>
        </div>
        <div className="flex flex-col items-center gap-5 text-center [&_h3]:text-sm [&_h3]:uppercase [&_h3]:leading-normal [&_h3]:tracking-[2.65px] [&p]:w-full [&p]:leading-normal">
          <figure className="w-full [&_img]:max-h-[355px]">
            <Image
              src="/assets/value-img-3.jpeg"
              alt="value-img-3"
              className="size-full object-cover"
              width={683}
              height={360}
            />
          </figure>
          <h3>accessible to all</h3>
          <p>
            All of our venues are either on one level or have an elevator for
            easy access for all of your guests
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OurValuesSection;
