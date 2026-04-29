"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How is this different from regular therapy?",
    answer:
      "While therapy often focuses on managing symptoms, my approach goes deeper to identify and heal the root causes of your emotional patterns. We combine clinical psychology with inner awareness practices to create lasting transformation, not just temporary relief.",
  },
  {
    question: "I'm a busy professional. How much time do I need to commit?",
    answer:
      "The 8-week program requires one 60-90 minute session per week, plus about 20-30 minutes daily for practices. Most clients find this manageable alongside their work schedules, and the benefits actually improve their productivity and focus.",
  },
  {
    question: "Will this work if I've tried therapy before without success?",
    answer:
      "Many of my clients have tried traditional therapy without finding lasting results. My approach is specifically designed for high-functioning professionals and addresses patterns that conventional methods often miss. The combination of psychology and inner awareness often reaches what talk therapy alone cannot.",
  },
  {
    question: "How do I know if I'm ready for this work?",
    answer:
      "You're ready if you're tired of the same patterns repeating, if you sense there's something deeper causing your struggles, and if you're willing to do the inner work required. The Clarity Call helps us determine together if this approach is right for you.",
  },
  {
    question: "Is everything I share kept confidential?",
    answer:
      "Absolutely. Complete confidentiality is the foundation of our work together. Everything discussed in our sessions remains strictly private. This safe space allows for the deep, honest exploration needed for real healing.",
  },
  {
    question: "What results can I expect from the 8-week program?",
    answer:
      "Most clients experience significant reduction in anxiety and overthinking, improved emotional regulation, clarity about their patterns, better relationships, and a sense of inner peace they haven't felt in years. Results vary, but transformation is the consistent outcome for those who commit to the process.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-ivory" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-teal tracking-widest uppercase mb-4 block"
            >
              FAQ
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-6"
            >
              Common Questions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-navy/70 text-lg"
            >
              Find answers to frequently asked questions about the healing
              process.
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="border border-border/30 rounded-2xl overflow-hidden bg-card"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-beige/30 transition-colors"
                >
                  <span className="font-medium text-navy pr-8">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-teal" />
                    ) : (
                      <Plus className="w-4 h-4 text-teal" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-navy/70 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
