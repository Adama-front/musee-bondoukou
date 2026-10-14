import { Container, EmptyState, SectionHeader } from "@musee/ui";
import type { LibraryEntry } from "./library-repository";

interface Props {
  id: "evenements" | "actualites";
  eyebrow: string;
  title: string;
  emptyTitle: string;
  entries: readonly LibraryEntry[];
}
export function LibraryUpdates({ id, eyebrow, title, emptyTitle, entries }: Props) {
  return (
    <section id={id} aria-label={title} className="py-section">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} />
        {entries.length ? (
          <ul className="grid gap-6 md:grid-cols-2">
            {entries.map(entry => <li key={entry.id} className="border-t border-border pt-6"><h3 className="mb-3 font-editorial text-h3 font-semibold">{entry.title}</h3><p>{entry.description}</p></li>)}
          </ul>
        ) : <EmptyState title={emptyTitle}>Les informations seront publiées après confirmation par la bibliothèque.</EmptyState>}
      </Container>
    </section>
  );
}
