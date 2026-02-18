import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://notion.skyhighers.online"),
  title: {
    default: "SkyHigh Notions — Premium Notion Templates for Professionals",
    template: "%s | SkyHigh Notions",
  },
  description:
    "Premium Notion templates designed for professionals. All-in-one life planners, business hubs, finance trackers, student systems & more. Instant delivery, lifetime updates.",
  keywords: [
    "Notion templates",
    "Notion planner",
    "Notion life OS",
    "Notion business template",
    "Notion budget tracker",
    "Notion student template",
    "Notion CRM",
    "Notion project management",
    "premium Notion templates",
    "buy Notion templates",
  ],
  authors: [{ name: "RE Studios" }],
  creator: "SkyHigh Notions",
  publisher: "RE Studios",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://notion.skyhighers.online",
    siteName: "SkyHigh Notions",
    title: "SkyHigh Notions — Premium Notion Templates for Professionals",
    description:
      "Premium Notion templates designed for professionals. Instant delivery, lifetime updates.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyHigh Notions — Premium Notion Templates",
    description:
      "Premium Notion templates designed for professionals. Instant delivery, lifetime updates.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
