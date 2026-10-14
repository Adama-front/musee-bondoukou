import Image from "next/image";
import Link from "next/link";
import { Container, buttonVariants, cn } from "@musee/ui";
export function LibrarySection() {
  return (
    <section id="bibliotheque" aria-labelledby="library-preview-title" className="relative isolate overflow-hidden bg-ink text-background [&_a:focus-visible]:outline-background">
      <Image src="/images/library-illustration.webp" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-ink/65" />
      <Container className="py-20 text-center md:py-32">
        <p className="mb-6 text-sm font-bold uppercase tracking-widest text-secondary-200">Lire · Découvrir · Transmettre</p>
        <h2 id="library-preview-title" className="mx-auto max-w-prose font-editorial text-display font-semibold">La Bibliothèque<br />du Musée</h2>
        <p className="mx-auto mt-6 max-w-prose text-lg">Un autre regard sur le patrimoine, au fil des pages.</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/bibliotheque" className={cn(buttonVariants({ size: "lg" }), "bg-background text-foreground hover:bg-muted")}>Explorer la bibliothèque <span aria-hidden="true">→</span></Link>
          <Link href="/bibliotheque#presentation" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-background text-background hover:bg-background/10")}>À propos de la bibliothèque</Link>
        </div>
      </Container>
    </section>
  );
}

