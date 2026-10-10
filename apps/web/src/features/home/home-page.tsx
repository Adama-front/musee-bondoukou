import { SiteHeader } from "../../shared/site-header";
import { SiteFooter } from "../../shared/site-footer";
import { homeRepository } from "./home-repository";
import { MuseumHero } from "./museum-hero";
import { MuseumIntroduction } from "./museum-introduction";
import { LibrarySection } from "./discovery-sections";
import { CollectionsSection } from "../collections/collections-section";
import { collectionRepository } from "../collections/collection-repository";
import { AgendaSection, VisitSection } from "./practical-sections";
export async function HomePage() {
  const [content, collections] = await Promise.all([homeRepository.getContent(), collectionRepository.getFeatured()]);
  return <><SiteHeader overlay /><main id="main"><MuseumHero /><MuseumIntroduction /><CollectionsSection collections={collections} /><LibrarySection /><AgendaSection content={content} /><VisitSection /></main><SiteFooter /></>;
}
