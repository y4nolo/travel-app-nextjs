"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  function MobileMenuButton({ onClick }: { onClick: any }) {
    return (
      <button className="absolute right-2 top-2 p-2" onClick={onClick}>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </button>
    );
  }

  function MobileDrawer({ isOpen, onClose }: { isOpen: any; onClose: any }) {
    return (
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute right-7 top-4 p-3" onClick={onClose}>
          <FontAwesomeIcon className="text-5xl" icon={faXmark} />
        </button>
        <ul className="flex flex-col justify-center items-center space-y-4">
          {NAV_LINKS.map((link) => (
            <li className="text-3xl hover:text-blue-900 hover:font-semibold">
              <Link
                href={link.href}
                key={link.key}
                className="text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* mobile nav */}
      <MobileMenuButton onClick={handleDrawerToggle} />
      {/* need to implement drawer */}
      <div className="sm:hidden relative flex flex-row my-4">
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </nav>
  );
};

export default Navbar;
