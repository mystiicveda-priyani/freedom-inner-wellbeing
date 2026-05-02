import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
}

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const sizes = {
    default: "max-w-7xl",
    sm: "max-w-4xl",
    lg: "max-w-8xl",
  };

  return (
    <div className={`${sizes[size]} mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}
