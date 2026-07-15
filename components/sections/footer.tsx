import Image from "next/image";
import Link from "next/link";

import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const { contact, address } = siteConfig;
  const year = 2026;

  return (
    <footer className="bg-forest-950 text-cream-100/80">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#accueil" className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-cream-100/20">
                <Image
                  src="/logo.png"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </span>
              <span className="font-serif text-xl font-semibold text-cream-100">
                Le Pavillon Vert
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/60">
              Brasserie raffinée dans un cadre historique exceptionnel, au cœur
              du Château-ferme de Falnuée.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg text-cream-100">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-100/60 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={contact.reservationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream-100/60 transition-colors hover:text-gold-300"
                >
                  Notre menu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg text-cream-100">Nous trouver</h4>
            <address className="space-y-2 text-sm not-italic text-cream-100/60">
              <p>{address.street}</p>
              <p>
                {address.postalCode} {address.city}
              </p>
              <p>{address.country}</p>
              <Link
                href={address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block pt-1 text-gold-300/90 transition-colors hover:text-gold-300"
              >
                Itinéraire →
              </Link>
            </address>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg text-cream-100">Contact</h4>
            <ul className="space-y-2.5 text-sm text-cream-100/60">
              <li>
                <Link
                  href={contact.phoneHref}
                  className="transition-colors hover:text-gold-300"
                >
                  {contact.phone}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${contact.email}`}
                  className="break-all transition-colors hover:text-gold-300"
                >
                  {contact.email}
                </Link>
              </li>
              <li className="pt-2 text-xs uppercase tracking-wide text-cream-100/40">
                Séminaires
              </li>
              <li>
                <Link
                  href={`mailto:${contact.seminarsEmail}`}
                  className="break-all transition-colors hover:text-gold-300"
                >
                  {contact.seminarsEmail}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream-100/10 pt-8 text-xs text-cream-100/40 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>Château-ferme de Falnuée — Gembloux, Belgique</p>
        </div>
      </div>
    </footer>
  );
}
