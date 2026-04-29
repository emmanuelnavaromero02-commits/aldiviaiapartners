'use client';
import { useState } from 'react';
import Hero from '@/components/landing/Hero';
import SocialProof from '@/components/landing/SocialProof';
import Solutions from '@/components/landing/Solutions';
import VideoModal from '@/components/landing/VideoModal';
import ContactForm from '@/components/landing/ContactForm';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <main>
      <Hero onOpenVideo={() => setVideoOpen(true)} />
      <SocialProof />
      <Solutions />
      <ContactForm />
      <Footer />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </main>
  );
}
