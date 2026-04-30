import Hero from '@/components/sections/Hero';
import Metrics from '@/components/sections/Metrics';
import Differentiator from '@/components/sections/Differentiator';
import Cases from '@/components/sections/Cases';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Metrics />
      <Differentiator />
      <Cases />
    </main>
  );
}