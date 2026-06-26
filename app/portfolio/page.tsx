import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio | IITIL",
  description:
    "Explore IITIL's active projects, technology services, organizational capabilities, and full-stack digital solutions delivered across India and global markets.",
};

export default function Portfolio() {
  return <PortfolioPage />;
}
