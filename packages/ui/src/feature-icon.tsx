import { cn } from "./utils";

const paths = {
  building: "M3 10h18L12 4 3 10Zm2 10h14M7 13v5m5-5v5m5-5v5",
  palette: "M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h3a6 6 0 0 0 0-10h-3ZM7 9h.01M10 6h.01M15 6h.01M18 9h.01",
  crown: "m3 6 4 4 5-6 5 6 4-4-3 12H6L3 6Zm4 15h10",
  book: "M12 6C9 4 6 4 3 5v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14",
  diamond: "m3 8 4-5h10l4 5-9 13L3 8Zm0 0h18M7 3l5 18 5-18",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l4 2",
  ticket: "M3 5h18v5a2 2 0 0 0 0 4v5H3v-5a2 2 0 0 0 0-4V5Zm9 3v1m0 3v1m0 3v1",
  users: "M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 18v-3a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v3M17 3a4 4 0 0 1 0 8m1 3a5 5 0 0 1 3 4v3",
  headphones: "M3 13v-1a9 9 0 0 1 18 0v1M3 12h4v8H5a2 2 0 0 1-2-2v-6Zm18 0h-4v8h2a2 2 0 0 0 2-2v-6Z",
  shield: "M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Zm-4 9 3 3 5-6",
  accessibility: "M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 8l8 2 8-2m-8 2v5m0 0-4 7m4-7 4 7",
} as const;

export type FeatureIconName = keyof typeof paths;

export function FeatureIcon({ name, className }: { name: FeatureIconName; className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
      className={cn("h-8 w-8 shrink-0", className)}>
      <path d={paths[name]} />
    </svg>
  );
}
