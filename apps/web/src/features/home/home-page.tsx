import { SiteHeader } from "../../shared/site-header";
import { SiteFooter } from "../../shared/site-footer";
import { MuseumHero } from "./museum-hero";
import { MuseumIntroduction } from "./museum-introduction";
import { LibrarySection } from "./discovery-sections";
import { CollectionsSection } from "../collections/collections-section";
import { collectionRepository } from "../collections/collection-repository";
import { PermanentCollectionsSection } from "../collections/permanent-collections-section";
import { VisitSection } from "../visit/visit-section";
import { visitRepository } from "../visit/visit-repository";
export async function HomePage() {
  const [collections, categories, visitInformation] = await Promise.all([
    collectionRepository.getFeatured(),
    collectionRepository.getCategories(), visitRepository.getInformation(),
  ]);
  return (
    <>
      <SiteHeader overlay />
      <main id="main">
        <MuseumHero />
        <MuseumIntroduction />
        <CollectionsSection collections={collections} />
        <PermanentCollectionsSection categories={categories} />
        <VisitSection information={visitInformation} />
        <LibrarySection />
      </main>
      <SiteFooter />
    </>
  );
}
