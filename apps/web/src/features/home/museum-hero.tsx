import Image from "next/image";
import Link from "next/link";
import { Container, buttonVariants, cn } from "@musee/ui";
export function MuseumHero() {
  return <section aria-labelledby="hero-title" className="relative isolate flex min-h-dvh items-center bg-ink text-background [&_a:focus-visible]:outline-background">
    <Image src="/images/museum-hero-illustration.webp" alt="" fill sizes="100vw" preload className="-z-20 object-cover" />
    <div className="absolute inset-0 -z-10 bg-ink/65" />
    <Container className="pb-20 pt-24 text-center sm:py-32">
      <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-secondary-200">Bienvenue au Musée de Bondoukou</p>
      <h1 id="hero-title" className="mx-auto max-w-prose font-editorial text-display font-semibold">Découvrir.<br /><span className="block pb-2 font-normal italic text-secondary-200">Transmettre.</span></h1>
      <p className="mx-auto mt-6 max-w-prose text-lg">Explorez le musée et sa bibliothèque, au cœur de Bondoukou.</p>
      <div className="mx-auto mt-10 flex max-w-prose flex-col justify-center gap-4 sm:flex-row">
        <Link href="#collections" className={buttonVariants({ size: "lg" })}>Explorer les collections</Link>
        <Link href="#visiter" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-background text-background hover:bg-background/10")}>Préparer ma visite</Link>
      </div>
    </Container>
    <p className="absolute inset-x-4 bottom-4 text-center text-xs text-background">Illustration temporaire générée. Elle ne représente pas le Musée de Bondoukou.</p>
  </section>;
}
