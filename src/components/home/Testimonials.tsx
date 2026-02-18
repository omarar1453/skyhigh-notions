"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at Stripe",
    content:
      "The Business OS template completely transformed how I manage my team's projects. We went from scattered tools to one clean system in Notion. Saved us hours every week.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Williams",
    role: "Freelance Designer",
    content:
      "I bought the Life OS and it's genuinely the best purchase I've made for my productivity. Everything is connected — goals, habits, tasks, finances. It just works.",
    rating: 5,
    avatar: "MW",
  },
  {
    name: "Emily Rodriguez",
    role: "MBA Student, Stanford",
    content:
      "The Student OS got me through my MBA. Assignment tracking, study plans, GPA calculator — all in one place. My classmates all asked me where I got it.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "James Park",
    role: "YouTube Creator (250K subs)",
    content:
      "Creator Hub is insane. Content calendar, analytics tracking, brand deal management — I finally have a system that scales with my channel. Worth every penny.",
    rating: 5,
    avatar: "JP",
  },
  {
    name: "Aisha Patel",
    role: "Startup Founder",
    content:
      "The CRM Pro replaced our HubSpot subscription. For a 5-person team, it does everything we need at a fraction of the cost. The pipeline view is beautiful.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "David Kim",
    role: "Personal Finance Blogger",
    content:
      "Finance Hub is the most comprehensive budget tracker I've seen in Notion. Net worth tracking, subscription management, investment portfolio — it's all there.",
    rating: 5,
    avatar: "DK",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Customer Love
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Loved by 20,000+ professionals
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            See why people are switching to SkyHigh Notion templates.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-background-secondary rounded-2xl p-6 border border-border hover:border-sky-200 hover:shadow-md transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground-secondary text-sm leading-relaxed mb-5">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-foreground-muted">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
