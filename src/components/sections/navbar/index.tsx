import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import Logo from "@/components/shared/logo";

import NavMenu from "./nav-menu";

const Navbar = () => (
  <div className="container flex flex-row items-center justify-between p-4">
    <NavMenu />
    <Logo />
    <div className="flex flex-col gap-3 md:flex-row">
      <Link
        href="/events"
        className={buttonVariants({ variant: "link", size: "lg" })}
      >
        Book a Tour
      </Link>{" "}
      <Link
        href="/contact"
        className={buttonVariants({ variant: "link", size: "lg" })}
      >
        Contact Us
      </Link>
    </div>
  </div>
);

export default Navbar;
