import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  whiteTitle?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  className = "",
  whiteTitle = false,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <p className="inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-widest uppercase text-gold mb-4">
          <span className="w-6 h-px bg-gold opacity-50"></span>
          {label}
          <span className="w-6 h-px bg-gold opacity-50"></span>
        </p>
      )}
      <h2 className={`text-4xl md:text-5xl font-playfair font-bold ${whiteTitle ? "text-white" : "text-primary"} mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg ${whiteTitle ? "text-white/80" : "text-charcoal-soft"} max-w-2xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
