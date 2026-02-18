"use client";

import { categories } from "@/data/templates";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CategoryGrid() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Browse by Category
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Templates for every area of your life
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            From personal productivity to business operations — find the perfect
            Notion system for your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link href={`/templates/${cat.slug}`} className="group block">
                <div className="relative p-6 rounded-2xl border border-border bg-white hover:shadow-lg hover:border-sky-200 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white text-lg font-bold mb-4 shadow-md",
                      cat.color
                    )}
                  >
                    {cat.name.charAt(0)}
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-sky-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground-muted">
                      {cat.templateCount} templates
                    </span>
                    <ArrowRight className="h-4 w-4 text-sky-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
