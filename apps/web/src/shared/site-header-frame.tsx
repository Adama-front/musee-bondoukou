"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { cn } from "@musee/ui";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const getSnapshot = () => window.scrollY > 0;
const getServerSnapshot = () => false;

export function SiteHeaderFrame({ overlay, children }: { overlay: boolean; children: ReactNode }) {
  const scrolled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <>
      {!overlay && <div aria-hidden="true" className="h-(--site-header-height)" />}
      <header className={cn(
        "fixed inset-x-0 top-0 z-(--z-sticky) transition-colors duration-(--motion-normal)",
        overlay
          ? "text-background [&_*:focus-visible]:outline-background"
          : "border-b border-border bg-background text-foreground",
        overlay && scrolled && "bg-ink",
      )}>
        {children}
      </header>
    </>
  );
}
