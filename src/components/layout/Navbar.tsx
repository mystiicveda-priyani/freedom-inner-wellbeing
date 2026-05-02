"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { BRAND, NAV_LINKS, EXTERNAL_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-premium-sm py-3"
            : "bg-ivory/80 backdrop-blur-lg py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt={BRAND.name}
              width={48}
              height={48}
              className="rounded-full object-contain"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-cormorant font-semibold text-primary text-lg leading-tight">
                {BRAND.name}
              </span>
              <span className="text-xs font-bold text-gold tracking-widest uppercase">
                Emotional Healing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-charcoal-soft hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="md"
              asLink
              href={EXTERNAL_LINKS.topmate}
              target="_blank"
            >
              Book Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-20 lg:hidden bg-ivory z-40 flex flex-col items-center justify-center gap-6 py-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-cormorant text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="primary"
            size="lg"
            asLink
            href={EXTERNAL_LINKS.topmate}
            target="_blank"
          >
            Book Call
          </Button>
        </div>
      )}
    </>
  );
}
