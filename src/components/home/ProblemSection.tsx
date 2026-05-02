"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROBLEMS } from "@/lib/constants";
import ICONS from "@/components/icons";

export default function ProblemSection() {
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
            label="You Are Not Alone"
            title="Do You Feel Like This?"
            centered
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {PROBLEMS.map((problem, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="p-8 h-full">
                <div className="text-4xl mb-4">
                  {(() => {
                    const Icon = ICONS[problem.iconKey as string];
                    return Icon ? <Icon className="w-10 h-10" /> : null;
                  })()}
                </div>
                <h4 className="text-xl font-playfair font-semibold text-primary mb-3">
                  {problem.title}
                </h4>
                <p className="text-charcoal-soft text-sm leading-relaxed">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl font-cormorant italic text-primary">
            You are not alone —{" "}
            <span className="text-gold font-semibold">and it can change.</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
