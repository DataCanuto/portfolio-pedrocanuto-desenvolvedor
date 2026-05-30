'use client';

import { Navbar } from '@/components/Header/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { ServicesCatalog } from '@/components/Services/ServicesCatalog';
import { About } from '@/components/About/About';
import { Formation } from '@/components/About/Formation';
import { Certifications } from '@/components/Certificates/Certifications';
import { Projects } from '@/components/Projects/ProjectsGrid';
import { Contact } from '@/components/Contact/ContactSection';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <ServicesCatalog />
      <About />
      <Formation />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
