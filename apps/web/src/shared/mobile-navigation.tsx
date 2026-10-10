"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { buttonVariants } from "@musee/ui";
import { navigation } from "./navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  function close() { dialog.current?.close(); setOpen(false); trigger.current?.focus(); }
  return <div className="xl:hidden">
    <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-label="Ouvrir le menu" aria-haspopup="dialog" aria-expanded={open} aria-controls="mobile-navigation" className="flex size-11 cursor-pointer flex-col items-center justify-center gap-1 rounded-md hover:bg-background/10">
      <span aria-hidden="true" className="h-px w-5 bg-current" /><span aria-hidden="true" className="h-px w-5 bg-current" /><span aria-hidden="true" className="h-px w-5 bg-current" />
    </button>
    <dialog ref={dialog} id="mobile-navigation" aria-labelledby="menu-title" onClose={() => { setOpen(false); trigger.current?.focus(); }} className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-ink p-6 text-background backdrop:bg-ink/70 [&_*:focus-visible]:outline-background">
      <div className="flex items-center justify-between gap-4"><h2 id="menu-title" className="font-editorial text-h4 font-semibold">Musée de Bondoukou</h2><button type="button" autoFocus onClick={close} className="min-h-11 cursor-pointer rounded-md border border-background/40 px-4 text-sm">Fermer</button></div>
      <nav aria-label="Navigation mobile" className="mx-auto flex max-w-prose flex-col items-center gap-3 py-12">
        {navigation.map(([label, href]) => <Link onClick={close} key={href} href={href} className="min-h-11 px-6 py-3 text-base font-semibold uppercase tracking-widest hover:text-secondary-200">{label}</Link>)}
        <Link onClick={close} href="/bibliotheque/catalogue" className={buttonVariants({ size: "lg" })}>Explorer le catalogue</Link>
      </nav>
    </dialog>
  </div>;
}
