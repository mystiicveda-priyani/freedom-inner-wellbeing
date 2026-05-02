import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTASection from "@/components/layout/CTASection";
import { BRAND, EXTERNAL_LINKS } from "@/lib/constants";

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
                  className="text-gold hover:text-primary transition-colors"
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
                <a href={`mailto:${BRAND.email}`} className="text-gold hover:underline">
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
