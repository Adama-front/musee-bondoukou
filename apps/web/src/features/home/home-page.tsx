import { SiteHeader } from "../../shared/site-header";
import { SiteFooter } from "../../shared/site-footer";
import { homeRepository } from "./home-repository";
import { MuseumHero } from "./museum-hero";
import { MuseumIntroduction, CollectionsSection, LibrarySection } from "./discovery-sections";
import { AgendaSection, VisitSection } from "./practical-sections";
export async function HomePage() {
  const content = await homeRepository.getContent();
  return <><SiteHeader overlay /><main id="main"><MuseumHero /><MuseumIntroduction /><CollectionsSection /><LibrarySection /><AgendaSection content={content} /><VisitSection /></main><SiteFooter /></>;
}
