import Image from "next/image";
import Link from "next/link";
import { Container, buttonVariants, cn } from "@musee/ui";

export function LibraryHero() {
  return (
    <section aria-labelledby="library-title" className="relative isolate overflow-hidden bg-ink text-background [&_a:focus-visible]:outline-background">
      <Image src="/images/library-illustration.webp" alt="" fill sizes="100vw" preload className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-ink/65" />
      <Container className="py-20 text-center md:py-32">
        <p className="mb-6 text-sm font-bold uppercase tracking-widest text-secondary-200">Musée de Bondoukou</p>
        <h1 id="library-title" className="font-editorial text-display font-semibold">La Bibliothèque<br /><span className="font-normal italic text-secondary-200">du Musée</span></h1>
        <p className="mx-auto mt-6 max-w-prose text-lg">Le savoir se partage.<br />La curiosité se cultive.</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/bibliotheque/catalogue" className={cn(buttonVariants({ size: "lg" }), "bg-background text-foreground hover:bg-muted")}>Explorer le catalogue <span aria-hidden="true">→</span></Link>
          <Link href="#horaires" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-background text-background hover:bg-background/10")}>Préparer ma consultation</Link>
        </div>
      </Container>
    </section>
  );
}
