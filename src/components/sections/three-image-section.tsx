import Image from "next/image";

const ThreeImageSection = () => (
  <section className="container py-16 lg:py-32">
    <div className="lg:gap-22 flex flex-col items-center gap-8 lg:flex-row">
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <figure className="[&_img]:size-full">
          <Image
            src="/assets/collage-img-1.jpg"
            alt="Couple and dog"
            width="277"
            height="450"
            loading="lazy"
          />
        </figure>
        <div className="flex flex-col items-end">
          <figure className="[&_img]:size-full">
            <Image
              src="/assets/collage-img-2.jpg"
              alt="Woman and cat"
              width="218"
              height="234"
              loading="lazy"
            />
          </figure>
          <figure className="[&_img]:size-full">
            <Image
              src="/assets/collage-img-3.jpg"
              alt="Woman,child and dog"
              width="250"
              height="240"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
      <div className="flex w-full max-w-[560px] flex-col justify-center p-8 lg:w-1/2 [&_h2]:mb-8 [&_p]:mb-8">
        <h2>A COLLECTION OF HISTORIC WEDDING AND SPECIAL EVENT VENUES</h2>
        <p>
          Fêtewell (‘fet-‘wel) translates to “celebrate fully.” That’s the
          spirit behind our portfolio of special event venues. Fêtewell venues
          are historic buildings that we have renovated with care to create
          authentic and unique wedding and special event venues for clients
          throughout the United States. With locations across the east coast,
          you’re sure to find the perfect space to celebrate any occasion with
          us at the Fêtewell family of venues.
        </p>
      </div>
    </div>
  </section>
);

export default ThreeImageSection;
