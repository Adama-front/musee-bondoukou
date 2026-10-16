"use client";

import { Button, Input, Textarea } from "@musee/ui";
import { useContactForm } from "./use-contact-form";
import type { ContactFieldName } from "./contact-schema";

const fields: readonly { name: ContactFieldName; label: string; placeholder: string }[] = [
  { name: "name", label: "Nom", placeholder: "Votre nom" },
  { name: "email", label: "E-mail", placeholder: "vous@exemple.ci" },
  { name: "message", label: "Message", placeholder: "Votre message…" },
];

function ContactField({ name, label, placeholder, error }: typeof fields[number] & { error?: string }) {
  const shared = { id: `contact-${name}`, name, placeholder, required: true, "aria-invalid": Boolean(error), "aria-describedby": error ? `contact-${name}-error` : undefined };
  return (
    <div>
      <label htmlFor={shared.id} className="mb-2 block text-sm font-semibold">{label} <span aria-hidden="true">*</span></label>
      {name === "message"
        ? <Textarea {...shared} maxLength={2000} rows={5} className="border-muted-foreground" />
        : <Input {...shared} type={name === "email" ? "email" : "text"} autoComplete={name} maxLength={name === "email" ? 254 : 100} className="border-muted-foreground" />}
      {error && <p id={shared["aria-describedby"]} className="mt-2 text-sm text-error">{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const { ready, errors, status, feedback, submit, clearFeedback } = useContactForm();
  return (
    <form onSubmit={submit} onInput={clearFeedback} noValidate aria-label="Formulaire de contact de démonstration" aria-describedby="contact-demo" className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
      <p id="contact-demo" className="mb-6 text-sm text-muted-foreground">Tous les champs sont obligatoires. Ce formulaire de démonstration n’envoie aucun message.</p>
      {Object.keys(errors).length > 0 && <p role="alert" className="mb-6 text-sm font-semibold text-error">Veuillez corriger les champs indiqués.</p>}
      <fieldset disabled={!ready || status === "pending"} className="space-y-6">
        <legend className="sr-only">Vos coordonnées et votre message</legend>
        {fields.map(field => <ContactField key={field.name} {...field} error={errors[field.name]} />)}
        <Button type="submit" disabled={!ready || status === "pending"} className="w-full">{status === "pending" ? "Vérification…" : "Vérifier le message"}<span aria-hidden="true">→</span></Button>
      </fieldset>
      <p role={status === "error" ? "alert" : "status"} aria-live="polite" className="mt-4 text-sm">{feedback}</p>
    </form>
  );
}
