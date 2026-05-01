"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Users, Star } from "lucide-react";

const services = [
  {
    featured: true,
    icon: Star,
    title: "8-Week Emotional Healing Program",
    subtitle: "Flagship Transformation Journey",
    description:
      "A structured 1:1 transformational process designed for professionals and business owners who are ready for deep, lasting change. This comprehensive program addresses root causes, not just symptoms.",
    features: [
      "8 weekly 1:1 intensive sessions",
      "Root cause emotional healing",
      "Personalized healing protocols",
      "Between-session support",
      "Lifetime access to resources",
      "Progress tracking & accountability",
    ],
    cta: "Apply for Program",
    href: "#contact",
  },
  {
    featured: false,
    icon: Calendar,
    title: "Clarity Session",
    subtitle: "1:1 Discovery Call",
    description:
      "A focused session to understand your emotional patterns, identify core issues, and determine if the 8-week program is the right fit for your healing journey.",
    features: [
      "60-minute deep dive session",
      "Pattern identification",
      "Personalized recommendations",
      "Clear next steps",
    ],
    cta: "Book Clarity Call",
    href: "https://topmate.io/lifecoachomkar/1967798",
    external: true,
  },
  {
    featured: false,
    icon: Users,
    title: "Workshops & Group Sessions",
    subtitle: "Community Learning",
    description:
      "Periodic group workshops focused on specific themes like anxiety management, emotional regulation, and building inner resilience.",
    features: [
      "Interactive group sessions",
      "Peer support community",
      "Practical exercises",
      "Q&A with Omkar",
    ],
    cta: "Join Waitlist",
    href: "#community",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-ivory" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-gold tracking-widest uppercase mb-4 block"
          >
            Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-emerald mb-6"
          >
            Your Path to Emotional Freedom
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-emerald/70 text-lg"
          >
            Choose the right level of support for your healing journey. Every
            path leads to the same destination — lasting inner peace.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                service.featured
                  ? "bg-emerald text-ivory lg:scale-105 shadow-2xl shadow-navy/20"
                  : "bg-card border border-border/30"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal text-ivory text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  service.featured ? "bg-ivory/10" : "bg-teal/10"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.featured ? "text-gold" : "text-gold"
                  }`}
                />
              </div>

              <span
                className={`text-xs font-medium tracking-widest uppercase mb-2 ${
                  service.featured ? "text-gold" : "text-gold"
                }`}
              >
                {service.subtitle}
              </span>

              <h3
                className={`font-serif text-2xl mb-4 ${
                  service.featured ? "text-ivory" : "text-emerald"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`mb-6 text-sm leading-relaxed ${
                  service.featured ? "text-ivory/70" : "text-emerald/60"
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 text-sm ${
                      service.featured ? "text-ivory/80" : "text-emerald/70"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        service.featured ? "bg-teal" : "bg-teal"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.a
                href={service.href}
                target={service.external ? "_blank" : undefined}
                rel={service.external ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center justify-center gap-2 py-4 rounded-full font-medium text-sm transition-all duration-300 ${
                  service.featured
                    ? "bg-ivory text-emerald hover:bg-ivory/90"
                    : "bg-emerald text-ivory hover:bg-emerald-light"
                }`}
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
