"use client";

import { useState } from "react";
import { Button, EmptyState, cn } from "@musee/ui";
import type { TestimonialPreview } from "./testimonial-repository";

function TestimonialSlide({ entry, position }: { entry: TestimonialPreview; position: string }) {
  return (
    <figure aria-label={position} className="mx-auto max-w-prose text-center">
      <span aria-hidden="true" className="block font-editorial text-display leading-none text-secondary-300">“</span>
      <blockquote className="mt-4 font-editorial text-h3 italic leading-snug"><p>« {entry.quote} »</p></blockquote>
      <figcaption className="mt-10">
        <p className="font-editorial text-h4 font-semibold">{entry.author}</p>
        <p className="mt-1 text-sm text-muted-foreground">{entry.context}</p>
      </figcaption>
    </figure>
  );
}

function CarouselControls({ count, active, select }: { count: number; active: number; select: (index: number) => void }) {
  return (
    <nav aria-label="Choisir un témoignage de démonstration" className="mt-8 flex flex-wrap items-center justify-center gap-1">
      <Button variant="ghost" aria-label="Témoignage précédent" onClick={() => select((active - 1 + count) % count)} className="size-12 rounded-full border border-border p-0"><span aria-hidden="true" className="text-h4">‹</span></Button>
      {Array.from({ length: count }, (_, index) => (
        <button key={index} type="button" aria-label={`Afficher le témoignage ${index + 1} sur ${count}`} aria-current={index === active ? "true" : undefined}
          onClick={() => select(index)} className="flex size-11 cursor-pointer items-center justify-center rounded-full">
          <span aria-hidden="true" className={cn("h-2 rounded-full", index === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground")} />
        </button>
      ))}
      <Button variant="ghost" aria-label="Témoignage suivant" onClick={() => select((active + 1) % count)} className="size-12 rounded-full border border-border p-0"><span aria-hidden="true" className="text-h4">›</span></Button>
    </nav>
  );
}

export function TestimonialCarousel({ entries }: { entries: readonly TestimonialPreview[] }) {
  const [selected, setSelected] = useState(0);
  if (!entries.length) return <EmptyState title="Les témoignages seront publiés après validation." />;
  const active = selected % entries.length;
  return (
    <div role="region" aria-roledescription="carrousel" aria-label="Exemples de témoignages">
      <div aria-live="polite" aria-atomic="true"><TestimonialSlide entry={entries[active]} position={`${active + 1} sur ${entries.length}`} /></div>
      {entries.length > 1 && <CarouselControls count={entries.length} active={active} select={setSelected} />}
    </div>
  );
}
