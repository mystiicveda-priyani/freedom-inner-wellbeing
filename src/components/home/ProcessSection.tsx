"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
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
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      {/* Background element */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionHeading
            label="The Journey"
            title="How the Process Works"
            centered
            whiteTitle
          />
          <style jsx>{`
            :global(.text-white) {
              color: white;
            }
          `}</style>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ y: -8 }}
            >
              <div className="w-12 h-12 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center mb-6">
                <span className="text-lg font-playfair font-bold text-gold">
                  {step.number}
                </span>
              </div>
              <h4 className="text-lg font-playfair font-semibold text-white mb-3">
                {step.title}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
