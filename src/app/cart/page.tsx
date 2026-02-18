"use client";

import Button from "@/components/ui/Button";
import { ShoppingCart, ArrowRight, Trash2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  // Cart state will be managed via React Context/Zustand later
  const cartItems: never[] = [];

  return (
    <div className="min-h-screen bg-background-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <h1 className="text-3xl font-extrabold text-foreground mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-border">
            <ShoppingCart className="h-16 w-16 text-foreground-muted mx-auto mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-2">
              Your cart is empty
            </h2>
            <p className="text-foreground-secondary mb-8 max-w-md mx-auto">
              Discover our premium Notion templates and start organizing your
              life, business, and goals today.
            </p>
            <Link href="/templates">
              <Button size="lg" variant="primary">
                Browse Templates
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Items will be rendered here */}
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-2xl border border-border p-6 sticky top-24">
                <h2 className="text-lg font-bold text-foreground mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground-secondary">Subtotal</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground-secondary">Discount</span>
                    <span className="font-medium text-accent-emerald">
                      -$0.00
                    </span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-extrabold text-xl">$0.00</span>
                  </div>
                </div>

                <Button size="lg" variant="primary" className="w-full mb-4">
                  Checkout
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-2 justify-center text-xs text-foreground-muted">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Secure checkout powered by Stripe
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
