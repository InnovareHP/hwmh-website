"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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

  // The hash the visitor just clicked. While it is set, the scroll-spy stays
  // quiet, so the address bar doesn't churn through every section the smooth
  // scroll passes on the way to the target.
  const pendingHashRef = useRef<string | null>(null);
  const pendingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  // Let the browser handle the jump natively so the #hash lands in the URL
  // (scroll offset for the fixed nav comes from `scroll-margin-top` in globals.css).
  const handleNavClick = (href: string) => {
    pendingHashRef.current = href;
    if (pendingTimeoutRef.current) clearTimeout(pendingTimeoutRef.current);
    // Safety net: if the target section never reports in (same-section click,
    // interrupted scroll), don't stay suppressed forever.
    pendingTimeoutRef.current = setTimeout(() => {
      pendingHashRef.current = null;
    }, 1200);
    closeMenu();
  };

  // Keep the URL hash in sync with the section currently in view, so the
  // address bar is always a shareable link to what the visitor is reading.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // The observer reports every target's state right after observe(). That is
    // page-load state, not a user scroll, so a clean URL must stay clean until
    // the visitor actually scrolls. `once` removes the listener after one hit.
    let userHasScrolled = false;
    const markScrolled = () => {
      userHasScrolled = true;
    };
    window.addEventListener("scroll", markScrolled, {
      once: true,
      passive: true,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!userHasScrolled) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          // the section covering the most of the detection band wins, so the
          // one actually filling the viewport is the one named in the URL
          .sort(
            (a, b) => b.intersectionRect.height - a.intersectionRect.height
          )[0];

        if (!visible) return;

        const hash = `#${visible.target.id}`;

        // A click is in flight: ignore everything until we land on its target.
        if (pendingHashRef.current) {
          if (hash !== pendingHashRef.current) return;
          pendingHashRef.current = null;
          if (pendingTimeoutRef.current) clearTimeout(pendingTimeoutRef.current);
        }

        if (hash !== window.location.hash) {
          // replaceState instead of pushState: no back-button spam while scrolling
          window.history.replaceState(null, "", hash);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", markScrolled);
      if (pendingTimeoutRef.current) clearTimeout(pendingTimeoutRef.current);
    };
  }, []);

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
                onClick={() => handleNavClick(item.href)}
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
                  onClick={() => handleNavClick(item.href)}
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
