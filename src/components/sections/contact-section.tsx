import ContactForm from "../forms/contact";
import { Card, CardContent } from "../ui/card";

const Contact = () => (
  <section
    id="contact"
    className="container mb-8 flex flex-col justify-between gap-16 md:my-16 md:flex-row"
  >
    {/* <div className="flex flex-col gap-4 text-center md:text-left">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl">Contact</h2>
        <a
          href="tel:+9779851038988"
          className="inline-flex items-center justify-center gap-2 text-xl text-gray-500 hover:underline md:justify-start"
        >
          +977&nbsp; 9851038988 <LuPhone />
        </a>
        <p className="text-xl text-gray-500">
          T. B. Hospital Marg, <br /> Kathmandu 44600
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl">Openning</h2>
        <p className="text-xl text-gray-500">everyday-08-30am-04-30pm</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl">Contact Now</h2>
        <a
          href="https://glovoapp.com/pt/pt/lisboa/the-hideout-lis/?utm_campaign=website&utm_medium=website&utm_source=website"
          className="inline-flex items-center justify-center gap-2 text-xl text-gray-500 hover:underline md:justify-start"
        >
          Globo
          <LuExternalLink />
        </a>
      </div>
    </div> */}
    <Card>
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>
    <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14130.413470971096!2d85.2980411!3d27.6986512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196917446917%3A0xd2a0f024fcee8dcf!2sDUS%20Reception%20and%20Events!5e0!3m2!1sen!2snp!4v1717187194049!5m2!1sen!2snp"
      className=" w-full max-w-3xl border-none"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </section>
);

export default Contact;
