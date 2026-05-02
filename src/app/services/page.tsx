import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/layout/CTASection";
import { SERVICES, EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services & Programs | Freedom Inner Wellbeing",
  description:
    "Explore our emotional healing programs: 8-Week Healing Program, Clarity Sessions, and Group Workshops.",
};

export default function Services() {
  return (
    <>
      <section className="pt-40 pb-24 bg-white">
        <Container>
          <div className="mb-20">
            <SectionHeading
              label="What We Offer"
              title="Healing Programs & Sessions"
              subtitle="Choose the program that fits your journey towards emotional freedom"
              centered
            />
          </div>

          <div className="space-y-16">
            {/* 8-Week Program */}
            <Card className="p-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/12 border border-gold/30 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">
                    ⭐ Signature Program
                  </span>
                </div>
                <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                  8-Week Emotional Healing Program
                </h2>
                <p className="text-charcoal-soft mb-6 leading-relaxed">
                  This is our flagship program — a structured, intensive 1:1 experience designed for professionals ready for deep, root-cause emotional healing.
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-primary">What's Included:</h4>
                  <ul className="space-y-3">
                    {SERVICES[0].includes?.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-charcoal-soft">
                        <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-charcoal-soft mb-8 italic">
                  "This isn't quick-fix therapy. This is deep, intentional work for genuine transformation."
                </p>

                <Button
                  variant="primary"
                  size="lg"
                  asLink
                  href={EXTERNAL_LINKS.topmate}
                  target="_blank"
                >
                  Apply for Program ↗
                </Button>
              </div>
            </Card>

            {/* Clarity Session */}
            <Card className="p-12">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
                  Clarity Session
                </h3>
                <p className="text-charcoal-soft mb-6 leading-relaxed">
                  Not sure if deep work is right for you? Start with a focused 1:1 session to understand your emotional patterns, gain clarity on your challenges, and get a clear roadmap for your next steps.
                </p>
                <p className="text-charcoal-soft mb-8">
                  <strong>Duration:</strong> 60 minutes | <strong>Format:</strong> 1:1 Call |{" "}
                  <strong>Price:</strong> Booking available on Topmate
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  asLink
                  href={EXTERNAL_LINKS.topmate}
                  target="_blank"
                >
                  Book via Topmate →
                </Button>
              </div>
            </Card>

            {/* Workshops */}
            <Card className="p-12">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
                  Workshops & Group Sessions
                </h3>
                <p className="text-charcoal-soft mb-6 leading-relaxed">
                  Join live, guided group sessions on emotional awareness, anxiety management, inner child healing, and emotional regulation. These sessions create a safe, supportive community where healing happens collectively.
                </p>
                <p className="text-charcoal-soft mb-8">
                  <strong>Frequency:</strong> Weekly | <strong>Format:</strong> Live Group |{" "}
                  <strong>Community:</strong> Private, professional group
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  asLink
                  href={EXTERNAL_LINKS.topmate}
                  target="_blank"
                >
                  Join the Community →
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-ivory rounded-2xl border border-primary/10">
            <p className="text-charcoal-soft text-center">
              <strong>Not sure which program is right for you?</strong> Start with a Clarity Session to explore your options and get personalized guidance.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
