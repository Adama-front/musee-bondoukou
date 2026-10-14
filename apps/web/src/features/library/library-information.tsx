import { Container, FeatureIcon } from "@musee/ui";
import type { LibraryContent } from "./library-repository";

export function LibraryInformation({ hours, consultation }: Pick<LibraryContent, "hours" | "consultation">) {
  return (
    <section id="horaires" aria-labelledby="library-hours-title" className="bg-ink py-section text-background">
      <Container>
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-secondary-200">Préparer votre venue</p>
        <h2 id="library-hours-title" className="mb-10 font-editorial text-h2 font-semibold">Horaires & consultation</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border-t border-background/20 pt-6">
            <FeatureIcon name="clock" className="mb-4 size-8 text-secondary-200" />
            <h3 className="mb-3 font-editorial text-h4 font-semibold">Horaires d’ouverture</h3>
            <p className="max-w-prose text-background/80">{hours}</p>
          </div>
          <div className="border-t border-background/20 pt-6">
            <FeatureIcon name="book" className="mb-4 size-8 text-secondary-200" />
            <h3 className="mb-3 font-editorial text-h4 font-semibold">Consulter les ouvrages</h3>
            <p className="max-w-prose text-background/80">{consultation}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function LibraryContact({ location, contact }: Pick<LibraryContent, "location" | "contact">) {
  return (
    <section id="contact" aria-labelledby="library-contact-title" className="bg-muted py-section">
      <Container className="grid gap-8 md:grid-cols-2 md:gap-16">
        <div><p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Restons en contact</p><h2 id="library-contact-title" className="font-editorial text-h2 font-semibold">Venir à la bibliothèque</h2></div>
        <div className="space-y-6">
          <div><h3 className="mb-2 font-editorial text-h4 font-semibold">Nous trouver</h3><p>{location}</p></div>
          <div><h3 className="mb-2 font-editorial text-h4 font-semibold">Nous contacter</h3><p>{contact}</p></div>
        </div>
      </Container>
    </section>
  );
}
