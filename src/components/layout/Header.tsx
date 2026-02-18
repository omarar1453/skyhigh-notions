"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  User,
} from "lucide-react";
import { categories } from "@/data/templates";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl flex items-center justify-center shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-foreground leading-none">
                SkyHigh
              </span>
              <span className="text-[10px] font-semibold text-sky-600 uppercase tracking-widest leading-none">
                Notions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/templates"
              className="px-3 py-2 text-sm font-medium text-foreground-secondary hover:text-foreground hover:bg-background-tertiary rounded-lg transition-colors"
            >
              Templates
            </Link>

            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground-secondary hover:text-foreground hover:bg-background-tertiary rounded-lg transition-colors">
                Categories
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    categoriesOpen && "rotate-180"
                  )}
                />
              </button>

              {categoriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-border p-2 animate-fade-in-up">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/templates/${cat.slug}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-background-secondary transition-colors"
                    >
                      <div
                        className={cn(
                          "w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center text-white text-xs font-bold",
                          cat.color
                        )}
                      >
                        {cat.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {cat.name}
                        </p>
                        <p className="text-xs text-foreground-muted">
                          {cat.templateCount} templates
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/bundles"
              className="px-3 py-2 text-sm font-medium text-foreground-secondary hover:text-foreground hover:bg-background-tertiary rounded-lg transition-colors"
            >
              Bundles
            </Link>
            <Link
              href="/free"
              className="px-3 py-2 text-sm font-medium text-accent-emerald hover:bg-emerald-50 rounded-lg transition-colors"
            >
              Free Templates
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button className="p-2.5 text-foreground-secondary hover:text-foreground hover:bg-background-tertiary rounded-lg transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2.5 text-foreground-secondary hover:text-foreground hover:bg-background-tertiary rounded-lg transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-sky-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Account */}
            <Link href="/account" className="hidden md:block">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4" />
                Account
              </Button>
            </Link>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2.5 text-foreground-secondary hover:text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white animate-fade-in-up">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link
              href="/templates"
              className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-background-secondary rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              All Templates
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/templates/${cat.slug}`}
                className="block px-3 py-2.5 text-sm text-foreground-secondary hover:bg-background-secondary rounded-lg pl-6"
                onClick={() => setMobileOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/bundles"
              className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-background-secondary rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Bundles
            </Link>
            <Link
              href="/free"
              className="block px-3 py-2.5 text-sm font-medium text-accent-emerald hover:bg-emerald-50 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Free Templates
            </Link>
            <div className="pt-2 border-t border-border">
              <Link href="/account" onClick={() => setMobileOpen(false)}>
                <Button variant="primary" size="md" className="w-full">
                  <User className="h-4 w-4" />
                  My Account
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
