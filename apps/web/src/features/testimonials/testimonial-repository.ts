import { testimonialsMock } from "./testimonials.mock";

export interface TestimonialPreview {
  id: string;
  quote: string;
  author: string;
  context: string;
  isMock: boolean;
}
export interface TestimonialRepository { getPreviews(): Promise<readonly TestimonialPreview[]> }
export const testimonialRepository: TestimonialRepository = {
  async getPreviews() { return testimonialsMock; },
};
