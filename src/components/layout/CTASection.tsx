"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { EXTERNAL_LINKS } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Your healing begins when you understand what's truly happening within.",
  subtitle = "Begin Your Journey",
  description = "Take the first step. A single conversation can change the direction of your inner life.",
  primaryCTA = "Book Clarity Call ↗",
  secondaryCTA = "Apply for Program",
  secondaryHref = "#services",
}: CTASectionProps) {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold rounded-full blur-3xl opacity-20"
        ></motion.div>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-gold mb-4"
            >
              <span className="w-6 h-px bg-gold inline-block mr-3 align-middle"></span>
              {subtitle}
              <span className="w-6 h-px bg-gold inline-block ml-3 align-middle"></span>
            </motion.p>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-white/70 mb-8"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          >
            <Button
              variant="gold"
              size="lg"
              asLink
              href={EXTERNAL_LINKS.topmate}
              target="_blank"
            >
              {primaryCTA}
            </Button>
            <Button variant="white" size="lg" asLink href={secondaryHref}>
              {secondaryCTA}
            </Button>
            <Button
              variant="outline-white"
              size="lg"
              asLink
              href={EXTERNAL_LINKS.topmate}
              target="_blank"
            >
              Talk to Omkar
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
