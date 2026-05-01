"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-sage/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-mist/60 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-sage" />
              <span className="text-xs font-medium text-emerald/70 tracking-wide uppercase">
                Psychology-Based Emotional Healing
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-emerald leading-[1.15] mb-6">
              Overcome Anxiety, Overthinking & Emotional Triggers{" "}
              <span className="text-sage">at the Root</span>
            </h1>

            <p className="text-lg md:text-xl text-emerald/70 leading-relaxed mb-10 max-w-xl">
              Helping working professionals heal unresolved emotional patterns
              through psychology-based emotional healing and inner awareness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://topmate.io/lifecoachomkar/1967798"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald text-ivory rounded-full font-medium text-base hover:bg-emerald-light transition-all duration-300 shadow-lg shadow-emerald/20"
              >
                Book Clarity Call
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-emerald/20 text-emerald rounded-full font-medium text-base hover:border-emerald/40 hover:bg-emerald/5 transition-all duration-300"
              >
                Explore Program
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-border/50"
            >
              <p className="text-sm text-emerald/50 mb-4">Trusted by professionals from</p>
              <div className="flex flex-wrap items-center gap-6 text-emerald/40">
                <span className="text-sm font-medium">IT & Tech</span>
                <span className="w-1 h-1 rounded-full bg-emerald/30" />
                <span className="text-sm font-medium">Finance</span>
                <span className="w-1 h-1 rounded-full bg-emerald/30" />
                <span className="text-sm font-medium">Healthcare</span>
                <span className="w-1 h-1 rounded-full bg-emerald/30" />
                <span className="text-sm font-medium">Business Owners</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Founder Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 bg-card rounded-3xl p-8 lg:p-10 shadow-xl shadow-emerald/5 border border-border/30">
              {/* Image Placeholder */}
              <div className="aspect-[4/5] mb-6 rounded-2xl bg-gradient-to-br from-mist to-sage-light overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-emerald/10 flex items-center justify-center">
                      <span className="text-4xl font-serif text-emerald/40">OP</span>
                    </div>
                    <p className="text-sm text-emerald/50">Omkar Pawar</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl text-emerald">Omkar Pawar</h3>
                <p className="text-sage font-medium text-sm tracking-wide">
                  Psychologist & Emotional Healing Coach
                </p>
                <p className="text-emerald/60 text-sm leading-relaxed">
                  Founder of Freedom Inner Wellbeing, helping ambitious
                  professionals find lasting emotional peace through proven
                  psychological methods.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl bg-sage/10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-emerald/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-emerald/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
