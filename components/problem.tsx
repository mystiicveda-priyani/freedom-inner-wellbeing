"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const problems = [
  "Constant overthinking that keeps you up at night",
  "Anxiety even when everything looks fine externally",
  "Emotional exhaustion despite a successful career",
  "Relationship triggers that repeat over and over",
  "Feeling stuck in the same patterns year after year",
  "Appearing composed outside while struggling within",
];

export function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-emerald relative overflow-hidden" ref={ref}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-gold tracking-widest uppercase mb-4 block"
          >
            You&apos;re Not Alone
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6 leading-tight"
          >
            Do You Feel Like This?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ivory/70 text-lg mb-12 max-w-2xl mx-auto"
          >
            Many professionals experience these struggles silently. Recognizing
            them is the first step toward healing.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 bg-ivory/5 backdrop-blur-sm rounded-xl p-5 text-left border border-ivory/10"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-gold" />
                </div>
                <span className="text-ivory/90 text-sm md:text-base leading-relaxed">
                  {problem}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-teal/10 backdrop-blur-sm rounded-2xl p-8 border border-teal/20"
          >
            <p className="text-ivory/90 text-lg md:text-xl font-serif italic">
              &ldquo;You are not alone — and this can change.&rdquo;
            </p>
            <p className="text-ivory/60 text-sm mt-4">
              The emotional patterns you struggle with have roots that can be
              understood and healed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
