import { contactInformationMock } from "./contact.mock";
import type { ContactMessage } from "./contact-schema";

export interface ContactInformation {
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
  mapUrl: string;
}
export interface ContactRepository {
  getInformation(): Promise<ContactInformation>;
  previewMessage(message: ContactMessage): Promise<{ status: "preview"; feedback: string }>;
}

export const contactRepository: ContactRepository = {
  async getInformation() { return contactInformationMock; },
  async previewMessage() {
    return { status: "preview", feedback: "Formulaire vérifié. Démonstration uniquement : aucun message n’a été envoyé." };
  },
};
