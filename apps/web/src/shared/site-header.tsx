import Link from "next/link";
import { Container, buttonVariants, cn } from "@musee/ui";
import { navigation as links } from "./navigation";
import { MobileNavigation } from "./mobile-navigation";
export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return <header className={cn("z-(--z-sticky)", overlay ? "absolute inset-x-0 top-0 text-background [&_*:focus-visible]:outline-background" : "relative border-b border-border")}><Container className="flex min-h-20 items-center justify-between gap-4 py-4">
    <Link href="/" className="min-w-0 font-editorial text-lg font-semibold leading-tight sm:text-h4">Musée de Bondoukou<span className="block font-body text-sm font-normal">& Bibliothèque</span></Link>
    <nav aria-label="Navigation principale" className="hidden items-center gap-6 xl:flex">{links.map(([label, href]) => <Link key={href} href={href} className={cn("py-3 text-xs font-bold uppercase tracking-widest transition-colors", overlay ? "hover:text-secondary-200" : "hover:text-primary")}>{label}</Link>)}</nav>
    <Link href="/bibliotheque/catalogue" className={cn(buttonVariants({ size: "sm" }), "hidden xl:inline-flex")}>Catalogue</Link>
    <MobileNavigation />
  </Container></header>;
}
