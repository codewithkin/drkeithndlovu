import {
  HeroSection,
  AboutSection,
  ArtworkSection,
  MedicalSection,
  ArtisticoSection,
  JournalSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* Hero - Main landing section */}
      <HeroSection />

      {/* About - Introduction to Dr. Keith Ndlovu */}
      <AboutSection />

      {/* Featured Artwork - Art portfolio highlight */}
      <ArtworkSection />

      {/* Medical Practice - Westpoint Medical Centre */}
      <MedicalSection />

      {/* Artistico Studios - Art business section */}
      <ArtisticoSection />

      {/* Journal - Blog/insights preview */}
      <JournalSection />

      {/* Contact - Get in touch section */}
      <ContactSection />
    </>
  );
}
