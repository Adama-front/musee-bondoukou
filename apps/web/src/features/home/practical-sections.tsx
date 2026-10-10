import { Container, EmptyState, SectionHeader } from "@musee/ui";
import type { HomeContent } from "./home-repository";
export function AgendaSection({ content }: { content: HomeContent }) {
  return <section id="agenda" className="py-section"><Container><SectionHeader title="Expositions & rendez-vous">La programmation sera publiée après confirmation des dates et des conditions de participation.</SectionHeader>
    <div className="grid gap-6 md:grid-cols-2"><div><h3 className="mb-4 font-editorial text-h3 font-semibold">Expositions</h3>{content.exhibitions.length ? <ul>{content.exhibitions.map(item => <li key={item.id}>{item.title}</li>)}</ul> : <EmptyState title="Aucune exposition annoncée pour le moment." />}</div>
    <div><h3 className="mb-4 font-editorial text-h3 font-semibold">Événements</h3>{content.events.length ? <ul>{content.events.map(item => <li key={item.id}>{item.title}</li>)}</ul> : <EmptyState title="Aucun événement annoncé pour le moment." />}</div></div>
  </Container></section>;
}
const information = [["Localisation", "Bondoukou, région du Gontougo, Côte d’Ivoire. Adresse précise à compléter."], ["Horaires & tarifs", "Informations officielles à compléter avant de préparer votre déplacement."], ["Contact & groupes", "Coordonnées et modalités des visites scolaires à compléter."]] as const;
export function VisitSection() {
  return <section id="visiter" className="border-t border-border py-section"><Container><SectionHeader title="Préparer votre visite">Retrouvez ici les informations pratiques du musée et de la bibliothèque.</SectionHeader>
    <dl className="grid gap-8 md:grid-cols-3">{information.map(([title, description]) => <div key={title} className="border-l-2 border-secondary pl-5"><dt className="mb-3 font-semibold">{title}</dt><dd className="text-muted-foreground">{description}</dd></div>)}</dl>
  </Container></section>;
}

