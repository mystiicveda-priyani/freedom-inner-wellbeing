"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXTERNAL_LINKS } from "@/lib/constants";

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card variant="featured" className="p-8 md:p-12 relative">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gold rounded-full opacity-10"></div>
              <p className="text-2xl italic text-white leading-relaxed font-cormorant mb-6 relative z-10">
                "True healing isn't about managing symptoms — it's about understanding what's happening within."
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center font-playfair font-bold text-primary">
                  OP
                </div>
                <div>
                  <p className="font-semibold text-white">Omkar Pawar</p>
                  <p className="text-sm text-white/65">
                    Psychologist & Emotional Healing Coach
                  </p>
                </div>
              </div>
            </Card>

            {/* Float Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-gold-pale border border-gold/30 rounded-2xl p-4 shadow-lg max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-lg">
                  🧠
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">
                    Root-cause Approach
                  </p>
                  <p className="text-xs text-charcoal-soft">
                    Psychology + Inner Awareness
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                <span className="w-6 h-px bg-gold inline-block mr-3 align-middle"></span>
                About Omkar
              </p>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
                Meet Omkar Pawar
              </h2>
              <div className="w-12 h-1 bg-gold rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 text-charcoal-soft">
              <p>
                Hi, I'm Omkar Pawar — psychologist, emotional healing coach, and founder of Freedom Inner Wellbeing.
              </p>
              <p>
                I help working professionals overcome anxiety, overthinking, and emotional triggers by combining psychological methods with inner awareness practices.
              </p>
              <p>
                My work focuses on healing root emotional patterns — so you experience real transformation, not temporary symptom management.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-4 py-2 bg-ivory border border-primary/12 rounded-full text-sm font-semibold text-primary">
                Psychologist
              </span>
              <span className="px-4 py-2 bg-ivory border border-primary/12 rounded-full text-sm font-semibold text-primary">
                Emotional Healing Coach
              </span>
              <span className="px-4 py-2 bg-ivory border border-primary/12 rounded-full text-sm font-semibold text-primary">
                Root-cause Therapy
              </span>
              <span className="px-4 py-2 bg-ivory border border-primary/12 rounded-full text-sm font-semibold text-primary">
                Inner Awareness
              </span>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                asLink
                href={EXTERNAL_LINKS.topmate}
                target="_blank"
              >
                Talk to Omkar ↗
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
