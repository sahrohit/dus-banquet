import { type AddonType, type SubscriptionPlan } from "@/types";

const PRICING_DATA: SubscriptionPlan[] = [
  {
    title: "Silver",
    description:
      "This plan is perfect for businesses looking for a simple online presence. We provide Silver features, keep things easy, and offer basic support. Get your static website with a subdomain hassle-free.",
    benefits: [
      "Basic static website",
      "Subdomain",
      "Limited customization options",
      "Basic customer support",
    ],
    limitations: [
      "Limited customer support",
      "No customization options",
      "Limited resources and MAU",
      "No Authentication or User Management",
    ],
    prices: {
      monthly: 25,
      yearly: 240,
    },
  },
  {
    title: "Gold",
    description:
      "Upgrade to the Gold plan for more flexibility, a custom domain, and priority support. Enjoy additional features and control over your website. Note: Limited support for multiple languages, basic analytics, and streamlined payment options.",
    benefits: [
      "Everything with Silver and Plus",
      "Custom domain",
      "Basic SEO optimization",
      "Social media Integration",
      "Additional features and customization",
      "Priority customer support",
      "Authentication/User Management",
    ],
    limitations: [
      "No Internationalization Support",
      "Limited or no analytics",
      "Limited payment gateway options",
    ],
    prices: {
      monthly: 50,
      yearly: 480,
    },
  },
  {
    title: "Diamond",
    description:
      "Upgrade to the Diamond plan for an all-inclusive experience. Unleash advanced customization, e-commerce capabilities, and top-notch support. Benefit from internationalization, in-depth analytics, and diverse payment options.",
    benefits: [
      "Everything with Diamond",
      "Full Suite of Advanced Customization",
      "E-commerce Transactions",
      "Gold SEO Optimzation",
      "Diamond support, Fastest response time",
      "Internationalization (Multiple Languages)",
      "Advcanced analytics",
      "Payment Gateway Support",
    ],
    limitations: [],
    prices: {
      monthly: 80,
      yearly: 780,
    },
  },
];

export default PRICING_DATA;

export const ADDONS: AddonType[] = [
  {
    symbol: "logo-design",
    name: "Logo Design Package",
    price: 50,
    desc: "Custom logo creation.",
    tags: ["One time Fee"],
    isOneTimeOnly: true,
  },
  {
    symbol: "content-writing",
    name: "Content Writing Package",
    price: 100,
    desc: "Professionally written content.",
    tags: ["One time Fee"],
    isOneTimeOnly: true,
  },
  {
    symbol: "graphic-design",
    name: "Graphics Design Addons",
    price: 20,
    desc: "Custom graphics or banners.",
    tags: ["One time Fee"],
    isOneTimeOnly: true,
  },
  {
    symbol: "custom-domain",
    name: "Custom Domain Registration",
    price: "5 - 100",
    desc: "Custom graphics or banners.",
    tags: ["Own your domain"],
    isOneTimeOnly: false,
  },
  {
    symbol: "newsletter",
    name: "News Letter Addon",
    price: "20",
    desc: "News Letter Subscription.",
    tags: ["Mail"],
    isOneTimeOnly: false,
  },
  {
    symbol: "live-chat",
    name: "Live Chat Addon",
    price: "20",
    desc: "Live Chat Integration (Messenger)",
    tags: ["Support"],
    isOneTimeOnly: true,
  },
];
