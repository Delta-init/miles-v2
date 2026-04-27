"use client";
import { useState } from "react";
import MilesCapitalLogo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#products", label: "Products" },
  { href: "#tools", label: "Tools" },
  { href: "#platforms", label: "Platforms" },
  { href: "#accounts", label: "Accounts" },
  { href: "#why", label: "Why Us" },
  { href: "#partnership", label: "Partnership" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="outline-none focus:outline-none" onClick={() => setOpen(false)}>
          <MilesCapitalLogo size={32} />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a className="hover:text-foreground transition-colors" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + theme toggle */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <a href="/login" className="btn-ghost text-sm">
            Login
          </a>
          <a
            href="https://milescap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Get Started <span aria-hidden>→</span>
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full border border-border hover:bg-accent/10 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-3 px-4 rounded-xl text-sm hover:bg-accent/10 hover:text-foreground text-muted transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-3 border-t border-border mt-2">
              <a
                href="/login"
                className="btn-ghost flex-1 justify-center text-sm"
                onClick={() => setOpen(false)}
              >
                Login
              </a>
              <a
                href="https://milescap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center"
                onClick={() => setOpen(false)}
              >
                Get Started →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
