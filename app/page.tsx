import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedMenuSection } from "@/components/home/featured-menu-section";
import { StoryPreviewSection } from "@/components/home/story-preview-section";
import { GalleryPreviewSection } from "@/components/home/gallery-preview-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { CtaSection } from "@/components/home/cta-section";
import { NewsletterSection } from "@/components/home/newsletter-section";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://gulmoharcafe.com/#restaurant",
  name: "Gulmohar Cafe",
  description:
    "Gulmohar Cafe is Pune's favorite cafe offering handcrafted specialty coffee, fresh baked goods, and delicious food in a warm, welcoming atmosphere. Perfect for work, study, or catching up with friends.",
  url: "https://gulmoharcafe.com",
  telephone: "+919876543210",
  email: "hello@gulmoharcafe.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Gulmohar Lane, Near City Park",
    addressLocality: "Koregaon Park",
    addressRegion: "Pune, Maharashtra",
    postalCode: "411001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.516726,
    longitude: 73.85674,
  },
  servesCuisine: ["Coffee", "Cafe", "Desserts", "Beverages", "Continental", "Indian"],
  priceRange: "₹₹",
  image: [
    "https://gulmoharcafe.com/hero-bg.png",
    "https://gulmoharcafe.com/gallery-1.png",
    "https://gulmoharcafe.com/gallery-2.png",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "524",
    bestRating: "5",
  },
  sameAs: [
    "https://facebook.com/gulmoharcafe",
    "https://instagram.com/gulmoharcafe",
    "https://twitter.com/gulmoharcafe",
  ],
  hasMenu: "https://gulmoharcafe.com/menu",
  acceptsReservations: "True",
  paymentAccepted: "Cash, Credit Card, UPI, Paytm, Google Pay",
  currenciesAccepted: "INR",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Outdoor Seating", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible", value: true },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://gulmoharcafe.com/#organization",
  name: "Gulmohar Cafe",
  url: "https://gulmoharcafe.com",
  logo: "https://gulmoharcafe.com/hero-bg.png",
  description: "Pune's favorite cafe for specialty coffee and fresh food since 2020",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Gulmohar Team",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Gulmohar Lane, Near City Park",
    addressLocality: "Koregaon Park, Pune",
    addressRegion: "Maharashtra",
    postalCode: "411001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9876543210",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
  sameAs: [
    "https://facebook.com/gulmoharcafe",
    "https://instagram.com/gulmoharcafe",
    "https://twitter.com/gulmoharcafe",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://gulmoharcafe.com",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedMenuSection />
        <StoryPreviewSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <GalleryPreviewSection />
        <TestimonialsSection />
        <InstagramSection />
        <CtaSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
