"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, BookOpen, Heart, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Weekly Live Sessions",
    description: "Join live Q&A and healing sessions with Omkar every week.",
  },
  {
    icon: BookOpen,
    title: "Emotional Awareness Practices",
    description: "Access guided practices to deepen your self-awareness.",
  },
  {
    icon: Heart,
    title: "Anxiety Support",
    description: "Get tools and techniques specifically for managing anxiety.",
  },
  {
    icon: MessageCircle,
    title: "Inner Healing Tools",
    description: "A library of resources to support your ongoing journey.",
  },
];

export function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="py-24 lg:py-32 bg-beige/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-teal tracking-widest uppercase mb-4 block">
              Community
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-6 leading-tight">
              Join the Emotional Healing Circle
            </h2>

            <p className="text-navy/70 text-lg mb-8 leading-relaxed">
              Healing doesn&apos;t have to be a solo journey. Join a supportive
              community of professionals who understand what you&apos;re going
              through and are committed to growth.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-navy/50 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-navy text-ivory rounded-full font-medium hover:bg-navy-light transition-colors duration-300"
            >
              Join the Community
            </motion.a>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl p-8 border border-border/30 shadow-lg">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal/20 to-sage/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy/10 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-teal" />
                  </div>
                  <h3 className="font-serif text-2xl text-navy mb-2">
                    Safe Space
                  </h3>
                  <p className="text-navy/60 text-sm">
                    A judgment-free community for authentic healing
                  </p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-4 -right-4 bg-navy text-ivory rounded-2xl px-6 py-4 shadow-lg">
                <div className="text-2xl font-serif">500+</div>
                <div className="text-xs text-ivory/70">
                  Professionals Helped
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-3xl bg-teal/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
