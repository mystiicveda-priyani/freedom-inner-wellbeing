"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionHeading
            label="Client Stories"
            title="Real Transformations"
            subtitle="Before and after — in the words of professionals who chose to do the inner work."
            centered
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card
                variant={testimonial.featured ? "featured" : "default"}
                className={testimonial.featured ? "p-8 text-white" : "p-8"}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <span key={i} className={testimonial.featured ? "text-gold" : "text-gold"}>
                      ★
                    </span>
                  ))}
                </div>

                {/* Before/After Tags */}
                <div className="flex gap-2 items-center mb-4">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      testimonial.featured
                        ? "bg-red-400/20 text-red-300"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    Before
                  </span>
                  <span className={testimonial.featured ? "text-gold" : "text-gold"}>
                    →
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      testimonial.featured
                        ? "bg-gold/20 text-gold"
                        : "bg-emerald-100 text-primary"
                    }`}
                  >
                    After
                  </span>
                </div>

                {/* Quote */}
                <p
                  className={`text-lg font-cormorant italic leading-relaxed mb-6 ${
                    testimonial.featured ? "text-white/90" : "text-charcoal-soft"
                  }`}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      testimonial.featured
                        ? "bg-gold/20 text-gold"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p
                      className={`font-semibold text-sm ${
                        testimonial.featured ? "text-white" : "text-charcoal"
                      }`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`text-xs ${
                        testimonial.featured
                          ? "text-white/55"
                          : "text-charcoal-soft"
                      }`}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
