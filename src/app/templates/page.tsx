import type { Metadata } from "next";
import AllTemplatesPage from "@/components/templates/AllTemplatesPage";

export const metadata: Metadata = {
  title: "All Notion Templates",
  description:
    "Browse our complete collection of premium Notion templates. Life planners, business hubs, finance trackers, student systems, and more. Instant delivery.",
};

export default function TemplatesPage() {
  return <AllTemplatesPage />;
}
