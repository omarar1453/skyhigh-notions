import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedTemplates from "@/components/home/FeaturedTemplates";
import Testimonials from "@/components/home/Testimonials";
import TrustBanner from "@/components/home/TrustBanner";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <FeaturedTemplates />
      <CategoryGrid />
      <Testimonials />
      <Newsletter />
    </>
  );
}
