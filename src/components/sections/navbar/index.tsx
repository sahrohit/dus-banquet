"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/logo";
import useContactModal from "@/components/store/use-contact-modal";

import NavMenu from "./nav-menu";

const Navbar = () => {
  const contactModal = useContactModal();
  return (
    <div className="container my-8 flex flex-col items-center justify-between p-4 md:flex-row">
      <NavMenu className="order-2 md:order-1" />
      <Logo className="order-1 md:order-2" />
      <div className="order-3 flex flex-row items-center gap-6">
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
  );
};

export default Navbar;
