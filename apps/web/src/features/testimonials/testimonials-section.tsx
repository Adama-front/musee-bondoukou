import { Container } from "@musee/ui";
import { TestimonialCarousel } from "./testimonial-carousel";
import type { TestimonialPreview } from "./testimonial-repository";

export function TestimonialsSection({ entries }: { entries: readonly TestimonialPreview[] }) {
  return (
    <section id="temoignages" aria-labelledby="testimonials-title" className="bg-surface py-section">
      <Container>
        <header className="mx-auto mb-10 max-w-prose text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">La parole aux visiteurs</p>
          <h2 id="testimonials-title" className="font-editorial text-h2 font-semibold">Témoignages</h2>
          <span aria-hidden="true" className="mx-auto my-5 block h-px w-16 bg-secondary" />
          <p className="text-sm text-muted-foreground">Exemples fictifs pour la maquette. Les avis authentiques restent à recueillir et à valider.</p>
        </header>
        <TestimonialCarousel entries={entries} />
      </Container>
    </section>
  );
}
