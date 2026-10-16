import { FeatureIcon } from "@musee/ui";
import type { ContactInformation } from "./contact-repository";

function ContactCard({ title, description, icon }: { title: string; description: string; icon: "pin" | "phone" | "mail" }) {
  return (
    <div className="flex gap-4 rounded-lg bg-surface p-6 shadow-sm">
      <FeatureIcon name={icon} className="size-6 text-secondary-700" />
      <div><h3 className="font-editorial text-h4 font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{description}</p></div>
    </div>
  );
}

export function ContactDetails({ information }: { information: ContactInformation }) {
  return (
    <div className="min-w-0 space-y-6">
      <ContactCard title="Adresse" description={information.address} icon="pin" />
      <ContactCard title="Téléphone" description={information.phone} icon="phone" />
      <ContactCard title="E-mail" description={information.email} icon="mail" />
      <figure>
        <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted">
          <iframe title="Carte générale de Bondoukou — emplacement du musée non confirmé" src={information.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full border-0" />
        </div>
        <figcaption className="mt-3 text-sm text-muted-foreground">
          Carte de la ville ; l’emplacement précis du musée reste à confirmer.{" "}
          <a href={information.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-primary underline underline-offset-4">Ouvrir la carte de Bondoukou <span className="sr-only">(nouvel onglet)</span><span aria-hidden="true" className="ml-2">↗</span></a>
        </figcaption>
      </figure>
    </div>
  );
}
