import { Container } from "@musee/ui";
import { ContactForm } from "./contact-form";
import { ContactDetails } from "./contact-information";
import type { ContactInformation } from "./contact-repository";

export function ContactSection({ information }: { information: ContactInformation }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-background py-section">
      <Container>
        <header className="mx-auto mb-10 max-w-prose text-center lg:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Restons en contact</p>
          <h2 id="contact-title" className="font-editorial text-h2 font-semibold">Contact & localisation</h2>
          <span aria-hidden="true" className="mx-auto mt-5 block h-px w-16 bg-secondary" />
        </header>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <ContactForm />
          <ContactDetails information={information} />
        </div>
      </Container>
    </section>
  );
}
