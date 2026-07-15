import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

import { siteConfig } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Brasserie au Château-ferme de Falnuée`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "restaurant Gembloux",
    "brasserie Namur",
    "Château-ferme de Falnuée",
    "Le Pavillon Vert",
    "restaurant golf Falnuée",
    "événements Gembloux",
    "séminaires Namur",
    "mariage château Belgique",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Une expérience culinaire d'exception`,
    description: siteConfig.description,
    images: [
      {
        url: "/gallery/hero.jpg",
        width: 1600,
        height: 1200,
        alt: "Le Château-ferme de Falnuée abritant Le Pavillon Vert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Une expérience culinaire d'exception`,
    description: siteConfig.description,
    images: ["/gallery/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  category: "restaurant",
};

export const viewport: Viewport = {
  themeColor: "#2d4a2d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  image: `${siteConfig.url}/gallery/hero.jpg`,
  servesCuisine: "Française",
  priceRange: "€€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    postalCode: siteConfig.address.postalCode,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: "BE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  acceptsReservations: siteConfig.contact.reservationUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
