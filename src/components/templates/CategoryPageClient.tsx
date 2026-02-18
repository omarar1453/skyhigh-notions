"use client";

import type { Category, Template } from "@/data/templates";
import TemplateCard from "@/components/ui/TemplateCard";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Props {
  category: Category;
  templates: Template[];
}

export default function CategoryPageClient({ category, templates }: Props) {
  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Hero */}
      <div
        className={cn(
          "bg-gradient-to-br text-white",
          category.color
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/templates" className="hover:text-white">
              Templates
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white font-medium">{category.name}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            {category.name} Templates
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            {category.description}
          </p>
          <p className="text-white/60 text-sm mt-3">
            {templates.length} templates available
          </p>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </div>

        {templates.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-lg font-bold text-foreground mb-2">
              Coming soon
            </h3>
            <p className="text-foreground-secondary">
              We&apos;re working on templates for this category. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
