"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { useScrollDirection } from 'react-use-scroll-direction';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();

  useEffect(() => {
    if (isScrollingUp) setIsInView(true);
    if (isScrollingDown) {
      setIsInView(false);
      setIsMenuOpen(false);
    }
  }, [isScrollingUp, isScrollingDown]);

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isInView ? 0 : '-100%',
        opacity: isInView ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 max-w-full box-border w-full flex justify-between items-center p-4 px-8 z-50 bg-white shadow-md"
    >
      <Link href="/" passHref>
        <Image src="/logo.png" alt="Logo" height={50} width={100} />
      </Link>

      {/* Desktop Menu */}
      <div className="flex justify-between items-center w-full">
        <nav className="hidden md:flex md:items-center md:justify-center flex-1">
          <Link href="/" passHref><span className="cursor-pointer px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200">Home</span></Link>
          <Link href="/docs/index.html" passHref><span className="cursor-pointer px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200">Docs</span></Link>
          <Link href="/demo" passHref><span className="cursor-pointer px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200">Demo</span></Link>
        </nav>
        {/* Learn More Button */}
        <Link href="https://github.com/DevinoSolutions/upup" passHref>
          <span className="cursor-pointer hidden md:block backdrop-blur-3xl p-2 px-4 rounded bg-white">Learn More</span>
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <RiCloseFill className="h-6 w-6" /> : <RiMenu3Fill className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      <motion.div
  initial={false}
  animate={{
    maxHeight: isMenuOpen ? '500px' : 0, // Adjust max-height as necessary
    opacity: isMenuOpen ? 1 : 0,
    display: isMenuOpen ? 'flex' : 'none',
  }}
  transition={{ duration: 0.5, ease: "linear" }}
  className="absolute top-full right-0 max-w-full w-screen md:w-auto bg-white shadow-md flex-col md:hidden overflow-x-hidden"
  >
        <Link href="/" passHref><span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">Home</span></Link>
        <Link href="/docs/index.html" passHref><span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">Docs</span></Link>
        <Link href="/demo" passHref><span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">Demo</span></Link>
        {/* Mobile Learn More Button */}
        <Link href="https://github.com/DevinoSolutions/upup" passHref><span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">Learn More</span></Link>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
