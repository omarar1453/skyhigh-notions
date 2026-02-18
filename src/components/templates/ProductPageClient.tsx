"use client";

import { useState } from "react";
import type { Template, Category } from "@/data/templates";
import { formatPrice, getDiscountPercentage, cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";
import TemplateCard from "@/components/ui/TemplateCard";
import {
  ShoppingCart,
  Download,
  ChevronRight,
  Home,
  Check,
  Shield,
  RefreshCw,
  Zap,
  ChevronDown,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  template: Template;
  category: Category;
  relatedTemplates: Template[];
}

export default function ProductPageClient({
  template,
  category,
  relatedTemplates,
}: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const discount = template.originalPrice
    ? getDiscountPercentage(template.originalPrice, template.price)
    : 0;

  const faqs = [
    {
      q: "How do I use this template?",
      a: "After purchase, you'll receive a Notion duplicate link. Click it and the template will be instantly copied to your Notion workspace. A setup guide is included.",
    },
    {
      q: "Do I get lifetime updates?",
      a: "Yes! All templates come with lifetime updates. Whenever we improve the template, you'll get access to the latest version at no extra cost.",
    },
    {
      q: "What if I'm not satisfied?",
      a: "We offer a 30-day money-back guarantee. If you're not happy with your purchase, contact us for a full refund — no questions asked.",
    },
    {
      q: "Can I use this for my team?",
      a: "Each purchase is for one Notion workspace. If you need it for multiple workspaces or team members, please contact us for team pricing.",
    },
    {
      q: "Do I need a paid Notion plan?",
      a: "Most of our templates work perfectly with Notion's free plan. Some advanced features may benefit from Notion Plus, but it's not required.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-background-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-foreground-muted text-sm">
            <Link
              href="/"
              className="hover:text-foreground flex items-center gap-1"
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/templates" className="hover:text-foreground">
              Templates
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href={`/templates/${template.categorySlug}`}
              className="hover:text-foreground"
            >
              {category.name}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium truncate">
              {template.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left — Image Gallery */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Main Image */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl overflow-hidden border border-border mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-white rounded-xl shadow-xl flex items-center justify-center">
                    <span className="text-foreground-muted">
                      {template.name} — Preview
                    </span>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {template.isBestseller && (
                    <Badge variant="premium" size="md">
                      Bestseller
                    </Badge>
                  )}
                  {template.isNew && (
                    <Badge variant="info" size="md">
                      New
                    </Badge>
                  )}
                  {discount > 0 && (
                    <Badge variant="danger" size="md">
                      -{discount}% OFF
                    </Badge>
                  )}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-3">
                {template.gallery.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-20 h-14 rounded-lg border-2 overflow-hidden cursor-pointer bg-gradient-to-br from-sky-50 to-indigo-50 flex items-center justify-center",
                      i === 0 ? "border-sky-500" : "border-border"
                    )}
                  >
                    <span className="text-[10px] text-foreground-muted">
                      {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Long Description */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-foreground mb-4">
                About this template
              </h2>
              <p className="text-foreground-secondary leading-relaxed">
                {template.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {template.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <Check className="h-5 w-5 text-accent-emerald shrink-0 mt-0.5" />
                    <span className="text-foreground-secondary text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-border rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-background-secondary transition-colors"
                    >
                      <span className="font-semibold text-foreground text-sm">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-foreground-muted transition-transform shrink-0",
                          openFaq === i && "rotate-180"
                        )}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4">
                        <p className="text-foreground-secondary text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Purchase Card (Sticky) */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-2xl border border-border p-6 shadow-lg"
              >
                {/* Category */}
                <p className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">
                  {template.category}
                </p>

                {/* Title */}
                <h1 className="text-2xl font-extrabold text-foreground mb-3 leading-tight">
                  {template.name}
                </h1>

                {/* Rating */}
                <div className="mb-4">
                  <StarRating
                    rating={template.rating}
                    reviewCount={template.reviewCount}
                    size="md"
                  />
                  <p className="text-xs text-foreground-muted mt-1">
                    {template.salesCount.toLocaleString()} sales
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  {template.isFree ? (
                    <span className="text-3xl font-extrabold text-accent-emerald">
                      Free
                    </span>
                  ) : (
                    <>
                      <span className="text-3xl font-extrabold text-foreground">
                        {formatPrice(template.price)}
                      </span>
                      {template.originalPrice && (
                        <>
                          <span className="text-lg text-foreground-muted line-through">
                            {formatPrice(template.originalPrice)}
                          </span>
                          <Badge variant="danger">Save {discount}%</Badge>
                        </>
                      )}
                    </>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 mb-6">
                  {template.isFree ? (
                    <Button size="xl" variant="primary" className="w-full">
                      <Download className="h-5 w-5" />
                      Get Free Template
                    </Button>
                  ) : (
                    <>
                      <Button
                        size="xl"
                        variant="primary"
                        className="w-full animate-pulse-glow"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Add to Cart — {formatPrice(template.price)}
                      </Button>
                      <Button size="lg" variant="outline" className="w-full">
                        <Heart className="h-4 w-4" />
                        Add to Wishlist
                      </Button>
                    </>
                  )}
                </div>

                {/* What's Included */}
                <div className="border-t border-border pt-5 mb-5">
                  <h3 className="font-bold text-foreground text-sm mb-3">
                    What&apos;s included:
                  </h3>
                  <ul className="space-y-2">
                    {template.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground-secondary"
                      >
                        <Check className="h-4 w-4 text-accent-emerald shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust Badges */}
                <div className="border-t border-border pt-5 space-y-3">
                  <div className="flex items-center gap-2.5 text-sm text-foreground-secondary">
                    <Zap className="h-4 w-4 text-sky-500" />
                    Instant delivery after purchase
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-foreground-secondary">
                    <Shield className="h-4 w-4 text-sky-500" />
                    30-day money-back guarantee
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-foreground-secondary">
                    <RefreshCw className="h-4 w-4 text-sky-500" />
                    Lifetime free updates
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Related Templates */}
        {relatedTemplates.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-8">
              More {category.name} Templates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedTemplates.slice(0, 4).map((t, i) => (
                <TemplateCard key={t.id} template={t} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
