import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CTASection from "@/components/layout/CTASection";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Omkar Pawar | Freedom Inner Wellbeing",
  description:
    "Meet Omkar Pawar, psychologist and emotional healing coach. Learn about his approach to healing emotional patterns and inner awareness.",
};

export default function About() {
  return (
    <>
      <section className="pt-40 pb-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
                <span className="w-6 h-px bg-gold inline-block mr-3 align-middle"></span>
                About Me
              </p>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
                Omkar Pawar
              </h1>
              <p className="text-xl font-cormorant italic text-gold mb-8">
                Psychologist, Emotional Healing Coach, and Founder of Freedom Inner Wellbeing
              </p>
            </div>

            <div className="space-y-6 text-charcoal-soft leading-relaxed mb-8">
              <p>
                Hi, I'm Omkar Pawar. I'm a psychologist and emotional healing coach dedicated to helping working professionals overcome anxiety, overthinking, and emotional triggers through a structured, root-cause approach.
              </p>

              <p>
                My journey into this work began with a deep recognition that many people — especially high-performing professionals — appear functional on the surface while internally struggling with persistent emotional overwhelm, anxiety, and repeating patterns they can't seem to break.
              </p>

              <p>
                I realized that conventional therapy approaches often address symptoms, not roots. That's why I developed an integrated methodology that combines:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Evidence-based psychological frameworks</li>
                <li>Inner awareness practices</li>
                <li>Emotional pattern recognition and healing</li>
                <li>Structured, goal-oriented transformation</li>
              </ul>

              <p>
                My philosophy is simple: real healing happens when you understand what's truly happening within — when you see the patterns, recognize the triggers, and address the root emotional wounds beneath the surface.
              </p>

              <p>
                This isn't about managing anxiety or coping with emotions. This is about genuine transformation — where you rebuild your inner foundation so that the old patterns lose their grip, and you experience real freedom.
              </p>

              <h3 className="text-2xl font-playfair font-bold text-primary mt-12 mb-4">
                The Emotional Healing Framework
              </h3>

              <p>
                My approach to emotional healing is structured in 6 phases:
              </p>

              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Understand:</strong> Map your emotional landscape and identify core patterns
                </li>
                <li>
                  <strong>Trace:</strong> Discover the origins and root causes of your emotional responses
                </li>
                <li>
                  <strong>Release:</strong> Calm the nervous system and reduce anxiety through specific tools
                </li>
                <li>
                  <strong>Heal:</strong> Work with unresolved wounds and inner-child patterns
                </li>
                <li>
                  <strong>Rebuild:</strong> Develop emotional resilience and genuine inner stability
                </li>
                <li>
                  <strong>Integrate:</strong> Create lasting change that flows into every area of your life
                </li>
              </ol>

              <p>
                This is not a quick-fix approach. This is deep, intentional work designed for professionals ready to do the inner work and experience real transformation.
              </p>

              <p>
                If you're struggling with anxiety, overthinking, emotional triggers, or repeating patterns — and you're ready for genuine healing, not just symptom management — I'm here to help.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                variant="primary"
                size="lg"
                asLink
                href={EXTERNAL_LINKS.topmate}
                target="_blank"
              >
                Talk to Omkar ↗
              </Button>
              <Button variant="outline" size="lg" asLink href="/">
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
