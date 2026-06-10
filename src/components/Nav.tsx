"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mailto } from "@/lib/email";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ash/95 backdrop-blur-sm border-b border-fog/60 px-6">
      <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-void text-base tracking-[0.22em] uppercase font-medium transition-opacity hover:opacity-60"
        >
          Melaya Palo
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-10">
          <Link
            href="/"
            className={`font-body text-xs tracking-[0.15em] uppercase py-2 relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-rust after:origin-right after:transition-transform hover:after:origin-left hover:after:scale-x-100 ${
              pathname === "/"
                ? "text-rust after:scale-x-100"
                : "text-void/60 hover:text-void after:scale-x-0"
            }`}
          >
            Home
          </Link>
          <a
            href={mailto("Book a Consult")}
            className="font-body text-xs tracking-[0.15em] uppercase bg-void text-ash px-6 py-2.5 hover:bg-rust transition-colors"
          >
            Book a Consult
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-void transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-px bg-void transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-void transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-ash border-t border-fog/60 px-6 py-8 flex flex-col gap-6 animate-menu">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-body text-xs tracking-[0.15em] uppercase text-void py-3"
          >
            Home
          </Link>
          <a
            href={mailto("Book a Consult")}
            onClick={() => setMenuOpen(false)}
            className="font-body text-xs tracking-[0.15em] uppercase bg-void text-ash px-6 py-4 text-center"
          >
            Book a Consult
          </a>
        </div>
      )}
    </header>
  );
}
