"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/logo";
import useContactModal from "@/components/store/use-contact-modal";

import NavMenu from "./nav-menu";

const Navbar = () => {
  const contactModal = useContactModal();
  return (
    <section>
      <div className="container my-8 flex flex-row items-center justify-between p-4">
        <NavMenu />
        <Logo />
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Link href="/events" className="text-lg hover:underline">
            Packages
          </Link>
          <Button
            variant="link"
            className="text-lg"
            onClick={() => contactModal.onOpen()}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
