"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Understand Emotional Patterns",
    description:
      "We begin by mapping your unique emotional landscape — understanding the patterns that drive your anxiety, overthinking, and triggers.",
  },
  {
    number: "02",
    title: "Identify Root Triggers",
    description:
      "Through deep exploration, we uncover the core experiences and beliefs that created these patterns in the first place.",
  },
  {
    number: "03",
    title: "Reduce Anxiety",
    description:
      "Using proven psychological techniques, we actively work to reduce the intensity and frequency of anxiety responses.",
  },
  {
    number: "04",
    title: "Heal Unresolved Wounds",
    description:
      "The heart of the work — processing and healing the emotional wounds that have been driving your struggles.",
  },
  {
    number: "05",
    title: "Build Emotional Stability",
    description:
      "We establish new neural pathways and emotional regulation skills that create lasting inner stability.",
  },
  {
    number: "06",
    title: "Create Lasting Change",
    description:
      "Integration of all learnings into your daily life, ensuring the transformation becomes your new normal.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 lg:py-32 bg-beige/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-gold tracking-widest uppercase mb-4 block"
          >
            The Framework
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-emerald mb-6"
          >
            The Healing Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-emerald/70 text-lg"
          >
            A proven 6-step framework that guides you from emotional overwhelm
            to lasting inner peace.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 border border-border/30 hover:border-teal/30 transition-all duration-500 hover:shadow-lg"
            >
              {/* Step Number */}
              <span className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-emerald flex items-center justify-center text-ivory text-sm font-semibold">
                {step.number}
              </span>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-3 w-6 h-0.5 bg-border/50" />
              )}

              <div className="pt-4">
                <h3 className="font-serif text-xl text-emerald mb-3 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-emerald/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-16"
        >
          <p className="text-emerald/60 mb-6">
            Ready to start your healing journey?
          </p>
          <motion.a
            href="https://topmate.io/lifecoachomkar/1967798"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald text-ivory rounded-full font-medium hover:bg-emerald-light transition-colors duration-300"
          >
            Book Your Clarity Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
