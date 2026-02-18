import type { Metadata } from "next";
import BundlesPageClient from "@/components/templates/BundlesPageClient";

export const metadata: Metadata = {
  title: "Template Bundles — Save Up to 65%",
  description:
    "Get more for less with SkyHigh template bundles. Save up to 65% when you buy our curated Notion template collections.",
};

export default function BundlesPage() {
  return <BundlesPageClient />;
}
