"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, GoldDivider } from "@/components/ui/motion-primitives";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Contact() {
  const { contact, address, hours } = siteConfig;

  return (
    <section id="contact" className="bg-cream-100 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold-600">
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-semibold text-forest-800 md:text-5xl">
              Réservez votre table
            </h2>
          </Reveal>
          <GoldDivider className="my-7" />
          <Reveal delay={0.1}>
            <p className="text-muted-foreground">
              Vivez une expérience culinaire inoubliable au Pavillon Vert.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Info cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <InfoCard icon={MapPin} title="Adresse" delay={0}>
              <p>{address.street}</p>
              <p>
                {address.postalCode} {address.city}, {address.country}
              </p>
              <Link
                href={address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-medium text-forest-700 underline-offset-4 hover:underline"
              >
                Voir l&apos;itinéraire →
              </Link>
            </InfoCard>

            <InfoCard icon={Phone} title="Téléphone" delay={0.08}>
              <Link
                href={contact.phoneHref}
                className="text-forest-700 transition-colors hover:text-gold-700"
              >
                {contact.phone}
              </Link>
            </InfoCard>

            <InfoCard icon={Mail} title="Email" delay={0.16}>
              <Link
                href={`mailto:${contact.email}`}
                className="block break-all text-forest-700 transition-colors hover:text-gold-700"
              >
                {contact.email}
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">Séminaires</p>
              <Link
                href={`mailto:${contact.seminarsEmail}`}
                className="block break-all text-forest-700 transition-colors hover:text-gold-700"
              >
                {contact.seminarsEmail}
              </Link>
            </InfoCard>

            <InfoCard icon={Clock} title="Réservation" delay={0.24}>
              <p className="mb-4 text-sm text-muted-foreground">
                Réservez en ligne votre table au restaurant.
              </p>
              <Button asChild variant="gold" size="sm">
                <Link
                  href={contact.reservationUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Réserver une table
                </Link>
              </Button>
            </InfoCard>
          </div>

          {/* Hours panel */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl bg-forest-800 p-8 text-cream-100 md:p-10"
          >
            <div className="bg-grain absolute inset-0 opacity-30" aria-hidden />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="size-6 text-gold-300" strokeWidth={1.5} />
                <h3 className="text-2xl font-medium">Horaires d&apos;ouverture</h3>
              </div>
              <ul className="divide-y divide-cream-100/10">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="text-cream-100/80">{h.day}</span>
                    <span
                      className={cn(
                        "font-medium",
                        "closed" in h && h.closed
                          ? "text-gold-300"
                          : "text-cream-100"
                      )}
                    >
                      {h.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-cream-100/50">
                Les horaires peuvent être modifiés lors de conditions
                météorologiques exceptionnelles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
  delay,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-forest-700">
        <Icon className="size-5" strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-lg font-medium text-forest-800">{title}</h3>
      <div className="text-forest-800/80">{children}</div>
    </motion.div>
  );
}
