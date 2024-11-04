"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 px-8 z-50 bg-white shadow-md">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" height={50} width={100} />
      </Link>

      {/* Desktop Menu */}
      <nav className="flex justify-between items-center flex-1">
        <ul
          className={cn("flex items-center justify-center flex-1", {
            "max-md:hidden": !isMenuOpen,
          })}
        >
          <li>
            <Link
              href="/"
              className="px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/docs/index.html"
              className="px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              href="/demo"
              className="px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Demo
            </Link>
          </li>
        </ul>

        <form>
          {/* Learn More Button */}
          <Link
            href="https://github.com/DevinoSolutions/upup"
            className="md:hidden block backdrop-blur-3xl p-2 px-4 rounded bg-white"
          >
            Learn More
          </Link>
        </form>

        {/* Hamburger Menu Button */}
        <button className="hidden md:flex p-2" onClick={toggleMobileMenu}>
          {isMenuOpen ? (
            <RiCloseFill className="h-6 w-6" />
          ) : (
            <RiMenu3Fill className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {/* <div
        // initial={false}
        // animate={{
        //   maxHeight: isMenuOpen ? "500px" : 0, // Adjust max-height as necessary
        //   opacity: isMenuOpen ? 1 : 0,
        //   display: isMenuOpen ? "flex" : "none",
        // }}
        // transition={{ duration: 0.5, ease: "linear" }}
        className="absolute top-full right-0 max-w-full md:w-screen w-auto bg-white shadow-md flex-col md:flex hidden overflow-x-hidden"
      >
        <Link href="/">
          <span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">
            Home
          </span>
        </Link>
        <Link href="/docs">
          <span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">
            Docs
          </span>
        </Link>
        <Link href="/demo">
          <span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">
            Demo
          </span>
        </Link>
        <Link href="https://github.com/DevinoSolutions/upup">
          <span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">
            Learn More
          </span>
        </Link>
      </div> */}
    </header>
  );
};

export default Navbar;
