"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mailto } from "@/lib/email";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ash/95 backdrop-blur-sm border-b border-fog/60">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-void text-base tracking-[0.22em] uppercase font-medium"
        >
          Melaya Palo
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-10">
          <Link
            href="/"
            className={`font-body text-xs tracking-[0.15em] uppercase transition-colors ${
              pathname === "/"
                ? "text-copper"
                : "text-dust hover:text-void"
            }`}
          >
            Home
          </Link>
          <a
            href={mailto("Book a Consult")}
            className="font-body text-xs tracking-[0.15em] uppercase bg-void text-ash px-6 py-2.5 hover:bg-copper transition-colors"
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
          <span className={`block w-6 h-px bg-void transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-px bg-void transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-void transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-ash border-t border-fog/60 px-6 py-8 flex flex-col gap-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-body text-xs tracking-[0.15em] uppercase text-void"
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
