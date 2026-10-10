import Link from "next/link";
import { FeatureIcon, type FeatureIconName } from "@musee/ui";
import type { CollectionCategoryPreview } from "./collection-repository";

const icons: Record<CollectionCategoryPreview["id"], FeatureIconName> = {
  objects: "building", art: "palette", heritage: "crown", documents: "book", sculpture: "diamond", explore: "building",
};

export function CollectionCategoryCard({ category }: { category: CollectionCategoryPreview }) {
  return (
    <article className="flex h-full flex-col items-center rounded-md bg-surface px-6 py-8 text-center shadow-sm sm:px-8">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-background text-secondary-700">
        <FeatureIcon name={icons[category.id]} />
      </div>
      <h3 className="font-editorial text-h4 font-semibold">
        {category.href ? <Link href={category.href} className="underline decoration-secondary underline-offset-4 hover:text-primary">{category.title}</Link> : category.title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground">{category.description}</p>
    </article>
  );
}
