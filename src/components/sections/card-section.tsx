import Card from "../cards/location";

const CardSection = () => (
  <section className="bg-[#cfc7b5] text-black">
    <div className="container py-20">
      <h2 className="pb-10 text-3xl uppercase tracking-widest">
        our portfolio of historic wedding & special event venues
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <Card
          image="/assets/haven-street-ballroom.jpg"
          heading="Haven Street Ballroom"
          location="baltimore"
          alt="Haven Street Ballroom"
        />
        <Card
          image="/assets/main-street-ballroom.jpg"
          heading="Main Street Ballroom"
          location="ellicott city"
          alt="Main Street Ballroom"
        />
        <Card
          image="/assets/citizens-ballroom.jpg"
          heading="Citizens Ballroom"
          location="frederick"
          alt="Citizens Ballroom"
        />
        <Card
          image="/assets/savannah-bottle-works.jpg"
          heading="Savannah Bottle Works"
          location="savannah"
          alt="Savannah Bottle Works"
        />
      </div>
    </div>
  </section>
);

export default CardSection;
