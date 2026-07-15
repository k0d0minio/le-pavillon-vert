"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream-100/90 shadow-[0_2px_20px_-8px_rgba(20,40,20,0.25)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <Link
          href="#accueil"
          className="flex items-center gap-3"
          aria-label={siteConfig.name}
        >
          <span
            className={cn(
              "relative h-11 w-11 overflow-hidden rounded-full ring-1 transition-colors duration-500",
              scrolled ? "ring-forest-700/20" : "ring-cream-100/40"
            )}
          >
            <Image
              src="/logo.png"
              alt=""
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span
            className={cn(
              "font-serif text-lg font-semibold tracking-wide transition-colors duration-500 sm:text-xl",
              scrolled ? "text-forest-800" : "text-cream-100"
            )}
          >
            Le Pavillon Vert
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium tracking-wide transition-colors duration-300",
                  scrolled
                    ? "text-forest-800/80 hover:text-forest-800"
                    : "text-cream-100/90 hover:text-cream-100"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <Button asChild variant="gold" size="sm">
              <Link href={siteConfig.contact.reservationUrl} target="_blank" rel="noreferrer">
                Réserver une table
              </Link>
            </Button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors lg:hidden",
            scrolled || open ? "text-forest-800" : "text-cream-100"
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-cream-100/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 font-serif text-lg text-forest-800 transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-3 flex flex-col gap-3 px-3">
                <Button asChild variant="gold" className="w-full">
                  <Link
                    href={siteConfig.contact.reservationUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Réserver une table
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-forest-700/30 text-forest-800 hover:bg-secondary">
                  <Link href={siteConfig.contact.phoneHref}>
                    <Phone /> {siteConfig.contact.phone}
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
