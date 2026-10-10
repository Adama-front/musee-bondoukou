import { Badge } from "@musee/ui";
import type { Book } from "./book-repository";
const status = { Disponible: "success", Indisponible: "default", "Consultation sur place": "info" } as const;
export function BookCard({ book }: { book: Book }) {
  return <article className="rounded-lg border border-border bg-surface p-6"><div className="mb-5 flex aspect-[2/3] items-center justify-center rounded-md bg-muted p-6 text-center text-sm text-muted-foreground">Couverture<br />à compléter</div>
    <h2 className="mt-4 font-editorial text-h4 font-semibold">{book.title}</h2><p className="mt-2 text-muted-foreground">{book.author}</p><p className="mb-4 mt-2 text-sm text-muted-foreground">{book.category}</p><Badge variant={status[book.availability]}>{book.availability}</Badge>
  </article>;
}

