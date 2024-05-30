/* eslint-disable import/prefer-default-export */

export const NAV_LINKS: {
  title: string;
  links: { label: string; href: string; description: string }[];
}[] = [
  {
    title: "Events",
    links: [
      {
        label: "Weddings",
        href: "/events/weddings",
        description: "",
      },
      {
        label: "Aniversary",
        href: "/events/aniversary",
        description: "",
      },
      {
        label: "Birthdays",
        href: "/events/birthdays",
        description: "",
      },
      {
        label: "Office Parties",
        href: "/events/office-parties",
        description: "",
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        label: "Bridal Room",
        href: "/about/bridal-room",
        description: "A luxurious space for the bride's perfect preparations.",
      },
      {
        label: "Decorator",
        href: "/about/decorator",
        description: "Transforming venues into stunning, personalized spaces.",
      },
      {
        label: "DJ",
        href: "/about/dj",
        description: "Setting the perfect mood with expert music selection.",
      },
      {
        label: "Chef",
        href: "/about/chef",
        description: "Culinary delights tailored to your unique event.",
      },
      {
        label: "Photographer",
        href: "/about/photographer",
        description: "Capturing timeless moments with artistic precision.",
      },
    ],
  },
];
