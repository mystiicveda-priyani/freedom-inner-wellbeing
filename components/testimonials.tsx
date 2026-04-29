"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    before:
      "I was constantly anxious, unable to sleep, and snapping at my family after work. My career was thriving but I felt hollow inside.",
    after:
      "For the first time in years, I feel genuinely at peace. I can handle stress without spiraling, and my relationships have transformed.",
    name: "Priya M.",
    role: "Senior Product Manager, Tech",
    duration: "8-Week Program Graduate",
  },
  {
    before:
      "Overthinking was my constant companion. Every decision felt overwhelming, and I was exhausted from the mental noise.",
    after:
      "The clarity I have now is remarkable. I make decisions with confidence and my mind finally feels quiet.",
    name: "Rahul S.",
    role: "Entrepreneur, E-commerce",
    duration: "8-Week Program Graduate",
  },
  {
    before:
      "I appeared successful but felt like a fraud. Imposter syndrome and anxiety were draining me despite my achievements.",
    after:
      "I finally feel worthy of my success. The inner critic has quieted, and I show up authentically now.",
    name: "Ananya K.",
    role: "Director, Finance",
    duration: "8-Week Program Graduate",
  },
  {
    before:
      "Relationship triggers kept repeating. I would react the same way with every partner, sabotaging good connections.",
    after:
      "Understanding my patterns changed everything. I&apos;m now in the healthiest relationship of my life.",
    name: "Vikram P.",
    role: "Consultant, Healthcare",
    duration: "8-Week Program Graduate",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-ivory overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-teal tracking-widest uppercase mb-4 block"
          >
            Transformations
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-6"
          >
            Real Stories, Real Change
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy/70 text-lg"
          >
            Hear from professionals who have walked this path and found their
            way to emotional freedom.
          </motion.p>
        </div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border/30 shadow-lg">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-teal/20" />

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Before */}
                <div className="bg-navy/5 rounded-2xl p-6">
                  <span className="text-xs font-semibold text-navy/40 uppercase tracking-widest mb-3 block">
                    Before
                  </span>
                  <p className="text-navy/70 text-sm leading-relaxed italic">
                    &ldquo;{testimonials[currentIndex].before}&rdquo;
                  </p>
                </div>

                {/* After */}
                <div className="bg-teal/10 rounded-2xl p-6">
                  <span className="text-xs font-semibold text-teal uppercase tracking-widest mb-3 block">
                    After
                  </span>
                  <p className="text-navy/80 text-sm leading-relaxed italic">
                    &ldquo;{testimonials[currentIndex].after}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-border/50 pt-6">
                <div>
                  <h4 className="font-serif text-lg text-navy">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-navy/60 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-teal text-xs mt-1">
                    {testimonials[currentIndex].duration}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-border hover:border-navy hover:bg-navy hover:text-ivory flex items-center justify-center transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-border hover:border-navy hover:bg-navy hover:text-ivory flex items-center justify-center transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-navy w-6" : "bg-navy/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
