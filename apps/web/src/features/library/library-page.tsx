import { SiteHeader } from "../../shared/site-header";
import { SiteFooter } from "../../shared/site-footer";
import { libraryRepository } from "./library-repository";
import { LibraryHero } from "./library-hero";
import { LibraryNavigation } from "./library-navigation";
import { LibraryIntroduction, LibraryCatalogueSection } from "./library-introduction";
import { LibraryInformation, LibraryContact } from "./library-information";
import { LibraryUpdates } from "./library-updates";

export async function LibraryPage() {
  const content = await libraryRepository.getContent();
  return (
    <>
      <SiteHeader />
      <main id="main">
        <LibraryHero />
        <LibraryNavigation />
        <LibraryIntroduction introduction={content.introduction} />
        <LibraryCatalogueSection />
        <LibraryInformation hours={content.hours} consultation={content.consultation} />
        <LibraryUpdates id="evenements" eyebrow="Les rendez-vous" title="Événements de la bibliothèque" emptyTitle="Aucun événement annoncé pour le moment." entries={content.events} />
        <LibraryUpdates id="actualites" eyebrow="À la une" title="Actualités de la bibliothèque" emptyTitle="Aucune actualité publiée pour le moment." entries={content.news} />
        <LibraryContact location={content.location} contact={content.contact} />
      </main>
      <SiteFooter />
    </>
  );
}
