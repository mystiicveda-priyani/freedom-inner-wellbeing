"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES, EXTERNAL_LINKS } from "@/lib/constants";
import ICONS from "@/components/icons";

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionHeading
            label="Programs & Sessions"
            title="How We Work Together"
            subtitle="Structured, personalised support designed for professionals ready to do real inner work."
            centered
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {service.featured ? (
                <Card variant="featured" className="p-10 h-full lg:row-span-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 mb-4">
                    <span className="text-sm font-bold text-gold">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.includes?.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-white/75">
                        <span className="w-4 h-4 rounded-full bg-gold/30 border border-gold flex-shrink-0 flex items-center justify-center text-xs mt-0.5">
                          ●
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="gold"
                    size="lg"
                    asLink
                    href={EXTERNAL_LINKS.topmate}
                    target="_blank"
                  >
                    {service.cta} →
                  </Button>
                </Card>
              ) : (
                <Card className="p-8 h-full">
                  <div className="text-4xl mb-4">{(() => {
                    const Icon = ICONS[service.iconKey as string];
                    return Icon ? <Icon className="w-10 h-10" /> : null;
                  })()}</div>
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-soft text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a
                    href={EXTERNAL_LINKS.topmate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold text-sm hover:text-gold transition-colors border-b-2 border-gold pb-1"
                  >
                    {service.cta} →
                  </a>
                </Card>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
