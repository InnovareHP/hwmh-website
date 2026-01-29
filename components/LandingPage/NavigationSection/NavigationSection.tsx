"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Who We Are", href: "#who-we-are" },
  { name: "What We Do", href: "#what-we-do" },
  { name: "What They Say", href: "#what-they-say" },
  { name: "Why Work With Us", href: "#why-work-with-us" },
  { name: "Contact Us", href: "#contact-us" },
];

const NavigationSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offsetTop =
          element.getBoundingClientRect().top + window.pageYOffset - 80; // 80px offset for sticky nav
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
      closeMenu();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav className="w-full bg-white py-4 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="flex justify-end items-center px-4 md:px-8 lg:px-16">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-end items-center list-none m-0 gap-8">
          {navItems.map((item) => (
            <li key={item.href} className="m-0">
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[#0d1216b3] no-underline font-bold text-base font-[Arial,sans-serif] transition-colors duration-300 hover:text-[black]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          type="button"
          onClick={openMenu}
          className="md:hidden text-[#0d1216b3] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sliding Menu Panel (Mobile) */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-80 bg-white transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6">
            <button
              type="button"
              onClick={closeMenu}
              className="text-black focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col list-none m-0 p-6 gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[#4a4a4a] no-underline font-bold text-lg font-[Arial,sans-serif] transition-colors duration-300 hover:text-black block py-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dark overlay (Mobile) */}
      <div
        role="button"
        tabIndex={0}
        onClick={closeMenu}
        onKeyDown={(e) => e.key === "Enter" && closeMenu()}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Close menu"
      />
    </nav>
  );
};

export default NavigationSection;
