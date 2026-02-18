"use client";

import Button from "@/components/ui/Button";
import { ArrowRight, Star, Users, Download, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-full px-4 py-1.5 mb-8 shadow-sm"
          >
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground-secondary">
              Trusted by <span className="font-bold text-foreground">20,000+</span> professionals
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Premium Notion Templates
            <br />
            <span className="gradient-text">Built for Professionals</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Stop building from scratch. Our professionally designed Notion systems
            help you organize your life, run your business, and achieve your
            goals — in minutes, not months.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Link href="/templates">
              <Button size="xl" variant="primary">
                Browse Templates
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/free">
              <Button size="xl" variant="outline">
                Get Free Templates
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                <Download className="h-5 w-5 text-sky-600" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-foreground">50,000+</p>
                <p className="text-xs text-foreground-muted">Downloads</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <Star className="h-5 w-5 text-amber-500" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-foreground">4.9/5</p>
                <p className="text-xs text-foreground-muted">Avg Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Users className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-foreground">20,000+</p>
                <p className="text-xs text-foreground-muted">Happy Users</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                <Shield className="h-5 w-5 text-violet-600" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-foreground">30-Day</p>
                <p className="text-xs text-foreground-muted">Money Back</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
