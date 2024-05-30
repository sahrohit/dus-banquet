import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

const Logo = () => (
  <Link href="/">
    <Image src="/logo.png" alt={siteConfig.name} width={160} height={160} />
  </Link>
);

export default Logo;
