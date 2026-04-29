"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#community", label: "Community" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Freedom Inner Wellbeing"
            width={160}
            height={60}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-navy/70 hover:text-navy transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://topmate.io/lifecoachomkar/1967798"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm font-medium text-ivory bg-navy rounded-full hover:bg-navy-light transition-colors duration-300"
          >
            Book Clarity Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-navy"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ivory/95 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-navy/80 hover:text-navy py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://topmate.io/lifecoachomkar/1967798"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 text-center text-sm font-medium text-ivory bg-navy rounded-full"
              >
                Book Clarity Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
