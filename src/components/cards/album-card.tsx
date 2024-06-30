import Image from "next/image";

interface CardProps {
  image: string;
  alt: string;
  heading: string;
  subHeading: string;
}

const AlbumCard = ({ image, alt, heading, subHeading }: CardProps) => (
  <div>
    <figure className="relative mb-5 h-[470px] w-[340px] before:absolute before:inset-3 before:z-[2] before:border-[0.5px] before:border-white/50 ">
      <Image
        src={image}
        alt={alt}
        className="size-full object-cover"
        width={340}
        height={470}
      />
    </figure>
    <h3 className="tracing-[0.85px] pb-3 text-center text-2xl leading-9">
      {heading}
    </h3>
    <p className="text-center uppercase leading-3 tracking-widest">
      {subHeading}
    </p>
  </div>
);

export default AlbumCard;
