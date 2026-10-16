"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { contactRepository } from "./contact-repository";
import { validateContact, type ContactErrors } from "./contact-schema";

const subscribe = () => () => {};
const hydrated = () => true;
const serverSnapshot = () => false;

export function useContactForm() {
  const ready = useSyncExternalStore(subscribe, hydrated, serverSnapshot);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "pending" | "preview" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const submitter = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (status === "preview" || status === "error") submitter.current?.focus();
  }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "pending") return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const result = validateContact({ name: values.get("name"), email: values.get("email"), message: values.get("message") });
    setFeedback("");
    if (!result.success) {
      setErrors(result.errors);
      setStatus("idle");
      const field = Object.keys(result.errors)[0];
      form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${field}"]`)?.focus();
      return;
    }
    setErrors({});
    submitter.current = (event.nativeEvent as SubmitEvent).submitter;
    setStatus("pending");
    try {
      const preview = await contactRepository.previewMessage(result.data);
      setFeedback(preview.feedback);
      setStatus(preview.status);
    } catch {
      setFeedback("La vérification n’a pas abouti. Réessayez ; aucun message n’a été envoyé.");
      setStatus("error");
    }
  }

  function clearFeedback() { if (status === "preview" || status === "error") { setStatus("idle"); setFeedback(""); } }
  return { ready, errors, status, feedback, submit, clearFeedback };
}
