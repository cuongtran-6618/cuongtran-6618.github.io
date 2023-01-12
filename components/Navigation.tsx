import Link from "next/link";
import Image from "next/image";
import LogoSrc from "../public/images/Logo.png";
import navigation from "../data/navigation.json";
import NavigationItem from "./NavigationItem";
import { useState } from "react";
import {
  XMarkIcon,
  Bars3Icon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeMobileNav = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <div className="flex flex-row secondary-color text-white">
        <div className="flex flex-col justify-center items-baseline flex-wrap mx-6 grow md:grow-0">
          <Link
            href="/"
            title="homepage"
            className="font-bold text-3xl flex flex-row justify-center items-baseline"
          >
            Arpeggia.
          </Link>
        </div>
        <section
          id="mobile-navigation-container"
          className="flex flex-col justify-center md:hidden uppercase font-medium text-sm"
        >
          <div className="m-4" onClick={toggleMobileNav}>
            <Bars3Icon className="w-8 h-8" />
          </div>
          <div
            id="mobile-nav-slider-container"
            className={isNavOpen ? "" : "hidden"}
          >
            <nav id="mobile-nav" className="secondary-color">
              <div onClick={closeMobileNav} className="m-8">
                <XMarkIcon className="w-6 h-6" />
              </div>
              <div id="mobile-nav-content">
                <ul className="mobile-menu flex flex-col justify-end items-baseline flex-wrap m-8 gap-8">
                  {navigation.navigation.map((item) => (
                    <NavigationItem key={item.uid} item={item} />
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <section className="hidden md:block grow">
          <nav className="">
            <ul className="mobile-menu flex flex-row justify-end items-baseline flex-wrap m-6 sm:gap-1 md:gap-4 xl:gap-14 leading-8">
              {navigation.navigation.map((item) => (
                <NavigationItem key={item.uid} item={item} />
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
}
