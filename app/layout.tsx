import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/seo";
import { graph, organizationSchema, webSiteSchema } from "@/lib/structured-data";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-roboto",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Enterprise Data, AI ML, Cloud & Digital Transformation Services | IITIL.com",
    template: "%s | IITIL.com",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.legalName,
  category: "Technology",
  keywords: [
    "Enterprise Software",
    "Data Analytics",
    "Artificial Intelligence",
    "Machine Learning",
    "DevOps",
    "Cloud Computing",
    "Data Engineering",
    "Data Intelligence",
    "SaaS Development",
    "Enterprise Applications",
    "Custom Software Development",
    "Technology Consulting",
    "Digital Transformation",
    "Cloud Migration",
    "Business Intelligence",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: `${SITE.url}/`,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "IITIL — Enterprise Data, AI, Cloud & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitterHandle,
    creator: SITE.twitterHandle,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/iitil_logo.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/iitil_logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/iitil_logo.svg" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "Wq5EduR0_5fnmMxzcgKA4ws5q0VjYCp2VTNAkm0YTWg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-[family-name:var(--font-roboto)] antialiased">
        <JsonLd data={graph(organizationSchema(), webSiteSchema())} />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
