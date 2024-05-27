interface CardProps {
  image: string;
  alt?: string;
  heading: string;
  location: string;
}

const Card = ({ image, alt, heading, location }: CardProps) => (
  <div>
    <figure className="relative mb-5 h-[500px] w-[300px] before:absolute before:inset-3 before:z-[2] before:border-[0.5px] before:border-white/50 ">
      <img src={image} alt={alt} className="size-full object-cover" />
    </figure>
    <h3 className="tracing-[0.85px] pb-3 text-center text-2xl leading-9">
      {heading}
    </h3>
    <p className="text-center uppercase leading-3 tracking-widest">
      {location}
    </p>
  </div>
);

export { Card };

const CardSection = () => (
  <section className="bg-[#cfc7b5] text-black">
    <div className="container py-20">
      <h2 className="pb-10 text-2xl uppercase tracking-widest">
        our portfolio of historic wedding & special event venues
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <Card
          image="https://fetewell.com/wp-content/uploads/2022/10/IMG_1264-3.jpg"
          heading="Haven Street Ballroom"
          location="baltimore"
        />
        <Card
          image="https://fetewell.com/wp-content/uploads/2022/09/IMG_4176.jpg"
          heading="Main Street Ballroom"
          location="ellicott city"
        />
        <Card
          image="https://fetewell.com/wp-content/uploads/2024/01/7FAA27CF-CD4D-4856-855B-B965E78F43C0.jpg"
          heading="Citizens Ballroom"
          location="frederick"
        />
        <Card
          image="https://fetewell.com/wp-content/uploads/2023/12/SarahRyanSP-40.jpg"
          heading="Savannah Bottle Works"
          location="savannah"
        />
      </div>
    </div>
  </section>
);

export default CardSection;
