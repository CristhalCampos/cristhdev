'use client';

import GiveawayBanner from '@/components/GiveawayBanner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import About from '@/components/About';
import Services from '@/components/Services';
import Partnership from '@/components/Partnership';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-(--color-background) text-(--color-foreground) transition-colors duration-300">
      <GiveawayBanner />
      <Navbar />
      <main className="pt-28">
        <Hero />
        <ValueProposition />
        <About />
        <Services />
        <Partnership />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}