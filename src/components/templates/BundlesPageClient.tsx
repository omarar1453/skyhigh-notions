"use client";

import { bundles } from "@/data/templates";
import { formatPrice, getDiscountPercentage } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { ShoppingCart, Check, Package, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BundlesPageClient() {
  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-950 via-sky-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-white/20">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-sm font-medium">Save up to 65%</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Template Bundles
          </h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Get the complete toolkit for a fraction of the price. Our bundles
            are the best value way to transform your Notion workspace.
          </p>
        </div>
      </div>

      {/* Bundles Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-8">
          {bundles.map((bundle, index) => {
            const discount = getDiscountPercentage(
              bundle.originalPrice,
              bundle.price
            );

            return (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <Package className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <h2 className="text-xl md:text-2xl font-extrabold text-foreground">
                        {bundle.name}
                      </h2>
                      {index === 0 && (
                        <Badge variant="premium" size="md">
                          Best Value
                        </Badge>
                      )}
                    </div>
                    <p className="text-foreground-secondary mb-4">
                      {bundle.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-foreground-muted">
                      <Check className="h-4 w-4 text-accent-emerald" />
                      {bundle.templates.length} premium templates included
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="shrink-0 text-right">
                    <div className="mb-1">
                      <span className="text-3xl font-extrabold text-foreground">
                        {formatPrice(bundle.price)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 justify-end mb-1">
                      <span className="text-sm text-foreground-muted line-through">
                        {formatPrice(bundle.originalPrice)}
                      </span>
                      <Badge variant="danger">-{discount}%</Badge>
                    </div>
                    <p className="text-xs text-accent-emerald font-semibold mb-4">
                      You save {formatPrice(bundle.savings)}
                    </p>
                    <Button size="lg" variant="primary">
                      <ShoppingCart className="h-4 w-4" />
                      Get Bundle
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
