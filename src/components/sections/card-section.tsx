import EventCard from "../cards/event-card";

const CardSection = () => (
  <section className="bg-primary text-black">
    <div className="container py-20">
      <h2 className="pb-10 text-3xl uppercase tracking-widest">
        our portfolio of historic wedding & special event venues
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <EventCard
          image="/assets/haven-street-ballroom.jpg"
          heading="Haven Street Ballroom"
          subheading="baltimore"
          alt="Haven Street Ballroom"
        />
        <EventCard
          image="/assets/main-street-ballroom.jpg"
          heading="Main Street Ballroom"
          subheading="ellicott city"
          alt="Main Street Ballroom"
        />
        <EventCard
          image="/assets/citizens-ballroom.jpg"
          heading="Citizens Ballroom"
          subheading="frederick"
          alt="Citizens Ballroom"
        />
        <EventCard
          image="/assets/savannah-bottle-works.jpg"
          heading="Savannah Bottle Works"
          subheading="savannah"
          alt="Savannah Bottle Works"
        />
      </div>
    </div>
  </section>
);

export default CardSection;
