"use client";

import Image from "next/image";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Reveal, GoldDivider } from "@/components/ui/motion-primitives";
import { gallery } from "@/lib/site";
import { cn } from "@/lib/utils";

const spanClasses: Record<string, string> = {
  lg: "sm:col-span-2 sm:row-span-2",
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  sm: "",
};

export function Gallery() {
  const [active, setActive] = React.useState<number | null>(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="galerie" className="bg-cream-100 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold-600">
              Galerie
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-semibold text-forest-800 md:text-5xl">
              Découvrez notre univers
            </h2>
          </Reveal>
          <GoldDivider className="my-7" />
          <Reveal delay={0.1}>
            <p className="text-muted-foreground">
              Un voyage à travers le temps et la gastronomie.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[240px] lg:grid-cols-3">
          {gallery.map((item, i) => (
            <motion.button
              type="button"
              key={item.src}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
              className={cn(
                "group relative overflow-hidden rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                spanClasses[item.span]
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-serif text-xl font-medium text-cream-100">
                  {item.title}
                </h3>
                <p className="text-sm text-gold-200">{item.caption}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={gallery[active].title}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Fermer"
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 transition-colors hover:bg-cream-100/20"
            >
              <X className="size-6" />
            </button>
            <motion.figure
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-4xl"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                <Image
                  src={gallery[active].src}
                  alt={gallery[active].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-4 text-center">
                <p className="font-serif text-2xl text-cream-100">
                  {gallery[active].title}
                </p>
                <p className="text-sm text-gold-200">{gallery[active].caption}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
