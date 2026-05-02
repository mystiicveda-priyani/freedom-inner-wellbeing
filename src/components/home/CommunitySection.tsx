"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { COMMUNITY_STATS, EXTERNAL_LINKS } from "@/lib/constants";

export default function CommunitySection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                <span className="w-6 h-px bg-gold inline-block mr-3 align-middle"></span>
                Community
              </p>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
                Join the Emotional Healing Circle
              </h2>
              <div className="w-12 h-1 bg-gold rounded-full mb-6"></div>
            </div>

            <p className="text-charcoal-soft leading-relaxed">
              A private, supportive space for professionals committed to emotional growth — where healing happens in community.
            </p>

            <ul className="space-y-3">
              {[
                "Weekly live sessions",
                "Guided emotional healing practices",
                "Anxiety management tools & resources",
                "Inner awareness exercises & reflections",
                "Supportive peer community of professionals",
              ].map((perk, idx) => (
                <li key={idx} className="flex items-center gap-3 text-charcoal-soft">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0"></span>
                  {perk}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                asLink
                href={EXTERNAL_LINKS.joinCircle}
                target="_blank"
              >
                Join the Circle ↗
              </Button>
            </div>
          </motion.div>

          {/* Visual Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {COMMUNITY_STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 text-center">
                    <div className="font-playfair text-3xl font-bold text-primary mb-1">
                      {stat.number}
                      {stat.suffix && (
                        <span className="text-gold ml-1">{stat.suffix}</span>
                      )}
                    </div>
                    <p className="text-xs text-charcoal-soft font-semibold uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Session Card */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card variant="featured" className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                  🎙️
                </div>
                <div>
                  <p className="font-playfair font-bold text-white text-base">
                    Weekly Live Sessions
                  </p>
                  <p className="text-sm text-white/60">
                    Every week — live, guided, and transformative
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
