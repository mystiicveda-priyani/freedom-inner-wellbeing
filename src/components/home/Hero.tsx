"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { BRAND, EXTERNAL_LINKS } from "@/lib/constants";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-28 pb-12 overflow-visible">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10"></div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/12 border border-gold/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-gold">
                Emotional Healing for Professionals
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary leading-tight">
              Overcome Anxiety, Overthinking & Emotional Triggers
            </h1>

            <p className="text-lg italic font-cormorant text-gold">
              {BRAND.tagline}
            </p>

            <p className="text-base text-charcoal-soft leading-relaxed max-w-lg">
              For working professionals and business owners who look functional on the outside — but internally feel anxious, emotionally overwhelmed, or stuck in repeating patterns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                asLink
                href={EXTERNAL_LINKS.topmate}
                target="_blank"
              >
                Book Clarity Call ↗
              </Button>
              <Button variant="outline" size="lg" asLink href="services">
                Apply for Program
              </Button>
            </div>
          </motion.div>

          {/* Visual: only animated portrait (removed circles/dots) */}
          <motion.div variants={itemVariants} className="flex justify-center items-center">
            <Link href="/about" className="relative flex flex-col items-center justify-center overflow-visible group">
              <div className="w-56 md:w-64 lg:w-72 xl:w-80 rounded-lg shadow-2xl">
                <motion.img
                  src="/images/omkar1.png"
                  alt="Omkar Pawar"
                  width={420}
                  height={540}
                  className="w-full h-auto max-h-[420px] md:max-h-[540px] lg:max-h-[620px] object-contain transition-transform duration-300 group-hover:scale-105"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.src = "/logo.svg";
                  }}
                />
              </div>
              <span className="mt-4 text-lg font-inter font-semibold text-primary transition-colors duration-200 group-hover:text-gold">
                Omkar Pawar
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
