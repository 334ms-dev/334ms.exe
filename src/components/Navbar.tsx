"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,backdrop-filter] duration-300 ease-out ${
        mobileOpen
          ? "bg-black border-transparent"
          : scrolled 
            ? "bg-black/90 backdrop-blur-xl border-white/[0.06]" 
            : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="https://mc-heads.net/avatar/334ms/32"
            alt="334ms"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-lg text-white/90 relative top-[0px]">334ms</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white/40 hover:text-white/80 transition-colors text-[10px] tracking-[0.2em] uppercase"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle - Minecraft style */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-6 h-5 flex flex-col justify-between items-center py-0.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white/60 block"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-white/60 block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white/60 block"
          />
        </button>
      </div>

      {/* Mobile Menu - Fullscreen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black z-40"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 w-6 h-6 flex items-center justify-center"
              aria-label="Close menu"
            >
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: 45 }}
                className="absolute w-5 h-0.5 bg-white/60"
              />
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: -45 }}
                className="absolute w-5 h-0.5 bg-white/60"
              />
            </button>

            <ul className="flex flex-col items-center justify-center h-full gap-10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/60 hover:text-white text-lg tracking-[0.2em] uppercase transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
