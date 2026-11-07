
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Heart, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Letter", href: "#letter" },
  { label: "Memories", href: "#memories" },
  { label: "About You", href: "#qualities" },
  { label: "Surprise", href: "#surprise" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-7">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[#F3DCE8]/90 bg-[#FFF8FC]/90 px-5 py-3 shadow-[0_5px_25px_rgba(190,24,93,0.07)] backdrop-blur-xl">

        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Go to homepage"
          className="group flex items-center gap-2"
        >
          <Heart
            size={18}
            fill="#EC4899"
            className="text-[#EC4899] transition-transform duration-300 group-hover:scale-110"
          />

          <span className="font-editorial text-xl italic text-foreground transition-colors group-hover:text-accent">
            Just for you
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] font-medium uppercase tracking-[0.13em] text-muted transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-all duration-300 hover:bg-secondary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-[#F3DCE8] bg-[#FFF8FC]/95 p-3 shadow-[0_12px_35px_rgba(190,24,93,0.10)] backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-xl px-5 py-4 text-sm text-foreground transition-all duration-300 hover:bg-secondary hover:pl-7 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
