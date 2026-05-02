import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "featured" | "glass";
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  variant = "default",
  hover = true,
}: CardProps) {
  const baseStyles = "rounded-2xl transition-all duration-300";

  const variants = {
    default: `bg-white border border-primary/8 ${
      hover ? "hover:shadow-premium hover:-translate-y-1" : ""
    }`,
    featured: `bg-primary text-white rounded-3xl ${
      hover ? "hover:shadow-premium hover:-translate-y-1" : ""
    }`,
    glass: `${
      hover ? "hover:shadow-premium hover:-translate-y-1" : ""
    } glass`,
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
