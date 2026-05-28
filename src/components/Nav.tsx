"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-sand">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-widest text-bark uppercase"
        >
          Melaya Palo
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium tracking-wide uppercase transition-colors ${
              pathname === "/"
                ? "text-clay"
                : "text-stone hover:text-bark"
            }`}
          >
            Home
          </Link>
          <Link
            href="/members"
            className={`text-sm font-medium tracking-wide uppercase transition-colors ${
              pathname === "/members"
                ? "text-clay"
                : "text-stone hover:text-bark"
            }`}
          >
            Members
          </Link>
          <a
            href="mailto:melayapalo@gmail.com"
            className="text-sm font-medium tracking-wide uppercase bg-clay text-cream px-5 py-2 transition-opacity hover:opacity-80"
          >
            Book a Consult
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-bark transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-bark transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-bark transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-cream border-t border-sand px-5 py-6 flex flex-col gap-5">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium tracking-widest uppercase text-bark"
          >
            Home
          </Link>
          <Link
            href="/members"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium tracking-widest uppercase text-bark"
          >
            Members
          </Link>
          <a
            href="mailto:melayapalo@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium tracking-widest uppercase bg-clay text-cream px-5 py-3 text-center"
          >
            Book a Consult
          </a>
        </div>
      )}
    </header>
  );
}
