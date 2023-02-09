import Link from "next/link";
import Image from "next/image";
import LogoSrc from "../public/images/Logo.png";
import navigation from "../data/navigation.json";
import NavigationItem from "./NavigationItem";
import company from "../data/company.json";
import { useState, useEffect } from "react";
import {
  XMarkIcon,
  Bars3Icon
} from "@heroicons/react/24/solid";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeMobileNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    window.onscroll = function () {
      addStickeyMenu();
    };

    const navbar = document.getElementById("navigation-container");
    let sticky = navbar.offsetTop;

    function addStickeyMenu() {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }, []);

  return (
    <>
      <div
        className="flex flex-row secondary-color text-white overflow-hidden"
        id="navigation-container"
      >
        <div className="flex flex-col justify-center items-baseline flex-wrap mx-6 grow lg:grow-0">
          <Link
            href="/"
            title="homepage"
            className="font-bold text-xl md:text-3xl flex flex-row justify-center items-baseline uppercase"
          >
            {company.info.name}
          </Link>
        </div>
        <section
          id="mobile-navigation-container"
          className="flex flex-col justify-center lg:hidden uppercase font-medium text-sm"
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
        <section className="hidden lg:block grow">
          <nav className="">
            <ul className="mobile-menu flex flex-row justify-end items-baseline flex-wrap m-6 sm:gap-1 lg:gap-4 xl:gap-14 leading-8">
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
