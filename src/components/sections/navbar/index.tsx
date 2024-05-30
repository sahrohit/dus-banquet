import Link from "next/link";

import Logo from "@/components/shared/logo";

import NavMenu from "./nav-menu";

const Navbar = () => (
  <div className="container my-8 flex flex-row items-center justify-between p-4">
    <NavMenu />
    <Logo />
    <div className="flex flex-col gap-6 md:flex-row">
      <Link href="/events" className="text-lg hover:underline">
        Book a Tour
      </Link>{" "}
      <Link href="/contact" className="text-lg hover:underline">
        Contact Us
      </Link>
    </div>
  </div>
);

export default Navbar;
