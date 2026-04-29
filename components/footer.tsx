"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  resources: [
    { label: "Book Clarity Call", href: "https://topmate.io/lifecoachomkar/1967798" },
    { label: "Community", href: "#community" },
    { label: "FAQ", href: "#faq" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@freedominnerwellbeing.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 bg-beige/90 rounded-2xl px-5 py-4 w-fit shadow-lg shadow-black/10">
              <Image
                src="/images/logo.png"
                alt="Freedom Inner Wellbeing"
                width={180}
                height={68}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-md mb-6">
              Helping working professionals overcome anxiety, overthinking, and
              emotional triggers through psychology-based emotional healing and
              inner awareness.
            </p>
            <p className="text-ivory/50 text-xs italic">
              Where Psychology Meets Inner Awareness
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-ivory mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-ivory/60 hover:text-teal transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-ivory mb-6">Get Started</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-ivory/60 hover:text-teal transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="mt-8">
              <h4 className="font-semibold text-ivory mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center text-ivory/60 hover:bg-teal hover:text-ivory transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/40 text-sm">
            &copy; {new Date().getFullYear()} Freedom Inner Wellbeing. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6 text-ivory/40 text-sm">
            <a href="#" className="hover:text-ivory transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ivory transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
