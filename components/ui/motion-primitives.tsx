"use client";

import { motion, type Variants } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "span" | "li" | "h2" | "p";
};

/** Fades + slides content up once it scrolls into view. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: easeOut, delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

/** Wraps a group of children that should stagger in one-by-one. */
export function RevealGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

/** A decorative gold divider that draws itself in when visible. */
export function GoldDivider({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("mx-auto h-px w-24 gradient-gold", className)}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: easeOut }}
    />
  );
}
