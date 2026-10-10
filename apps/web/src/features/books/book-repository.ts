import { booksMock } from "./books.mock";
export interface Book { id: string; title: string; author: string; category: string; keywords: string[]; availability: "Disponible" | "Indisponible" | "Consultation sur place"; isMock: true }
export interface BookQuery { q?: string; category?: string }
export interface BookRepository { search(query: BookQuery): Promise<Book[]> }
const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("fr").trim();
export const bookRepository: BookRepository = {
  async search({ q = "", category = "" }) {
    const term = normalize(q);
    return booksMock.filter(book => (!category || book.category === category) && normalize([book.title, book.author, book.category, ...book.keywords].join(" ")).includes(term));
  },
};

