import { Container, EmptyState, SectionHeader } from "@musee/ui";
import type { HomeContent } from "./home-repository";
export function AgendaSection({ content }: { content: HomeContent }) {
  return <section id="agenda" className="py-section"><Container><SectionHeader title="Expositions & rendez-vous">La programmation sera publiée après confirmation des dates et des conditions de participation.</SectionHeader>
    <div className="grid gap-6 md:grid-cols-2"><div><h3 className="mb-4 font-editorial text-h3 font-semibold">Expositions</h3>{content.exhibitions.length ? <ul>{content.exhibitions.map(item => <li key={item.id}>{item.title}</li>)}</ul> : <EmptyState title="Aucune exposition annoncée pour le moment." />}</div>
    <div><h3 className="mb-4 font-editorial text-h3 font-semibold">Événements</h3>{content.events.length ? <ul>{content.events.map(item => <li key={item.id}>{item.title}</li>)}</ul> : <EmptyState title="Aucun événement annoncé pour le moment." />}</div></div>
  </Container></section>;
}

