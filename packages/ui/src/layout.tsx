import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-container px-4 sm:px-5 md:px-8 xl:px-12 2xl:px-16", className)} {...props} />;
}
export function SectionHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return <header className="mb-8 max-w-prose">
    {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">{eyebrow}</p>}
    <h2 className="font-editorial text-h2 font-semibold">{title}</h2>
    {children && <div className="mt-4 text-muted-foreground">{children}</div>}
  </header>;
}
export function EmptyState({ title, children, headingLevel = 3 }: { title: string; children?: ReactNode; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return <div className="rounded-lg border border-border bg-surface p-8 text-center">
    <Heading className="text-lg font-bold">{title}</Heading>
    {children && <div className="mt-3 text-muted-foreground">{children}</div>}
  </div>;
}
