import { LOCATION } from "@/config/cards";
import EventCard from "@/components/cards/event-card";

const CardSection = () => (
  <section className="bg-primary text-black">
    <div className="container py-20">
      <h2 className="pb-10 text-3xl uppercase tracking-widest">
        our portfolio of historic wedding & special event venues
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {LOCATION.map(({ image, heading, subHeading, alt }) => (
          <EventCard
            image={image}
            heading={heading}
            subHeading={subHeading}
            alt={alt}
          />
        ))}
      </div>
    </div>
  </section>
);

export default CardSection;
