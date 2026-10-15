import Link from "next/link";
import { Container, buttonVariants, cn } from "@musee/ui";
import { navigation as links } from "./navigation";
import { MobileNavigation } from "./mobile-navigation";
import { SiteHeaderFrame } from "./site-header-frame";
export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return <SiteHeaderFrame overlay={overlay}><Container className="flex h-(--site-header-height) items-center justify-between gap-4 py-4">
    <Link href="/" className="min-w-0 font-editorial text-lg font-semibold leading-tight sm:text-h4">Musée de Bondoukou<span className="block font-body text-sm font-normal">& Bibliothèque</span></Link>
    <nav aria-label="Navigation principale" className="hidden items-center gap-6 xl:flex">{links.map(([label, href]) => <Link key={href} href={href} className={cn("py-3 text-xs font-bold uppercase tracking-widest transition-colors", overlay ? "hover:text-secondary-200" : "hover:text-primary")}>{label}</Link>)}</nav>
    <Link href="/bibliotheque/catalogue" className={cn(buttonVariants({ size: "sm" }), "hidden xl:inline-flex")}>Catalogue</Link>
    <MobileNavigation />
  </Container></SiteHeaderFrame>;
}
