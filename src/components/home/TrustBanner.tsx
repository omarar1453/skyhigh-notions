"use client";

import {
  CreditCard,
  RefreshCw,
  Shield,
  Zap,
  HeadphonesIcon,
  Download,
} from "lucide-react";

const trustItems = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Get your template immediately after purchase",
  },
  {
    icon: Shield,
    title: "30-Day Guarantee",
    description: "Full refund if you're not satisfied",
  },
  {
    icon: RefreshCw,
    title: "Lifetime Updates",
    description: "Free updates whenever we improve a template",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Protected by Stripe & PayPal encryption",
  },
  {
    icon: Download,
    title: "Easy Setup",
    description: "One-click duplicate to your Notion workspace",
  },
  {
    icon: HeadphonesIcon,
    title: "Priority Support",
    description: "Get help from our team within 24 hours",
  },
];

export default function TrustBanner() {
  return (
    <section className="py-16 bg-background-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="h-5 w-5 text-sky-600" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-foreground-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
