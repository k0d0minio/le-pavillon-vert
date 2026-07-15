"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarHeart, Users, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion-primitives";
import { siteConfig } from "@/lib/site";

const offerings = [
  {
    icon: CalendarHeart,
    title: "Mariages & Réceptions",
    body: "Célébrez les grands moments dans un décor historique unique, sous les voûtes du château.",
  },
  {
    icon: Users,
    title: "Séminaires & Entreprises",
    body: "Des espaces modulables pour vos réunions, incentives et journées d'étude, au calme.",
  },
  {
    icon: Sparkles,
    title: "Événements Privés",
    body: "Anniversaires, banquets et fêtes de famille orchestrés sur mesure par notre équipe.",
  },
];

export function Events() {
  return (
    <section id="evenements" className="relative overflow-hidden py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gallery/night-1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/70 to-transparent" />
      </div>

      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
              Évènements & Séminaires
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-semibold text-cream-100 md:text-5xl">
              Un cadre d&apos;exception pour vos occasions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty leading-relaxed text-cream-100/75">
              Du mariage intime au séminaire d&apos;entreprise, le Château-ferme de
              Falnuée offre un écrin chargé d&apos;histoire à quelques pas des greens.
              Notre équipe compose chaque événement sur mesure.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offerings.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="rounded-2xl border border-cream-100/10 bg-cream-100/5 p-7 backdrop-blur-sm transition-colors duration-500 hover:border-gold-300/40 hover:bg-cream-100/10"
            >
              <o.icon className="mb-5 size-8 text-gold-300" strokeWidth={1.5} />
              <h3 className="mb-2 text-xl font-medium text-cream-100">{o.title}</h3>
              <p className="text-sm leading-relaxed text-cream-100/70">{o.body}</p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12">
            <Button asChild variant="gold" size="lg">
              <Link href={`mailto:${siteConfig.contact.seminarsEmail}`}>
                Demander un devis
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
