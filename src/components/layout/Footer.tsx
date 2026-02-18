import Link from "next/link";
import { Sparkles } from "lucide-react";

const footerLinks = {
  Templates: [
    { name: "All Templates", href: "/templates" },
    { name: "Free Templates", href: "/free" },
    { name: "Bundles", href: "/bundles" },
    { name: "Life Planners", href: "/templates/life-planner" },
    { name: "Business", href: "/templates/business" },
    { name: "Finance", href: "/templates/finance" },
    { name: "Student", href: "/templates/student" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Affiliate Program", href: "/affiliates" },
  ],
  Support: [
    { name: "Help Center", href: "/help" },
    { name: "Refund Policy", href: "/legal/refunds" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Privacy Policy", href: "/legal/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-white">
      {/* CTA Banner */}
      <div className="border-b border-sky-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to transform your Notion workspace?
          </h2>
          <p className="text-sky-300 mb-6 max-w-xl mx-auto">
            Join 20,000+ professionals using SkyHigh templates to organize
            their life and business.
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 bg-white text-sky-950 px-8 py-3 rounded-xl font-bold hover:bg-sky-50 transition-colors"
          >
            Browse Templates
          </Link>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-extrabold leading-none block">
                  SkyHigh
                </span>
                <span className="text-[10px] font-semibold text-sky-400 uppercase tracking-widest">
                  Notions
                </span>
              </div>
            </Link>
            <p className="text-sky-300 text-sm leading-relaxed">
              Premium Notion templates designed to help you organize, plan, and
              achieve more. Built by professionals, for professionals.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-sm uppercase tracking-wider text-sky-200 mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-sky-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sky-400 text-sm">
            &copy; {new Date().getFullYear()} SkyHigh Notions by RE Studios.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sky-400 text-xs">
              notion.skyhighers.online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
