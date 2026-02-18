import type { Metadata } from "next";
import {
  templates,
  getTemplateBySlug,
  getCategoryBySlug,
  getTemplatesByCategory,
} from "@/data/templates";
import { notFound } from "next/navigation";
import ProductPageClient from "@/components/templates/ProductPageClient";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return templates.map((t) => ({
    category: t.categorySlug,
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const template = getTemplateBySlug(category, slug);
  if (!template) return {};

  return {
    title: `${template.name} — Notion Template`,
    description: template.description,
    openGraph: {
      title: `${template.name} — SkyHigh Notions`,
      description: template.description,
      images: [template.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category, slug } = await params;
  const template = getTemplateBySlug(category, slug);
  if (!template) notFound();

  const cat = getCategoryBySlug(category);
  const relatedTemplates = getTemplatesByCategory(category).filter(
    (t) => t.id !== template.id
  );

  return (
    <ProductPageClient
      template={template}
      category={cat!}
      relatedTemplates={relatedTemplates}
    />
  );
}
