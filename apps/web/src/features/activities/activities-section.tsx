import { Container, EmptyState, FeatureIcon } from "@musee/ui";
import type { ActivityPreview } from "./activity-repository";

function ActivityCard({ activity }: { activity: ActivityPreview }) {
  return (
    <article className="flex h-full gap-4 rounded-md bg-surface p-6 shadow-xs">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-background text-secondary-700">
        <FeatureIcon name={activity.icon} className="size-5" />
      </div>
      <div className="min-w-0">
        <p className="mb-1 text-xs font-bold uppercase tracking-wide text-primary">{activity.category}</p>
        <h3 className="font-editorial text-h4 font-semibold">{activity.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{activity.description}</p>
      </div>
    </article>
  );
}

export function ActivitiesSection({ activities }: { activities: readonly ActivityPreview[] }) {
  return (
    <section id="evenements-ateliers" aria-labelledby="activities-title" className="bg-background py-section">
      <Container>
        <header className="mx-auto mb-10 max-w-prose text-center lg:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Les rendez-vous du musée</p>
          <h2 id="activities-title" className="font-editorial text-h2 font-semibold">Événements & ateliers</h2>
          <span aria-hidden="true" className="mx-auto my-5 block h-px w-16 bg-secondary" />
          <p className="text-sm text-muted-foreground">Aperçu de démonstration : activités et modalités à confirmer par le musée.</p>
        </header>
        {activities.length ? (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map(activity => <li key={activity.id} className="min-w-0"><ActivityCard activity={activity} /></li>)}
          </ul>
        ) : <EmptyState title="La programmation sera présentée ici après confirmation." />}
      </Container>
    </section>
  );
}
