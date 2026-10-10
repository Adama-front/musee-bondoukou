import { Container } from "@musee/ui";
import { VisitInformationCard } from "./visit-information-card";
import type { VisitInformation } from "./visit-repository";

export function VisitSection({ information }: { information: ReadonlyArray<VisitInformation> }) {
  return (
    <section id="visiter" aria-labelledby="visit-title" className="bg-ink py-section text-background">
      <Container>
        <header className="mx-auto mb-10 max-w-prose text-center lg:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-secondary-200">Préparer votre visite</p>
          <h2 id="visit-title" className="font-editorial text-h2 font-semibold">Informations de visite</h2>
          <span aria-hidden="true" className="mx-auto mt-5 block h-px w-16 bg-secondary" />
        </header>
        {information.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {information.map((item) => <li key={item.id} className="min-w-0"><VisitInformationCard information={item} /></li>)}
          </ul>
        ) : <p className="text-center text-background/80">Les informations pratiques seront publiées après confirmation.</p>}
        <p className="mt-8 text-center text-sm text-background/80">Bondoukou, Gontougo, Côte d’Ivoire. Adresse précise et coordonnées à compléter.</p>
      </Container>
    </section>
  );
}
