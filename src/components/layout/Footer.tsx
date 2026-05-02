import Link from "next/link";
import { BRAND, NAV_LINKS, SOCIAL_LINKS, EXTERNAL_LINKS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import { IconInstagram, IconLinkedIn, IconGoogle, IconWhatsApp } from "./SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <Container className="pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.svg"
                alt={BRAND.name}
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
              <div className="flex flex-col">
                <span className="font-cormorant font-semibold text-white text-lg leading-tight">
                  {BRAND.name}
                </span>
              </div>
            </Link>
            <p className="text-sm italic text-white/50 leading-relaxed">
              {BRAND.description}
            </p>
            {/* Social */}
            <div className="flex gap-2 mt-4">
              {SOCIAL_LINKS.map((s, i) => {
                let Icon = null;
                if (s.label.toLowerCase().includes("instagram")) Icon = IconInstagram;
                if (s.label.toLowerCase().includes("linkedin")) Icon = IconLinkedIn;
                if (s.label.toLowerCase().includes("google")) Icon = IconGoogle;
                if (s.label.toLowerCase().includes("whatsapp")) Icon = IconWhatsApp;

                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2"
                  >
                    {Icon ? <Icon className="w-5 h-5" /> : null}
                    <span>{s.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-white/85 mb-4">
              Navigate
            </h5>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-white/85 mb-4">
              Programs
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  8-Week Healing Program
                </Link>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.topmate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Clarity Session
                </a>
              </li>
              <li>
                <Link
                  href="#community"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-white/85 mb-4">
              Connect
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href={EXTERNAL_LINKS.topmate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Book via Topmate
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-sm text-white/50 hover:text-gold transition-colors break-all"
                >
                  Email Omkar
                </a>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <span>
            © {currentYear} {BRAND.name}. Founded by {BRAND.founder}.
          </span>
          <span>Made with intention, for transformation.</span>
        </div>
      </Container>
    </footer>
  );
}
