"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Send, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-sky-600 via-sky-700 to-sky-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-white/20">
            <Gift className="h-4 w-4 text-amber-300" />
            <span className="text-sm font-medium text-white">
              Get 3 free templates instantly
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Join the SkyHigh community
          </h2>
          <p className="text-sky-200 text-lg mb-8 max-w-xl mx-auto">
            Subscribe for exclusive templates, Notion tips, and early access to
            new releases. Plus, get 3 premium templates free when you sign up.
          </p>

          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <p className="text-white text-lg font-semibold">
                Welcome to SkyHigh!
              </p>
              <p className="text-sky-200 text-sm mt-1">
                Check your email for your free templates.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-sky-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15 transition-all"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-sky-700 hover:bg-sky-50 shadow-lg"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-sky-300/60 text-xs mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
