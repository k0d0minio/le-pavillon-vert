"use client";

import { Castle, UtensilsCrossed, Trees } from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/ui/motion-primitives";

const features = [
  {
    icon: Castle,
    title: "Château Médiéval",
    body: "Un donjon du XIIIᵉ siècle classé au patrimoine wallon depuis 1976, témoin de plus de 700 ans d'histoire namuroise.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cuisine Raffinée",
    body: "Des plats élaborés avec passion, à partir de produits frais et de saison soigneusement sélectionnés.",
  },
  {
    icon: Trees,
    title: "Cadre Exceptionnel",
    body: "À deux pas des greens, profitez d'un environnement verdoyant et apaisant, en toute quiétude.",
  },
];

export function Features() {
  return (
    <section className="relative bg-forest-900 py-24 text-cream-100 md:py-28">
      <div className="container">
        <RevealGroup className="grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-cream-100/10 bg-forest-800/40 p-8 transition-colors duration-500 hover:border-gold-300/40 hover:bg-forest-800/70">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 transition-transform duration-500 group-hover:scale-110">
                  <f.icon className="size-7" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-2xl font-medium text-cream-100">
                  {f.title}
                </h3>
                <p className="leading-relaxed text-cream-100/70">{f.body}</p>
                <span className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 gradient-gold transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
