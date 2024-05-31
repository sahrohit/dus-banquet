import Image from "next/image";

import { Separator } from "../ui/separator";

const Cuisine = () => (
  <section className="py-20">
    <div className="container">
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className=" text-3xl uppercase leading-snug tracking-[6.5px]">
          Inventive Cuisine
        </h2>
        <Separator className="mx-auto my-4 max-w-sm bg-slate-500" />
        <p className="pb-4">
          Lakeview Pavilion is one of New England’s hidden gems, and that
          extends to the special experience of dining with us. We craft unique
          menus to suit your every need. Whether hosting a formal event or a
          relaxed cocktail reception, you can expect nothing short of fresh and
          flavorful.
        </p>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-8 py-20 lg:gap-24">
        <div className="max-w-screen-sm">
          <h2 className="text-3xl uppercase leading-snug tracking-[6.5px]">
            Our Offerings
          </h2>
          <Separator className="my-4 max-w-sm bg-slate-500" />
          <p className="pb-4">
            No matter the event, we have the menu for it. We love cocktail hours
            outfitted with stellar charcuterie displays and raw bars as much as
            well love pizza and burgers as midnight snacks. We offer an
            inventive kitchen and bar menu you can tailor to your tastes, so
            your event will look (and taste) exactly how you envision.
          </p>
        </div>
        <figure className="max-h-[600px] max-w-[400px]">
          <Image
            src="/assets/cuisine-img-1.jpg"
            alt="cuisine-img-1"
            className="block size-full object-cover"
            width={800}
            height={1200}
          />
        </figure>
      </div>

      <div className="flex flex-col lg:relative">
        <figure className="max-h-[600px] max-w-[400px]">
          <Image
            src="/assets/cuisine-img-2.jpg"
            alt="cuisine-img-2"
            width={1024}
            height={683}
          />
        </figure>
        <div className="z-10 max-w-full bg-card p-4 text-center lg:absolute lg:left-[60%] lg:top-[60%] lg:-translate-y-1/2 lg:p-14 lg:text-start">
          <h2 className="text-3xl uppercase leading-snug tracking-[6.5px]">
            Meet Our Culinary Team
          </h2>
          <Separator className="my-4 max-w-sm bg-slate-500" />
          <p className="pb-4">
            Lakeview is home to a dedicated team of culinary artists. Everyone
            in our kitchen works to ensure the freshest ingredients are used to
            make innovative ideas come to life on the plate. The team
            prioritizes not only stellar taste, but also visual impact, making
            every meal a masterpiece. It must be a work of art before it leaves
            our kitchen.
          </p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-8 py-20 lg:gap-24">
        <figure>
          <Image
            src="/assets/cuisine-img-3.jpg"
            alt="cuisine-img-3"
            className="block size-full object-cover"
            width={800}
            height={1200}
          />
        </figure>
        <div className="max-w-screen-sm">
          <Separator className="my-4 bg-slate-500" />
          <p className="pb-4 text-center">
            The highlight of the wedding had to be the food – we got SO many
            compliments that it was the best wedding food they ever had (and we
            agreed)! The service was fast and friendly and the food was
            fantastic. Overall the entire experience blew my expectations for
            the whole “planning a wedding process” out of the water and you are
            crazy if you don’t check this place out. Hoping we have some friends
            chose the same venue so we can go back!
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default Cuisine;
