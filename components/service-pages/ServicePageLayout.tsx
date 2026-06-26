import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import type { ReactNode } from "react";

interface ServicePageLayoutProps {
  children: ReactNode;
}

export default function ServicePageLayout({ children }: ServicePageLayoutProps) {
  return (
    <main
      className="min-h-screen text-white relative block"
      style={{ background: "rgba(2,8,23,1)" }}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
