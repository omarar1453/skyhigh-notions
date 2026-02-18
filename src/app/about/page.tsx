import type { Metadata } from "next";
import {
  Sparkles,
  Target,
  Heart,
  Users,
  Zap,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About SkyHigh Notions",
  description:
    "We build premium Notion templates that help professionals organize their life and business. Learn about our mission and team.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <Sparkles className="h-4 w-4 text-sky-500" />
            <span className="text-sm font-medium text-foreground-secondary">
              By RE Studios
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            We build tools that help you
            <br />
            <span className="gradient-text">organize everything</span>
          </h1>
          <p className="text-lg text-foreground-secondary leading-relaxed max-w-2xl mx-auto">
            SkyHigh Notions creates premium Notion templates for professionals
            who want to spend less time setting up systems and more time doing
            meaningful work. Every template is crafted with care, tested
            extensively, and updated continuously.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-12">
          What we believe in
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Quality Over Quantity",
              description:
                "Every template goes through rigorous testing. We'd rather have 30 exceptional templates than 300 mediocre ones.",
            },
            {
              icon: Heart,
              title: "Customer Obsessed",
              description:
                "30-day money-back guarantee, lifetime updates, and priority support. Your satisfaction is our top priority.",
            },
            {
              icon: Zap,
              title: "Instant Value",
              description:
                "Our templates are ready to use immediately. Just duplicate to your Notion workspace and start organizing within minutes.",
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-7 w-7 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-sky-950 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20,000+", label: "Happy Customers" },
              { number: "50,000+", label: "Templates Downloaded" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "30-Day", label: "Money-Back Guarantee" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold mb-1">
                  {stat.number}
                </p>
                <p className="text-sky-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
