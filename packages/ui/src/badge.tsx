import type { HTMLAttributes } from "react";
import { cn } from "./utils";
const variants = {
  default: "bg-muted text-foreground",
  primary: "bg-primary-100 text-primary-800",
  secondary: "bg-secondary-100 text-secondary-800",
  success: "bg-surface text-success border border-success",
  warning: "bg-surface text-foreground border border-warning",
  error: "bg-surface text-error border border-error",
  info: "bg-surface text-info border border-info",
  outline: "border border-border-strong text-foreground",
};
type Props = HTMLAttributes<HTMLSpanElement> & { variant?: keyof typeof variants };
export function Badge({ variant = "default", className, ...props }: Props) {
  return <span className={cn("inline-flex rounded-sm px-2 py-1 text-sm font-semibold", variants[variant], className)} {...props} />;
}

