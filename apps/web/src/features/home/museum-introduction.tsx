import Image from "next/image";
import Link from "next/link";
import { Container, buttonVariants } from "@musee/ui";

function MuseumIllustration() {
  return (
    <figure className="min-w-0">
      <div className="relative mb-6">
        <div className="relative aspect-[5/4] overflow-hidden rounded-md bg-muted">
          <Image src="/images/museum-hero-illustration.webp" alt="" fill
            sizes="(min-width: 1440px) 608px, (min-width: 1024px) 45vw, 100vw"
            className="object-cover" />
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-4 right-4 h-24 w-24 rounded-md border border-secondary lg:-right-4" />
      </div>
      <figcaption className="max-w-prose text-sm text-muted-foreground">
        Illustration temporaire générée. Elle ne représente pas le Musée de Bondoukou.
      </figcaption>
    </figure>
  );
}

export function MuseumIntroduction() {
  return (
    <section id="musee" aria-labelledby="museum-introduction-title" className="bg-background py-section">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <MuseumIllustration />
        <div className="min-w-0 max-w-prose">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Musée & Bibliothèque</p>
          <h2 id="museum-introduction-title" className="font-editorial text-h2 font-semibold">Le Musée de Bondoukou</h2>
          <span aria-hidden="true" className="my-6 block h-px w-16 bg-secondary" />
          <p className="text-lg">Une porte d’entrée vers le patrimoine culturel de Bondoukou et du Gontougo, ses collections et les ressources de sa bibliothèque.</p>
          <p className="mt-5 text-muted-foreground">Contenu temporaire. L’histoire du musée, ses missions et la présentation de sa bibliothèque seront précisées à partir des informations officielles.</p>
          <Link href="#collections" className={buttonVariants({ variant: "outline", size: "lg" }) + " mt-8"}>Découvrir les collections</Link>
        </div>
      </Container>
    </section>
  );
}
