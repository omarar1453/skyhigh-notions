"use client";

import type { Template } from "@/data/templates";
import TemplateCard from "@/components/ui/TemplateCard";
import { Gift } from "lucide-react";

interface Props {
  templates: Template[];
}

export default function FreePageClient({ templates }: Props) {
  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-white/20">
            <Gift className="h-4 w-4" />
            <span className="text-sm font-medium">100% Free, No Catch</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Free Notion Templates
          </h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Try our premium-quality templates at no cost. No credit card
            required, no strings attached. Just enter your email and start
            organizing.
          </p>
        </div>
      </div>

      {/* Templates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </div>

        {templates.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground-secondary">
              Free templates coming soon. Subscribe to get notified!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
