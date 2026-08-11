"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Reveal, GoldDivider } from "@/components/ui/motion-primitives";

const stats = [
  { value: "700+", label: "ans d'histoire" },
  { value: "XIIIᵉ", label: "siècle — le donjon" },
  { value: "1976", label: "classé patrimoine" },
];

export function About() {
  return (
    <section id="histoire" className="relative overflow-hidden bg-cream-100 py-24 md:py-32">
      <div className="bg-grain absolute inset-0 opacity-60" aria-hidden />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold-600">
              Notre histoire
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-semibold text-forest-800 md:text-5xl">
              Bienvenue au Pavillon Vert
            </h2>
          </Reveal>
          <GoldDivider className="my-7" />
        </div>

        <div className="mt-6 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="text-pretty text-xl font-light leading-relaxed text-forest-800/90 md:text-2xl">
                Niché dans le Château-ferme de Falnuée, édifice médiéval classé au
                patrimoine wallon depuis 1976, Le Pavillon Vert allie plus de{" "}
                <span className="font-normal text-gold-700">700 ans d&apos;histoire</span> à
                l&apos;excellence culinaire.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Érigé au XIIIᵉ siècle comme donjon de guet, ce lieu chargé
                d&apos;histoire accueille aujourd&apos;hui notre restaurant. Notre chef
                et son équipe vous proposent une cuisine raffinée dans un cadre
                exceptionnel, au cœur du parcours de golf qui entoure le château.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-serif text-3xl font-semibold text-forest-700 md:text-4xl">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-forest-900/20">
                <Image
                  src="/gallery/vaults.jpg"
                  alt="Salle de restaurant sous les voûtes en briques du château"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              {/* Decorative frame accent */}
              <div className="absolute -bottom-5 -left-5 -z-10 h-40 w-40 rounded-2xl border border-gold-300/40 md:-bottom-8 md:-left-8 md:h-56 md:w-56" />
              <div className="absolute -right-4 -top-4 -z-10 h-28 w-28 rounded-2xl bg-forest-100 md:h-40 md:w-40" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
