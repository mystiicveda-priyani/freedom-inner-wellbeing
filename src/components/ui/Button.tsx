import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "white" | "outline-white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  asLink = false,
  href = "#",
  target,
  rel,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark hover:shadow-premium hover:-translate-y-1",
    secondary:
      "bg-sage text-white hover:bg-sage-light hover:shadow-premium hover:-translate-y-1",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-1",
    gold: "bg-gold text-primary hover:bg-gold-light hover:shadow-gold hover:-translate-y-1",
    white:
      "bg-white text-primary hover:bg-ivory hover:shadow-premium hover:-translate-y-1",
    "outline-white":
      "border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/70 hover:-translate-y-1",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asLink) {
    const anchorRel = rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
    return (
      <a href={href} className={combinedClassName} target={target} rel={anchorRel}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
