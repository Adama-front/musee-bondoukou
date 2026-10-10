import Image from "next/image";
import type { CollectionPreview } from "./collection-repository";

export function CollectionCard({ collection }: { collection: CollectionPreview }) {
  return (
    <article className="relative isolate flex aspect-[4/3] min-h-72 w-full min-w-0 flex-col justify-end gap-4 overflow-hidden rounded-md bg-ink p-5 text-background sm:p-6">
      {collection.image ? (
        <>
          <Image src={collection.image.src} alt={collection.image.alt} fill
            sizes="(min-width: 1440px) 432px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="-z-20 object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/70" />
        </>
      ) : (
        <div className="flex min-h-16 flex-1 items-center justify-center rounded-sm border border-secondary/40">
          <p className="text-sm text-secondary-200">Photographie à fournir</p>
        </div>
      )}
      <div>
        <p className="mb-1 text-sm text-secondary-200">{collection.subtitle}</p>
        <h3 className="font-editorial text-h4 font-semibold">{collection.title}</h3>
      </div>
    </article>
  );
}
