import Link from "next/link";
import Image from "next/image";
import LogoSrc from "../public/images/Logo.png";
import navigation from "../data/navigation.json";
import NavigationItem from "./navigation-item";

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
        {navigation.navigation.map((item) => (
          <NavigationItem key={item.uid} item={item} />
        ))}
      </div>
    </>
  );
}
