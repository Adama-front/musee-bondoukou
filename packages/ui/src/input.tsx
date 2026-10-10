import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "./utils";
const field = "w-full rounded-md border border-border-strong bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error";
export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(field, "min-h-12", className)} {...props} />;
}
export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(field, "min-h-32 resize-y", className)} {...props} />;
}

