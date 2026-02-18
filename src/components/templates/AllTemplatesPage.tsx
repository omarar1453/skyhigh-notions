"use client";

import { useState, useMemo } from "react";
import { templates, categories } from "@/data/templates";
import TemplateCard from "@/components/ui/TemplateCard";
import Button from "@/components/ui/Button";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

type SortOption = "popular" | "newest" | "price-low" | "price-high" | "rating";

export default function AllTemplatesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState<SortOption>("popular");
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const filtered = useMemo(() => {
    let result = [...templates];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );
    }

    if (activeCategory !== "all") {
      result = result.filter((t) => t.categorySlug === activeCategory);
    }

    if (showFreeOnly) {
      result = result.filter((t) => t.isFree);
    }

    switch (sort) {
      case "popular":
        result.sort((a, b) => b.salesCount - a.salesCount);
        break;
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [search, activeCategory, sort, showFreeOnly]);

  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            All Templates
          </h1>
          <p className="text-foreground-secondary text-lg">
            {templates.length} premium Notion templates to transform your
            workspace
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Filters Bar */}
        <div className="bg-white rounded-2xl border border-border p-4 mb-8 flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-muted" />
            <input
              type="text"
              placeholder="Search templates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background-secondary text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="h-4 w-4 text-foreground-muted hover:text-foreground" />
              </button>
            )}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="px-4 py-2.5 rounded-xl border border-border bg-background-secondary text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          {/* Free toggle */}
          <button
            onClick={() => setShowFreeOnly(!showFreeOnly)}
            className={cn(
              "px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors",
              showFreeOnly
                ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                : "border-border text-foreground-secondary hover:bg-background-secondary"
            )}
          >
            Free Only
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
              activeCategory === "all"
                ? "bg-sky-600 text-white"
                : "bg-white border border-border text-foreground-secondary hover:bg-background-secondary"
            )}
          >
            All ({templates.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                activeCategory === cat.slug
                  ? "bg-sky-600 text-white"
                  : "bg-white border border-border text-foreground-secondary hover:bg-background-secondary"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((template, index) => (
              <TemplateCard
                key={template.id}
                template={template}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <SlidersHorizontal className="h-12 w-12 text-foreground-muted mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">
              No templates found
            </h3>
            <p className="text-foreground-secondary mb-6">
              Try adjusting your filters or search query.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
                setShowFreeOnly(false);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
