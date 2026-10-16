import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Indiquez au moins 2 caractères pour votre nom.").max(100, "Le nom est limité à 100 caractères."),
  email: z.string().trim().email("Indiquez une adresse e-mail valide.").max(254, "L’adresse e-mail est trop longue."),
  message: z.string().trim().min(10, "Votre message doit contenir au moins 10 caractères.").max(2000, "Le message est limité à 2 000 caractères."),
});

export type ContactMessage = z.infer<typeof contactSchema>;
export type ContactFieldName = keyof ContactMessage;
export type ContactErrors = Partial<Record<ContactFieldName, string>>;

export function validateContact(input: unknown) {
  const result = contactSchema.safeParse(input);
  if (result.success) return { success: true as const, data: result.data };
  const errors: ContactErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0];
    if (field === "name" || field === "email" || field === "message") errors[field] ??= issue.message;
  }
  return { success: false as const, errors };
}
