import Image from "next/image";
import { Container, EmptyState, cn } from "@musee/ui";
import type { GalleryImage } from "./gallery-repository";

const formats = { landscape: "aspect-video", portrait: "aspect-[4/5]", square: "aspect-square" } as const;

function GalleryTile({ image }: { image: GalleryImage }) {
  return (
    <figure className={cn("relative overflow-hidden rounded-sm bg-muted", formats[image.format])}>
      <Image src={image.src} alt={image.alt} fill
        sizes="(min-width: 1024px) 334px, (min-width: 640px) 50vw, 100vw"
        className="object-cover" />
    </figure>
  );
}

export function GallerySection({ images }: { images: readonly GalleryImage[] }) {
  return (
    <section id="galerie" aria-labelledby="gallery-title" className="bg-surface py-section">
      <Container>
        <header className="mx-auto mb-10 max-w-prose text-center lg:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Un parcours en images</p>
          <h2 id="gallery-title" className="font-editorial text-h2 font-semibold">La galerie du musée</h2>
          <span aria-hidden="true" className="mx-auto my-5 block h-px w-16 bg-secondary" />
          <p className="text-sm text-muted-foreground">Illustrations d’ambiance : ces visuels ne représentent ni le musée réel ni ses collections.</p>
        </header>
        {images.length ? (
          <ul className="mx-auto max-w-5xl columns-1 gap-3 sm:columns-2 lg:columns-3">
            {images.map(image => <li key={image.id} className="mb-3 break-inside-avoid"><GalleryTile image={image} /></li>)}
          </ul>
        ) : <EmptyState title="La galerie sera complétée avec les photographies du musée." />}
      </Container>
    </section>
  );
}
