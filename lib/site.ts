export const siteConfig = {
  name: "Le Pavillon Vert",
  legalName: "Le Pavillon Vert — Brasserie",
  tagline: "Une expérience culinaire d'exception",
  description:
    "Brasserie raffinée nichée dans le Château-ferme de Falnuée, un donjon médiéval du XIIIᵉ siècle classé au patrimoine wallon. Cuisine de saison au cœur du golf, à Gembloux.",
  url: "https://lepavillonvert.be",
  locale: "fr_BE",
  contact: {
    phone: "+32 81 63 30 90",
    phoneHref: "tel:+3281633090",
    email: "info@lepavillonvert.be",
    seminarsEmail: "info@falnuee.be",
    reservationUrl: "https://www.golf-hotel-falnuee.com/restaurant",
  },
  address: {
    street: "Rue Émile Pirson 55",
    postalCode: "5030",
    city: "Gembloux",
    region: "Namur",
    country: "Belgique",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rue+Emile+Pirson+55+5030+Gembloux+Belgique",
  },
  hours: [
    { day: "Lundi", value: "Fermé", closed: true },
    { day: "Mardi", value: "10h – 21h" },
    { day: "Mercredi", value: "10h – 21h" },
    { day: "Jeudi", value: "10h – 21h" },
    { day: "Vendredi", value: "10h – 21h" },
    { day: "Samedi", value: "10h – 21h" },
    { day: "Dimanche", value: "10h – 21h" },
  ],
} as const;

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "L'histoire", href: "#histoire" },
  { label: "Galerie", href: "#galerie" },
  { label: "Évènements", href: "#evenements" },
  { label: "Contact", href: "#contact" },
] as const;

export const gallery = [
  {
    src: "/gallery/donjon.jpg",
    alt: "Donjon médiéval du XIIIᵉ siècle du Château-ferme de Falnuée",
    title: "Le Donjon Médiéval",
    caption: "XIIIᵉ siècle",
    span: "lg" as const,
  },
  {
    src: "/gallery/vaults.jpg",
    alt: "Salle de restaurant sous les voûtes en briques",
    title: "Voûtes en Briques",
    caption: "Architecture authentique",
    span: "tall" as const,
  },
  {
    src: "/gallery/golf.jpg",
    alt: "Vue sur le parcours de golf entourant le château",
    title: "Le Golf",
    caption: "Cadre verdoyant",
    span: "sm" as const,
  },
  {
    src: "/gallery/interior.jpg",
    alt: "Intérieur du restaurant aux accents médiévaux",
    title: "La Salle",
    caption: "Élégance intemporelle",
    span: "sm" as const,
  },
  {
    src: "/gallery/night-2.jpg",
    alt: "Château illuminé à la tombée de la nuit",
    title: "Ambiance Nocturne",
    caption: "Éclairage raffiné",
    span: "wide" as const,
  },
  {
    src: "/gallery/salon.jpg",
    alt: "Salon intime pour événements privés",
    title: "Salon Intime",
    caption: "Événements privés",
    span: "sm" as const,
  },
] as const;
