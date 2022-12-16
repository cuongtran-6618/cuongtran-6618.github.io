import Link from "next/link";
import Image from "next/image";
import LogoSrc from "../public/images/Logo.png";

export default function Navigation() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <Link href="/" title="homepage">
          <Image
            src={LogoSrc}
            alt="logo"
            height={200}
            width={200}
            className="items-center"
          ></Image>
        </Link>
      </div>
      <div className="flex flex-row justify-between items-baseline flex-wrap m-3">
        <div className="hover:underline underline-offset-8">
          <Link href="/services">Services</Link>
        </div>
        <div className="hover:underline underline-offset-8">
          <Link href="/our-work">Our work</Link>
        </div>
        <div className="hover:underline underline-offset-8">
          <Link href="/about-us">About us</Link>
        </div>
        <div className="hover:underline underline-offset-8">
          <Link href="/contact-us">Contact us</Link>
        </div>
      </div>
    </>
  );
}
