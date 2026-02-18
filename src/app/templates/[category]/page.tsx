import type { Metadata } from "next";
import { categories, getTemplatesByCategory, getCategoryBySlug } from "@/data/templates";
import { notFound } from "next/navigation";
import CategoryPageClient from "@/components/templates/CategoryPageClient";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};

  return {
    title: `${cat.name} Notion Templates`,
    description: `${cat.description} Browse ${cat.templateCount} premium ${cat.name.toLowerCase()} templates for Notion. Instant delivery, lifetime updates.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const categoryTemplates = getTemplatesByCategory(category);

  return <CategoryPageClient category={cat} templates={categoryTemplates} />;
}
