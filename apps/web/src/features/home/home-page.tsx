import { SiteHeader } from "../../shared/site-header";
import { SiteFooter } from "../../shared/site-footer";
import { homeRepository } from "./home-repository";
import { MuseumHero } from "./museum-hero";
import { MuseumIntroduction } from "./museum-introduction";
import { LibrarySection } from "./discovery-sections";
import { CollectionsSection } from "../collections/collections-section";
import { collectionRepository } from "../collections/collection-repository";
import { PermanentCollectionsSection } from "../collections/permanent-collections-section";
import { VisitSection } from "../visit/visit-section";
import { visitRepository } from "../visit/visit-repository";
import { AgendaSection } from "./practical-sections";
export async function HomePage() {
  const [content, collections, categories, visitInformation] = await Promise.all([
    homeRepository.getContent(), collectionRepository.getFeatured(),
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
        <AgendaSection content={content} />
      </main>
      <SiteFooter />
    </>
  );
}
