import type { Metadata } from "next";
import { getFreeTemplates } from "@/data/templates";
import FreePageClient from "@/components/templates/FreePageClient";

export const metadata: Metadata = {
  title: "Free Notion Templates",
  description:
    "Download free premium-quality Notion templates. Daily planners, budget trackers, and more. No credit card required.",
};

export default function FreePage() {
  const freeTemplates = getFreeTemplates();
  return <FreePageClient templates={freeTemplates} />;
}
