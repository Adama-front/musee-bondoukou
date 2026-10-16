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
import { ActivitiesSection } from "../activities/activities-section";
import { activityRepository } from "../activities/activity-repository";
import { GallerySection } from "../gallery/gallery-section";
import { galleryRepository } from "../gallery/gallery-repository";
import { TestimonialsSection } from "../testimonials/testimonials-section";
import { testimonialRepository } from "../testimonials/testimonial-repository";
import { ContactSection } from "../contact/contact-section";
import { contactRepository } from "../contact/contact-repository";
export async function HomePage() {
  const [collections, categories, visitInformation, activities, gallery, testimonials, contact] = await Promise.all([
    collectionRepository.getFeatured(),
    collectionRepository.getCategories(), visitRepository.getInformation(),
    activityRepository.getPreviews(), galleryRepository.getImages(),
    testimonialRepository.getPreviews(), contactRepository.getInformation(),
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
        <ActivitiesSection activities={activities} />
        <GallerySection images={gallery} />
        <TestimonialsSection entries={testimonials} />
        <ContactSection information={contact} />
      </main>
      <SiteFooter />
    </>
  );
}
