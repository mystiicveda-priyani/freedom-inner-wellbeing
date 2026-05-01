"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Root Cause Healing",
    description:
      "Address the core emotional wounds, not just surface-level symptoms.",
  },
  {
    icon: Heart,
    title: "Emotional Awareness",
    description:
      "Develop deep understanding of your emotional patterns and triggers.",
  },
  {
    icon: Shield,
    title: "Inner Stability",
    description:
      "Build lasting resilience that doesn&apos;t depend on external circumstances.",
  },
  {
    icon: Zap,
    title: "Real Transformation",
    description:
      "Experience genuine change that reflects in your daily life and relationships.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-beige/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-gold tracking-widest uppercase mb-4 block">
              About Omkar
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-emerald mb-6 leading-tight">
              Where Psychology Meets Inner Awareness
            </h2>

            <div className="space-y-5 text-emerald/70 leading-relaxed">
              <p>
                I&apos;m Omkar Pawar — a Psychologist, Emotional Healing Coach, and
                the founder of Freedom Inner Wellbeing. I work with working
                professionals who appear functional on the outside but
                internally struggle with anxiety, overthinking, emotional
                overwhelm, and repeated patterns.
              </p>

              <p>
                My approach combines clinical psychology with inner awareness
                practices to help you understand and heal the root causes of
                your emotional struggles — not just manage symptoms.
              </p>

              <p>
                Through structured 1:1 programs, I&apos;ve helped hundreds of
                professionals reclaim their inner peace and build the emotional
                resilience they need to thrive in both their careers and
                personal lives.
              </p>
            </div>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-8 text-emerald font-medium border-b-2 border-teal pb-1 hover:text-gold transition-colors"
            >
              Learn about my approach
              <span className="text-gold">→</span>
            </motion.a>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border/30 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-lg text-emerald mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-emerald/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
