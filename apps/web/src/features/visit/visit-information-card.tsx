import { FeatureIcon, type FeatureIconName } from "@musee/ui";
import type { VisitInformation } from "./visit-repository";

const icons: Record<VisitInformation["id"], FeatureIconName> = {
  hours: "clock", prices: "ticket", tours: "users", audio: "headphones", rules: "shield", accessibility: "accessibility",
};

export function VisitInformationCard({ information }: { information: VisitInformation }) {
  return (
    <article className="h-full rounded-md border border-background/20 p-6">
      <FeatureIcon name={icons[information.id]} className="mb-4 text-secondary-200" />
      <h3 className="font-editorial text-h4 font-semibold">{information.title}</h3>
      <p className="mt-3 text-sm text-background/80">{information.description}</p>
    </article>
  );
}
