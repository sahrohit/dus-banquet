import Link from "next/link";
import { LuFacebook, LuGithub, LuTwitter } from "react-icons/lu";

import { NAV_LINKS } from "@/config/nav-links";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/logo";

const Footer = () => (
  <footer className="container">
    <div className="grid gap-12 py-4 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
      <div className="not-prose flex flex-col gap-6">
        <Link href="/">
          <h3 className="sr-only">{siteConfig.name}</h3>
          <Logo />
        </Link>
        <p className="text-balance">
          {siteConfig.name} is great for hosting your next events to make it the
          most memorable one.
        </p>
      </div>
      {NAV_LINKS.map(({ title, links }) => (
        <div key={title} className="flex flex-col gap-2">
          <h5>{title}</h5>
          {links.map(({ label, href }) => (
            <Link key={label} className="text-lg hover:underline" href={href}>
              {label}
            </Link>
          ))}
        </div>
      ))}
    </div>
    <div className="not-prose flex flex-col justify-between gap-6 border-t py-4 md:flex-row md:items-center md:gap-2">
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <LuGithub className="text-xl" />
        </Button>
        <Button variant="outline" size="icon">
          <LuTwitter className="text-xl" />
        </Button>
        <Button variant="outline" size="icon">
          <LuFacebook className="text-xl" />
        </Button>
      </div>
      <p className="text-muted-foreground">
        © <a href="https://github.com/brijr/components">Dus Banquets</a>. All
        rights reserved. {new Date().getFullYear()}.
      </p>
    </div>
  </footer>
);

export default Footer;
