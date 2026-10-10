import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
  { variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-primary-700",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-400",
      outline: "border border-border-strong bg-transparent text-foreground hover:bg-muted",
      ghost: "text-foreground hover:bg-muted",
      danger: "bg-error text-white hover:brightness-90",
      link: "text-primary underline underline-offset-4 hover:text-primary-700",
    },
    size: { sm: "min-h-11 px-4 text-sm", md: "min-h-12 px-5 text-base", lg: "min-h-14 px-6 text-base" },
  }, defaultVariants: { variant: "primary", size: "md" } },
);
type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;
export function Button({ className, variant, size, type = "button", ...props }: Props) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

