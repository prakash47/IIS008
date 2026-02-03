import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ReservationProvider } from "@/components/reservation-provider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gulmoharcafe.com"),
  title: "Gulmohar Cafe | Where Every Sip Tells a Story",
  description:
    "Welcome to Gulmohar Cafe - a cozy haven in the heart of the city. Enjoy handcrafted beverages, delicious treats, and a warm community atmosphere. Visit us today!",
  keywords: [
    "cafe",
    "coffee shop",
    "Pune",
    "Gulmohar Cafe",
    "specialty coffee",
    "pastries",
    "brunch",
  ],
  authors: [{ name: "Gulmohar Cafe" }],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Gulmohar Cafe | Where Every Sip Tells a Story",
    description:
      "A cozy haven for coffee lovers. Handcrafted beverages, delicious treats, and a warm community atmosphere.",
    url: "https://gulmoharcafe.com",
    siteName: "Gulmohar Cafe",
    locale: "en_IN",
    type: "website",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulmohar Cafe | Where Every Sip Tells a Story",
    description: "A cozy haven for coffee lovers in the heart of the city.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <ReservationProvider>
          {children}
        </ReservationProvider>
      </body>
    </html>
  );
}
