import Link from "next/link";
import Image from "next/image";
import LogoSrc from "../public/images/Logo.png";
import navigation from "../data/navigation.json";
import NavigationItem from "./navigation-item";

export default function Navigation() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-row justify-left items-baseline flex-wrap mx-6 my-6 basis-1/2 grow">
          <div>
            <Link href="/" title="homepage" className="font-bold text-4xl">
              Arpeggio
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-end items-baseline flex-wrap m-8 basis-1/2 gap-8">
          {navigation.navigation.map((item) => (
            <NavigationItem key={item.uid} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
