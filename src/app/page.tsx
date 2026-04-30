'use client';
import { useState } from 'react';
import Hero from '@/components/landing/Hero';
import SocialProof from '@/components/landing/SocialProof';
import Solutions from '@/components/landing/Solutions';
import DifferentiatorSection from '@/components/landing/DifferentiatorSection';
import StatsBar from '@/components/landing/StatsBar';
import TechStack from '@/components/landing/TechStack';
import ROISimulator from '@/components/landing/ROISimulator';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTASection from '@/components/landing/CTASection';
import ContactForm from '@/components/landing/ContactForm';
import VideoModal from '@/components/landing/VideoModal';
import ValdiviChat from '@/components/landing/GeminiChat';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <main>
      <Hero onOpenVideo={() => setVideoOpen(true)} />
      <SocialProof />
      <Solutions />
      <DifferentiatorSection />
      <StatsBar />
      <TechStack />
      <ROISimulator />
      <TestimonialsSection />
      <CTASection />
      <ContactForm />
      <Footer />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
      <ValdiviChat />
    </main>
  );
}
