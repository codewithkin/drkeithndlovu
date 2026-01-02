import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Keith Ndlovu | Physician • Artist • Leader",
  description:
    "Where medicine meets art. Dr. Keith Ndlovu is a medical doctor, artist, CEO of Westpoint Medical Centre, and founder of Artistico Studios. Explore his artwork and medical practice.",
  keywords: [
    "Dr Keith Ndlovu",
    "Zimbabwe artist",
    "physician artist",
    "Westpoint Medical Centre",
    "Artistico Studios",
    "medical art",
  ],
  authors: [{ name: "Dr. Keith Ndlovu" }],
  openGraph: {
    title: "Dr. Keith Ndlovu | Physician • Artist • Leader",
    description: "Where medicine meets art. Healing bodies. Creating beauty. Leading change.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Keith Ndlovu | Physician • Artist • Leader",
    description: "Where medicine meets art. Healing bodies. Creating beauty. Leading change.",
  },
  metadataBase: new URL("https://drkeithndlovu.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-neutral-900`}
      >
        <BackgroundDecor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
