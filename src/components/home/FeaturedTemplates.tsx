"use client";

import { getFeaturedTemplates } from "@/data/templates";
import TemplateCard from "@/components/ui/TemplateCard";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedTemplates() {
  const featured = getFeaturedTemplates();

  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
              Most Popular
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Featured Templates
            </h2>
          </div>
          <Link href="/templates">
            <Button variant="ghost" size="md">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
