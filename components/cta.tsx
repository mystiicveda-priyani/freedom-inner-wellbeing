"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-emerald relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sage rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-gold tracking-widest uppercase mb-4 block"
          >
            Take the First Step
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6 leading-tight"
          >
            You Don&apos;t Have to Keep Functioning on the Outside While
            Struggling Within
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ivory/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            The path to emotional freedom begins with a single conversation.
            Let&apos;s explore what&apos;s possible for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://topmate.io/lifecoachomkar/1967798"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ivory text-navy rounded-full font-medium hover:bg-ivory/90 transition-all duration-300 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Clarity Call
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="https://topmate.io/lifecoachomkar/1967798"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-ivory/30 text-ivory rounded-full font-medium hover:border-ivory/50 hover:bg-ivory/5 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Omkar
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-ivory/10"
          >
            <p className="text-ivory/40 text-sm mb-6">
              Trusted by professionals from leading organizations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-ivory/30">
              <span className="text-sm">Confidential</span>
              <span className="w-1 h-1 rounded-full bg-ivory/20" />
              <span className="text-sm">Psychology-Based</span>
              <span className="w-1 h-1 rounded-full bg-ivory/20" />
              <span className="text-sm">Results-Driven</span>
              <span className="w-1 h-1 rounded-full bg-ivory/20" />
              <span className="text-sm">Personalized</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
