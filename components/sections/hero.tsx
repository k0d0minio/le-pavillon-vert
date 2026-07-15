"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <Image
          src="/gallery/hero.jpg"
          alt="Le Château-ferme de Falnuée et son parcours de golf"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
      </motion.div>
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 -z-10 hero-gradient" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container flex flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold-200 sm:text-sm"
        >
          <span className="h-px w-8 bg-gold-300/60" />
          Château-ferme de Falnuée
          <span className="h-px w-8 bg-gold-300/60" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.32 }}
          className="text-balance font-serif text-5xl font-semibold leading-[1.05] text-cream-100 drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Le Pavillon Vert
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.5 }}
          className="mt-6 max-w-xl text-pretty text-lg font-light text-cream-100/90 sm:text-xl md:text-2xl"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.62 }}
          className="mt-3 text-sm text-cream-100/70 sm:text-base"
        >
          Au cœur du patrimoine wallon, à proximité des greens
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.78 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild variant="gold" size="lg">
            <Link href={siteConfig.contact.reservationUrl} target="_blank" rel="noreferrer">
              Réserver une table
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#histoire">Découvrir le lieu</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#histoire"
        aria-label="Faire défiler"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-100/80"
      >
        <ChevronDown className="size-7 animate-scroll-bounce" />
      </motion.a>
    </section>
  );
}
