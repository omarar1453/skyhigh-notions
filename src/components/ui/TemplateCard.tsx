"use client";

import { cn, formatPrice, getDiscountPercentage } from "@/lib/utils";
import type { Template } from "@/data/templates";
import Badge from "./Badge";
import StarRating from "./StarRating";
import Button from "./Button";
import { ShoppingCart, Eye, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface TemplateCardProps {
  template: Template;
  index?: number;
}

export default function TemplateCard({ template, index = 0 }: TemplateCardProps) {
  const discount = template.originalPrice
    ? getDiscountPercentage(template.originalPrice, template.price)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        href={`/templates/${template.categorySlug}/${template.slug}`}
        className="group block"
      >
        <div className="relative bg-white rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-sky-200 hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-[16/10] bg-gradient-to-br from-sky-50 to-indigo-50 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-foreground-muted text-sm">
                  {template.name}
                </span>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-sky-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
              <span className="bg-white text-sky-950 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </span>
            </div>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              {template.isFree && <Badge variant="success">Free</Badge>}
              {template.isBestseller && (
                <Badge variant="premium">Bestseller</Badge>
              )}
              {template.isNew && <Badge variant="info">New</Badge>}
              {discount > 0 && (
                <Badge variant="danger">-{discount}%</Badge>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Category */}
            <p className="text-xs font-medium text-sky-600 uppercase tracking-wide mb-1.5">
              {template.category}
            </p>

            {/* Title */}
            <h3 className="font-bold text-foreground text-lg leading-tight mb-2 group-hover:text-sky-700 transition-colors line-clamp-1">
              {template.name}
            </h3>

            {/* Description */}
            <p className="text-foreground-secondary text-sm leading-relaxed mb-3 line-clamp-2">
              {template.description}
            </p>

            {/* Rating */}
            <div className="mb-4">
              <StarRating
                rating={template.rating}
                reviewCount={template.reviewCount}
                size="sm"
              />
            </div>

            {/* Price & Action */}
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                {template.isFree ? (
                  <span className="text-xl font-bold text-accent-emerald">
                    Free
                  </span>
                ) : (
                  <>
                    <span className="text-xl font-bold text-foreground">
                      {formatPrice(template.price)}
                    </span>
                    {template.originalPrice && (
                      <span className="text-sm text-foreground-muted line-through">
                        {formatPrice(template.originalPrice)}
                      </span>
                    )}
                  </>
                )}
              </div>
              <Button
                size="sm"
                variant={template.isFree ? "outline" : "primary"}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.preventDefault();
                  // Cart logic will be added
                }}
              >
                {template.isFree ? (
                  <>
                    <Download className="h-3.5 w-3.5" /> Get Free
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-3.5 w-3.5" /> Add
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
