import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "IITIL — Data Intelligence, Enterprise AI & Cloud Engineering",
    template: "%s ",
  },
  description:
    "IITIL delivers data intelligence, enterprise AI, machine learning, cloud DevOps, analytics, and enterprise engineering for measurable business outcomes.",
  keywords: [
    "Data Intelligence",
    "Enterprise AI",
    "Machine Learning",
    "Cloud DevOps",
    "Analytics",
    "Enterprise Engineering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-[family-name:var(--font-roboto)] antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
