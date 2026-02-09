import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  ref?: React.Ref<HTMLButtonElement>;
}

const variantStyles = {
  primary:
    "bg-gen3-gold text-white hover:bg-gen3-gold-dark shadow-md hover:shadow-lg",
  secondary:
    "bg-gen3-black text-white hover:bg-gen3-charcoal shadow-md hover:shadow-lg",
  outline:
    "border-2 border-gen3-gold text-gen3-gold hover:bg-gen3-gold hover:text-white",
  ghost:
    "text-gen3-gold hover:bg-gen3-gold/10",
} as const;

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

export function Button({
  className,
  variant = "primary",
  size = "md",
  ref,
  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gen3-gold disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}
