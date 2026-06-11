"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mailto, SUBJECTS } from "@/lib/content";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock scroll + make page content inert while the overlay menu is open */
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const regions = document.querySelectorAll("main, footer");
    regions.forEach((el) => el.toggleAttribute("inert", open));
    return () => {
      document.documentElement.style.overflow = "";
      regions.forEach((el) => el.removeAttribute("inert"));
    };
  }, [open]);

  /* close on Escape, returning focus to the toggle */
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* move focus into the menu on open; close if the viewport widens past md */
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open]);

  const close = () => setOpen(false);
  const isHome = pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-white/[0.06] bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-[4.5rem]">
          <Link
            href="/"
            onClick={close}
            className="font-display text-[15px] font-extrabold tracking-[0.18em] text-paper"
          >
            MELAYA PALO
          </Link>

          {/* desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              aria-current={isHome ? "page" : undefined}
              className={`font-mono text-xs uppercase tracking-[0.22em] transition-colors ${
                isHome ? "text-paper" : "text-white/55 hover:text-paper"
              }`}
            >
              Home
              {isHome && (
                <span
                  className="ml-2 inline-block size-1 rounded-full bg-signal align-middle"
                  aria-hidden
                />
              )}
            </Link>
            <a
              href={mailto(SUBJECTS.consult)}
              className="rounded-full bg-paper px-5 py-2.5 text-xs font-semibold tracking-wide text-ink transition-colors duration-300 hover:bg-signal-deep hover:text-white"
            >
              Book a Consult
            </a>
          </div>

          {/* mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex size-10 items-center justify-center md:hidden"
          >
            <span
              className={`absolute h-px w-6 bg-paper transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-paper transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>

        {/* mobile menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`md:hidden ${open ? "block" : "hidden"} h-[calc(100svh-4rem)] bg-ink/95 backdrop-blur-md`}
        >
          <div className="flex h-full flex-col justify-between px-6 pb-10 pt-12">
            <div className="space-y-8">
              <Link
                href="/"
                onClick={close}
                aria-current={isHome ? "page" : undefined}
                className="block font-display text-4xl font-bold text-paper"
              >
                Home
                {isHome && (
                  <span
                    className="ml-3 inline-block size-1.5 rounded-full bg-signal align-middle"
                    aria-hidden
                  />
                )}
              </Link>
              <a
                href={mailto(SUBJECTS.consult)}
                onClick={close}
                className="inline-flex rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink"
              >
                Book a Consult
              </a>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/55">
              Long Beach, CA — Virtual Available
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}
