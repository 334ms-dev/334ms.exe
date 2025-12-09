"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMenu = useCallback(() => setMobileOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          mobileOpen
            ? "bg-transparent border-transparent"
            : scrolled
              ? "bg-black/90 backdrop-blur-xl border-white/[0.06]"
              : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className={`flex items-center gap-3 hover:opacity-80 transition-opacity ${mobileOpen ? "opacity-0 pointer-events-none" : ""}`}
          >
            <Image
              src="https://mc-heads.net/avatar/334ms/32"
              alt="334ms"
              width={32}
              height={32}
              className="rounded"
              priority
            />
            <span className="text-lg text-white/90">334ms</span>
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

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-6 h-5 flex flex-col justify-between items-center py-0.5 z-[60] relative"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`w-full h-0.5 bg-white/60 block transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white/60 block transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white/60 block transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      <div
        className={`md:hidden fixed inset-0 z-[55] transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          onClick={closeMenu}
        />

        {/* Content - Always centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="text-white/70 hover:text-white text-xl tracking-[0.2em] uppercase transition-colors block py-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default memo(Navbar);
