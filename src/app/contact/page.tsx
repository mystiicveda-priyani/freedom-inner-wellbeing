import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTASection from "@/components/layout/CTASection";
import { BRAND, EXTERNAL_LINKS } from "@/lib/constants";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Freedom Inner Wellbeing",
  description: "Get in touch with Omkar or book a session at Freedom Inner Wellbeing.",
};

export default function Contact() {
  return (
    <>
      <section className="pt-40 pb-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-16 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
                <span className="w-6 h-px bg-gold inline-block mr-3 align-middle"></span>
                Get in Touch
              </p>
              <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
                Let's Connect
              </h1>
              <p className="text-lg text-charcoal-soft">
                Ready to begin your emotional healing journey? Reach out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <Card className="p-8 text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-playfair font-bold text-primary mb-2">Email</h3>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-gold hover:text-primary transition-colors break-all"
                >
                  {BRAND.email}
                </a>
              </Card>

              {/* Phone */}
              <Card className="p-8 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-playfair font-bold text-primary mb-2">Phone</h3>
                <p className="text-charcoal-soft">{BRAND.phone}</p>
              </Card>

              {/* Topmate */}
              <Card className="p-8 text-center">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="font-playfair font-bold text-primary mb-2">
                  Book a Session
                </h3>
                <p className="text-charcoal-soft text-sm mb-4">
                  Schedule directly on Topmate
                </p>
                <Button
                  variant="gold"
                  size="sm"
                  asLink
                  href={EXTERNAL_LINKS.topmate}
                  target="_blank"
                >
                  Visit Topmate
                </Button>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <div className="mb-8 text-center">
                <p className="text-sm font-semibold text-charcoal mb-3">Prefer a quick message? Reach out on:</p>
                <div className="flex items-center justify-center gap-4">
                  {SOCIAL_LINKS.map((social, i) => (
                    <a
                      key={`${social.href}-${i}`}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full bg-ivory border border-primary/10 flex items-center justify-center text-primary hover:bg-gold hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social.label}</span>
                      {(() => {
                        switch (social.label.toLowerCase()) {
                          case "instagram":
                            return (
                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                              </svg>
                            );
                          case "linkedin":
                            return (
                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8.5 10.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M8.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor" />
                                <path d="M12.5 13.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M12.5 8.5v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            );
                          case "google":
                            return (
                              <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M21.6 12.2c0-.7-.1-1.3-.3-1.9H12v3.6h5.5c-.2 1.2-.9 2.2-1.9 2.9v2.4h3.1c1.8-1.7 2.9-4.1 2.9-6.9z" fill="currentColor" />
                                <path d="M12 22c2.7 0 5-0.9 6.7-2.5l-3.1-2.4c-.9.6-2 1-3.6 1-2.8 0-5.2-1.9-6.1-4.5H2.6v2.8C4.3 19.8 7.9 22 12 22z" fill="currentColor" />
                                <path d="M5.9 13.1c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V6.1H2.6C1 8.2 0 10.9 0 13.1s1 4.9 2.6 7l3.3-2.9z" fill="currentColor" />
                                <path d="M12 4.6c1.5 0 2.8.5 3.8 1.5l2.8-2.8C17 1.8 14.7 1 12 1 7.9 1 4.3 3.2 2.6 6.1l3.3 2.8C6.8 6.6 9.2 4.6 12 4.6z" fill="currentColor" />
                              </svg>
                            );
                          case "whatsapp":
                            return (
                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 .02 4.83.02 11.08c0 1.95.51 3.86 1.48 5.56L0 24l7.7-2.02a11.1 11.1 0 0 0 4.3.85h.01c6.63 0 11.99-4.83 11.99-11.08 0-2.97-1.16-5.75-3.18-7.32z" stroke="currentColor" strokeWidth="0.8" />
                                <path d="M17.3 14.1c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.1-.3.2-.5.1-.2 0-.4-.1-.6-.1-.2-.8-1.7-1-2.4-.3-.6-.6-.5-.8-.5l-.7-.0c-.2 0-.4.1-.6.2-.2.2-.8.8-.8 2 0 1.2.9 2.4 1 2.6.1.2 1.6 2.7 3.8 3.8 2.2 1.1 2.2.7 2.6.7.3-.1 1-.5 1.1-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3z" fill="currentColor" />
                              </svg>
                            );
                              default:
                                return <span className="text-sm font-bold">{social.label}</span>;
                        }
                      })()}
                    </a>
                  ))}
                </div>
              </div>
              <h2 className="text-3xl font-playfair font-bold text-primary mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "What is emotional healing?",
                    a: "Emotional healing is the process of understanding, processing, and releasing emotional wounds and patterns that limit you. It goes beyond symptom management to address root causes.",
                  },
                  {
                    q: "How is your approach different?",
                    a: "I combine psychological frameworks with inner awareness practices, focusing on root causes rather than just treating symptoms. My goal is real transformation, not temporary relief.",
                  },
                  {
                    q: "Who is this for?",
                    a: "Primarily for working professionals and business owners struggling with anxiety, overthinking, emotional triggers, or repeating patterns. You should be ready for genuine inner work.",
                  },
                  {
                    q: "What is the time commitment?",
                    a: "The 8-week program requires 1 hour per week for 8 weeks, plus personal reflection work. Clarity sessions are single 60-minute sessions.",
                  },
                  {
                    q: "Is there a free consultation?",
                    a: "You can book a Clarity Session to discuss your situation, understand my approach, and determine if the program is right for you.",
                  },
                  {
                    q: "What results can I expect?",
                    a: "Results vary, but clients report reduced anxiety, clearer thinking, better emotional regulation, freedom from repeating patterns, and a genuine sense of inner peace.",
                  },
                ].map((faq, idx) => (
                  <Card key={idx} className="p-6">
                    <h4 className="font-playfair font-bold text-primary mb-3">
                      {faq.q}
                    </h4>
                    <p className="text-charcoal-soft leading-relaxed">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form Alternative */}
            <Card className="p-8 bg-ivory">
              <h3 className="font-playfair font-bold text-primary mb-4">
                Or reach out directly
              </h3>
              <p className="text-charcoal-soft mb-6">
                If you prefer to get in touch via email first, send me a message at{" "}
                <a href={`mailto:${BRAND.email}`} className="text-gold hover:underline break-all">
                  {BRAND.email}
                </a>
                . I usually respond within 24 hours.
              </p>
              <Button
                variant="primary"
                size="lg"
                asLink
                href={`mailto:${BRAND.email}`}
              >
                Send Email
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
