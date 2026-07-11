import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baseUrl = "https://www.wasteohio.com";

export const metadata: Metadata = {
  title: {
    default: "Great Lakes Waste | Roll-Off Dumpster Rental in Cleveland, Ohio",
    template: "%s | Great Lakes Waste",
  },
  description:
    "Book a 10, 15, 20, 30, or 40 yard roll-off dumpster online in under two minutes. Same-day and next-day delivery across Greater Cleveland. Flat pricing, no hidden fees.",
  keywords:
    "roll off dumpster Cleveland, dumpster rental Cleveland, 10 yard dumpster, 15 yard dumpster, 20 yard dumpster, 30 yard dumpster, 40 yard dumpster, construction dumpster, residential dumpster, roofing dumpster, home cleanout dumpster, book dumpster online Cleveland, same day dumpster delivery Cleveland",
  metadataBase: new URL(baseUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Great Lakes Waste | Book a Roll-Off Dumpster Online in Cleveland",
    description:
      "Roll-off dumpsters delivered to your driveway across Greater Cleveland. Book online in two minutes.",
    url: baseUrl,
    siteName: "Great Lakes Waste",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Lakes Waste — Cleveland Dumpster Rental",
    description: "Book a roll-off dumpster online in under two minutes.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Great Lakes Waste",
  description:
    "Roll-off dumpster rental in Greater Cleveland. Sizes from 10 to 40 yards for home cleanouts, remodels, roofing, and construction. Book online with flat pricing.",
  url: baseUrl,
  telephone: "+1-800-368-0836",
  email: "sales@wasteohio.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cleveland",
    addressRegion: "OH",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.4993,
    longitude: -81.6944,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 41.4993,
      longitude: -81.6944,
    },
    geoRadius: "60000",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roll-Off Dumpster Sizes",
    itemListElement: [
      { "@type": "Offer", price: "349", priceCurrency: "USD", itemOffered: { "@type": "Product", name: "10 Yard Roll-Off Dumpster" } },
      { "@type": "Offer", price: "399", priceCurrency: "USD", itemOffered: { "@type": "Product", name: "15 Yard Roll-Off Dumpster" } },
      { "@type": "Offer", price: "449", priceCurrency: "USD", itemOffered: { "@type": "Product", name: "20 Yard Roll-Off Dumpster" } },
      { "@type": "Offer", price: "499", priceCurrency: "USD", itemOffered: { "@type": "Product", name: "30 Yard Roll-Off Dumpster" } },
      { "@type": "Offer", price: "599", priceCurrency: "USD", itemOffered: { "@type": "Product", name: "40 Yard Roll-Off Dumpster" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
