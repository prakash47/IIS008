import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";
import { NewsletterSection } from "@/components/home/newsletter-section";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Gulmohar Cafe",
  description:
    "A cozy cafe offering handcrafted beverages and delicious treats in a warm community atmosphere.",
  url: "https://gulmoharcafe.com",
  telephone: "+919876543210",
  email: "hello@gulmoharcafe.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Gulmohar Lane, Near City Park",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.516726,
    longitude: 73.85674,
  },
  servesCuisine: ["Coffee", "Cafe", "Desserts", "Beverages"],
  priceRange: "₹₹",
  image: "https://gulmoharcafe.com/hero-bg.png",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <CtaSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
